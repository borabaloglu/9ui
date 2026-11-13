"use client";

import * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { ChevronsUpDownIcon, GlobeIcon } from "lucide-react";
import * as BasePhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import {
	Combobox,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxTrigger,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";

import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
	React.ComponentProps<"input">,
	"onChange" | "value" | "ref"
> &
	Omit<
		BasePhoneInput.Props<typeof BasePhoneInput.default>,
		| "onChange"
		| "inputComponent"
		| "containerComponent"
		| "containerComponentProps"
		| "countrySelectComponent"
		| "countrySelectProps"
	> & {
		onChange?: (value: BasePhoneInput.Value) => void;
		searchPlaceholder?: string;
		emptyMessage?: string;
	};

function PhoneInput({
	onChange,
	value,
	searchPlaceholder = "Search countries",
	emptyMessage = "No countries found.",
	...props
}: PhoneInputProps) {
	const anchor = React.useRef<HTMLDivElement>(null);

	return (
		<BasePhoneInput.default
			containerComponent={InputGroup}
			containerComponentProps={{ ref: anchor }}
			countrySelectComponent={PhoneInputCountrySelect}
			countrySelectProps={{ anchor, searchPlaceholder, emptyMessage }}
			inputComponent={InputGroupInput}
			smartCaret={false}
			value={value || undefined}
			onChange={(value) => onChange?.(value || ("" as BasePhoneInput.Value))}
			{...props}
		/>
	);
}

type PhoneInputCountry = {
	label: string;
	value?: BasePhoneInput.Country;
};

type PhoneInputCountrySelectProps = {
	"aria-label"?: string;
	disabled?: boolean;
	readOnly?: boolean;
	value?: BasePhoneInput.Country;
	options: PhoneInputCountry[];
	onChange: (country: BasePhoneInput.Country) => void;
	anchor: React.RefObject<HTMLDivElement | null>;
	searchPlaceholder: string;
	emptyMessage: string;
};

function PhoneInputCountrySelect({
	"aria-label": ariaLabel = "Country",
	disabled,
	readOnly,
	value,
	options,
	onChange,
	anchor,
	searchPlaceholder,
	emptyMessage,
}: PhoneInputCountrySelectProps) {
	const countries = React.useMemo(
		() => options.filter((option) => option.value),
		[options],
	);
	const selected = countries.find((country) => country.value === value) ?? null;

	return (
		<BaseField.Root render={<InputGroupAddon align="inline-start" />}>
			<Combobox
				items={countries}
				value={selected}
				onValueChange={(country) => {
					if (country?.value) onChange(country.value);
				}}
				isItemEqualToValue={(a, b) => a.value === b.value}
				disabled={disabled || readOnly}
				autoHighlight
			>
				<InputGroupButton
					render={<ComboboxTrigger />}
					aria-label={selected ? `${ariaLabel}: ${selected.label}` : ariaLabel}
					className="gap-1 px-1 aria-expanded:bg-transparent data-disabled:opacity-100 dark:aria-expanded:bg-transparent"
				>
					<PhoneInputFlag country={value} />
					<ChevronsUpDownIcon className="text-muted-foreground" />
				</InputGroupButton>
				<ComboboxPopup
					anchor={anchor}
					aria-label={ariaLabel}
					className="w-(--anchor-width) min-w-64"
					finalFocus={() => !anchor.current?.contains(document.activeElement)}
				>
					<div className="p-1 pb-0">
						<ComboboxInput
							placeholder={searchPlaceholder}
							aria-label={searchPlaceholder}
							render={<Input className="rounded-md shadow-none" />}
						/>
					</div>
					<ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
					<ComboboxList>
						{(country: PhoneInputCountry) => (
							<ComboboxItem key={country.value} value={country}>
								<PhoneInputFlag country={country.value} />
								<span className="flex-1 truncate">{country.label}</span>
								{country.value && (
									<span className="text-muted-foreground tabular-nums">
										+{BasePhoneInput.getCountryCallingCode(country.value)}
									</span>
								)}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxPopup>
			</Combobox>
		</BaseField.Root>
	);
}

function PhoneInputFlag({
	country,
	className,
}: {
	country?: BasePhoneInput.Country;
	className?: string;
}) {
	const Flag = country ? flags[country] : undefined;

	return (
		<span
			aria-hidden="true"
			data-slot="phone-input-flag"
			className={cn(
				"text-muted-foreground flex h-4 w-6 shrink-0 items-center justify-center overflow-hidden rounded-xs [&>svg:not([class*='size-'])]:size-full",
				!Flag && "[&>svg:not([class*='size-'])]:size-4",
				className,
			)}
		>
			{Flag ? <Flag title="" /> : <GlobeIcon />}
		</span>
	);
}

export { PhoneInput };
