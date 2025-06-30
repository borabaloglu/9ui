"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarCard() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

	return (
		<Card className="p-0">
			<CardContent className="flex flex-col items-center justify-center p-1">
				<Calendar
					className="mx-auto border-none"
					showOutsideDays
					mode="single"
					selected={selectedDate}
					onSelect={setSelectedDate}
				/>
			</CardContent>
		</Card>
	)
}
