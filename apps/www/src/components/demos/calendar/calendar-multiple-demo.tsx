"use client";

import { useState } from "react";
import { addDays } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarMultipleDemo() {
	const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([
		new Date(),
		addDays(new Date(), 2),
	]);

	return (
		<Calendar
			mode="multiple"
			selected={selectedDates}
			onSelect={setSelectedDates}
			className="rounded-xl border"
		/>
	);
}
