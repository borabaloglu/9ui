"use client"

import { useState } from "react"
import { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarRange() {
	const [range, setRange] = useState<DateRange | undefined>(undefined)

	return (
		<Calendar
			mode="range"
			selected={range}
			onSelect={setRange}
			showOutsideDays
		/>
	)
}
