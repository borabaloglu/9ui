"use client";

import { useId, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

const today = new Date();
const firstMonth = new Date(1900, 0);

export default function DatePickerDateOfBirthDemo() {
	const id = useId();
	const labelId = useId();
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<Field className="w-60">
			<FieldLabel id={labelId} htmlFor={id}>
				Date of birth
			</FieldLabel>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					render={
						<Button
							id={id}
							aria-labelledby={`${labelId} ${id}`}
							variant="outline"
							className="justify-between font-normal any-pointer-coarse:text-base"
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
						captionLayout="dropdown"
						startMonth={firstMonth}
						endMonth={today}
						disabled={{ after: today }}
						selected={date}
						defaultMonth={date}
						onSelect={(next) => {
							setDate(next);
							setOpen(false);
						}}
					/>
				</PopoverPopup>
			</Popover>
		</Field>
	);
}
