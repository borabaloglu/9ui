import * as React from "react"
import { CheckIcon, ChevronsUpDown } from "lucide-react"
import * as BasePhoneInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

import { cn } from "@/lib/utils"

type PhoneInputProps = Omit<
	React.ComponentProps<"input">,
	"onChange" | "value" | "ref"
> &
	Omit<BasePhoneInput.Props<typeof BasePhoneInput.default>, "onChange"> & {
		onChange?: (value: BasePhoneInput.Value) => void
	}

function PhoneInput({ className, onChange, value, ...props }: PhoneInputProps) {
	return (
		<BasePhoneInput.default
			className={cn(
				"flex",
				props["aria-invalid"] &&
					"[&_*[data-slot=popover-trigger]]:border-destructive [&_*[data-slot=popover-trigger]]:ring-destructive/50",
				className
			)}
			flagComponent={FlagComponent}
			countrySelectComponent={CountrySelect}
			inputComponent={InputComponent}
			smartCaret={false}
			value={value || undefined}
			onChange={(value) => onChange?.(value || ("" as BasePhoneInput.Value))}
			{...props}
		/>
	)
}

function InputComponent({
	className,
	...props
}: React.ComponentProps<typeof Input>) {
	return <Input className={cn("rounded-s-none", className)} {...props} />
}

type CountryEntry = { label: string; value: BasePhoneInput.Country | undefined }

type CountrySelectProps = {
	disabled?: boolean
	value: BasePhoneInput.Country
	options: CountryEntry[]
	onChange: (country: BasePhoneInput.Country) => void
}

function CountrySelect({
	disabled,
	value: selectedCountry,
	options: countryList,
	onChange,
	...other
}: CountrySelectProps) {
	console.log({ other })
	const scrollAreaRef = React.useRef<HTMLDivElement>(null)
	const viewportRef = React.useRef<HTMLElement | null>(null)
	const [searchValue, setSearchValue] = React.useState("")
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Popover
			open={isOpen}
			modal
			onOpenChange={(open) => {
				setIsOpen(open)
				if (open) {
					setSearchValue("")
					if (scrollAreaRef.current) {
						viewportRef.current = scrollAreaRef.current.querySelector(
							"[data-slot=scroll-area-viewport]"
						)
					}
				}
			}}
		>
			<PopoverTrigger
				render={(props) => (
					<Button
						{...props}
						type="button"
						variant="outline"
						className="flex gap-1 rounded-s-md rounded-e-none border-r-0 px-3 focus:z-10"
						disabled={disabled}
					>
						<FlagComponent
							country={selectedCountry}
							countryName={selectedCountry}
						/>
						<ChevronsUpDown className={cn("-mr-1", disabled && "hidden")} />
					</Button>
				)}
			/>
			<PopoverContent className="w-[300px] p-0" arrow={false}>
				<Command>
					<CommandInput
						value={searchValue}
						onValueChange={(value) => {
							setSearchValue(value)
							requestAnimationFrame(() => {
								if (viewportRef.current) {
									viewportRef.current.scrollTop = 0
								}
							})
						}}
						placeholder="Search country..."
					/>
					<CommandList>
						<ScrollArea ref={scrollAreaRef} className="h-72">
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{countryList.map(({ value, label }) =>
									value ? (
										<CountrySelectOption
											key={value}
											country={value}
											countryName={label}
											selectedCountry={selectedCountry}
											onChange={onChange}
											onSelectComplete={() => setIsOpen(false)}
										/>
									) : null
								)}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

interface CountrySelectOptionProps extends BasePhoneInput.FlagProps {
	selectedCountry: BasePhoneInput.Country
	onChange: (country: BasePhoneInput.Country) => void
	onSelectComplete: () => void
}

function CountrySelectOption({
	country,
	countryName,
	selectedCountry,
	onChange,
	onSelectComplete,
}: CountrySelectOptionProps) {
	const handleSelect = () => {
		onChange(country)
		onSelectComplete()
	}

	return (
		<CommandItem className="gap-2" onSelect={handleSelect}>
			<FlagComponent country={country} countryName={countryName} />
			<span className="flex-1 text-sm">{countryName}</span>
			<span className="text-foreground/50 text-sm">{`+${BasePhoneInput.getCountryCallingCode(country)}`}</span>
			<CheckIcon
				className={`ml-auto size-4 shrink-0 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}
			/>
		</CommandItem>
	)
}

function FlagComponent({ country, countryName }: BasePhoneInput.FlagProps) {
	const Flag = flags[country]

	return (
		<span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm [&_svg:not([class*='size-'])]:size-full">
			{Flag && <Flag title={countryName} />}
		</span>
	)
}

export { PhoneInput }
