import * as React from "react"
import dayjs from "dayjs"
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePickerDemo() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState<Date | undefined>(undefined)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={(props) => (
					<Button
						{...props}
						variant="outline"
						className="w-[250px] justify-between"
					>
						<div className="flex items-center">
							<CalendarIcon className="mr-2 size-4" />
							{value ? (
								<span>{dayjs(value).format("DD MMMM YYYY")}</span>
							) : (
								<span>Select a date</span>
							)}
						</div>
						<ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				)}
			/>
			<PopoverContent className=" p-0" sideOffset={4} arrow={false}>
				<Calendar
					className="border-0"
					mode="single"
					showOutsideDays
					selected={value}
					onSelect={setValue}
				/>
			</PopoverContent>
		</Popover>
	)
}
