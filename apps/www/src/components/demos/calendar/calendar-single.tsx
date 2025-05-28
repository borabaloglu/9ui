"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarSingle() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

	return (
		<Calendar
			mode="single"
			selected={selectedDate}
			onSelect={setSelectedDate}
			showOutsideDays
		/>
	)
}
