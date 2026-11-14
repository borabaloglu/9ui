"use client";

import { useRef, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

function parseDate(value: string) {
	const date = new Date(value);

	return Number.isNaN(date.getTime()) ? undefined : date;
}

export default function DatePickerInputDemo() {
	const anchor = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [month, setMonth] = useState<Date | undefined>(undefined);

	return (
		<InputGroup ref={anchor} className="w-60">
			<InputGroupInput
				ref={input}
				aria-label="Date"
				placeholder="Dec 13, 2026"
				value={value}
				onChange={(event) => {
					const next = parseDate(event.target.value);

					setValue(event.target.value);
					setDate(next);
					if (next) setMonth(next);
				}}
				onBlur={() => {
					if (date) setValue(format(date, "MMM d, yyyy"));
				}}
				onKeyDown={(event) => {
					if (event.key === "ArrowDown") {
						event.preventDefault();
						setOpen(true);
					}
				}}
			/>
			<InputGroupAddon align="inline-end">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger
						render={
							<InputGroupButton size="icon-xs" aria-label="Open calendar" />
						}
					>
						<CalendarIcon />
					</PopoverTrigger>
					<PopoverPopup
						className="w-auto p-0"
						align="end"
						anchor={anchor}
						finalFocus={(type) => (type === "touch" ? true : input.current)}
					>
						<Calendar
							mode="single"
							autoFocus
							fixedWeeks
							selected={date}
							month={month}
							onMonthChange={setMonth}
							onSelect={(next) => {
								setDate(next);
								setValue(next ? format(next, "MMM d, yyyy") : "");
								setOpen(false);
							}}
						/>
					</PopoverPopup>
				</Popover>
			</InputGroupAddon>
		</InputGroup>
	);
}
