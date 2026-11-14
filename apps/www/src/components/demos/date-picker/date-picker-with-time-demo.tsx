"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon, ClockIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerWithTimeDemo() {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [time, setTime] = useState("12:00");

	return (
		<div className="flex w-full max-w-80 flex-col gap-2 sm:flex-row">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					render={
						<Button
							variant="outline"
							className="justify-between font-normal sm:min-w-0 sm:flex-1 any-pointer-coarse:text-base"
						/>
					}
				>
					<span className="flex min-w-0 items-center gap-2">
						<CalendarIcon className="text-muted-foreground" />
						{date ? (
							<span className="truncate">{format(date, "MMM d, yyyy")}</span>
						) : (
							<span className="text-muted-foreground truncate">
								Select a date
							</span>
						)}
					</span>
					<ChevronsUpDownIcon className="text-muted-foreground" />
				</PopoverTrigger>
				<PopoverPopup className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						autoFocus
						fixedWeeks
						selected={date}
						defaultMonth={date}
						onSelect={(next) => {
							setDate(next);
							setOpen(false);
						}}
					/>
				</PopoverPopup>
			</Popover>
			<InputGroup className="sm:w-32">
				<InputGroupAddon>
					<ClockIcon />
				</InputGroupAddon>
				<InputGroupInput
					type="time"
					aria-label="Time"
					value={time}
					onChange={(event) => setTime(event.target.value)}
					className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
				/>
			</InputGroup>
		</div>
	);
}
