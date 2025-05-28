import * as React from "react"
import { Check, ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"

const statuses = [
	{
		value: "backlog",
		label: "Backlog",
		color: "bg-slate-500",
	},
	{
		value: "todo",
		label: "Todo",
		color: "bg-blue-500",
	},
	{
		value: "in-progress",
		label: "In Progress",
		color: "bg-yellow-500",
	},
	{
		value: "done",
		label: "Done",
		color: "bg-green-500",
	},
	{
		value: "canceled",
		label: "Canceled",
		color: "bg-red-500",
	},
]

export default function ComboboxDemo() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("todo")

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={(props) => (
					<Button
						{...props}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						{value && (
							<div className="flex items-center gap-2">
								<div
									className={cn(
										"size-2 rounded-full",
										statuses.find((status) => status.value === value)?.color
									)}
								/>
								{statuses.find((status) => status.value === value)?.label}
							</div>
						)}
						<ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				)}
			/>
			<PopoverContent className="w-[200px] p-0" sideOffset={4} arrow={false}>
				<Command>
					<CommandInput
						placeholder="Search status..."
						className="border-none focus:ring-0"
					/>
					<CommandList>
						<CommandEmpty>No status found.</CommandEmpty>
						<CommandGroup>
							{statuses.map((status) => (
								<CommandItem
									key={status.value}
									value={status.value}
									onSelect={(currentValue) => {
										setValue(currentValue)
										setOpen(false)
									}}
								>
									<div className="flex items-center gap-2">
										<div className={cn("size-2 rounded-full", status.color)} />
										<span>{status.label}</span>
									</div>
									{value === status.value && (
										<Check className="ml-auto size-4 shrink-0 opacity-50" />
									)}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
