"use client";

import { useRef, useState } from "react";
import * as chrono from "chrono-node";
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

export default function DatePickerNaturalLanguageDemo() {
	const anchor = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [month, setMonth] = useState<Date | undefined>(undefined);

	return (
		<div className="flex w-full max-w-72 flex-col gap-2">
			<InputGroup ref={anchor}>
				<InputGroupInput
					ref={input}
					aria-label="Date"
					placeholder="Try “next Friday” or “in 3 days”"
					value={value}
					onChange={(event) => {
						const next = chrono.parseDate(event.target.value) ?? undefined;

						setValue(event.target.value);
						setDate(next);
						if (next) setMonth(next);
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
			<p className="text-muted-foreground px-1 text-xs" aria-live="polite">
				{date ? format(date, "EEEE, MMM d, yyyy") : "No date selected"}
			</p>
		</div>
	);
}
