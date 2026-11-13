"use client";

import { useState } from "react";
import { addDays } from "date-fns";
import type { DateRange, DayButtonProps } from "react-day-picker";

import { Calendar, CalendarDayButton } from "@/components/ui/calendar";

function PriceDayButton({ children, ...props }: DayButtonProps) {
	const weekday = props.day.date.getDay();
	const isWeekend = weekday === 0 || weekday === 6;

	return (
		<CalendarDayButton {...props}>
			{children}
			{!props.modifiers.outside && (
				<span className="text-xs opacity-70">{isWeekend ? "$80" : "$60"}</span>
			)}
		</CalendarDayButton>
	);
}

export default function CalendarCustomCellDemo() {
	const [range, setRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 10),
	});

	return (
		<Calendar
			mode="range"
			defaultMonth={range?.from}
			selected={range}
			onSelect={setRange}
			captionLayout="dropdown"
			showOutsideDays={false}
			className="rounded-xl border [--cell-size:--spacing(10)]"
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString("default", { month: "long" }),
			}}
			components={{ DayButton: PriceDayButton }}
		/>
	);
}
