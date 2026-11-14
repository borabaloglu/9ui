"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerDemo() {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						className="w-60 justify-between font-normal any-pointer-coarse:text-base"
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
	);
}
