"use client";

import { useState } from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarRangeDemo() {
	const [range, setRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 20),
	});

	return (
		<Calendar
			mode="range"
			numberOfMonths={2}
			selected={range}
			onSelect={setRange}
			fixedWeeks
			className="rounded-xl border"
		/>
	);
}
