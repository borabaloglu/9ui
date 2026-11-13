"use client";

import { useState } from "react";
import { addDays } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const presets = [
	{ label: "Today", value: 0 },
	{ label: "Tomorrow", value: 1 },
	{ label: "In 3 days", value: 3 },
	{ label: "In a week", value: 7 },
	{ label: "In 2 weeks", value: 14 },
	{ label: "In 1 month", value: 30 },
];

export default function CalendarPresetsDemo() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [month, setMonth] = useState<Date>(new Date());

	return (
		<Card className="w-fit">
			<CardContent>
				<Calendar
					mode="single"
					month={month}
					onMonthChange={setMonth}
					selected={date}
					onSelect={setDate}
					fixedWeeks
					className="p-0 [--cell-size:--spacing(10)]"
				/>
			</CardContent>
			<CardFooter className="grid grid-cols-3 gap-2">
				{presets.map((preset) => (
					<Button
						key={preset.value}
						variant="outline"
						size="sm"
						onClick={() => {
							const newDate = addDays(new Date(), preset.value);
							setDate(newDate);
							setMonth(newDate);
						}}
					>
						{preset.label}
					</Button>
				))}
			</CardFooter>
		</Card>
	);
}
