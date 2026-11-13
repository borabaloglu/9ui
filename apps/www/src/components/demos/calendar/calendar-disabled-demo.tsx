"use client";

import { useState } from "react";
import { addDays } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarDisabledDemo() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
	const disabledDates = Array.from({ length: 15 }, (_, i) =>
		addDays(new Date(), i),
	);

	return (
		<Calendar
			mode="single"
			selected={selectedDate}
			onSelect={setSelectedDate}
			disabled={disabledDates}
			className="rounded-xl border"
		/>
	);
}
