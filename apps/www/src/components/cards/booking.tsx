"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const days = [
	{ value: "Thu 19", weekday: "Thu", date: "19" },
	{ value: "Fri 20", weekday: "Fri", date: "20" },
	{ value: "Sat 21", weekday: "Sat", date: "21" },
	{ value: "Sun 22", weekday: "Sun", date: "22" },
];

const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

export function BookingCard() {
	const [day, setDay] = useState("Fri 20");
	const [time, setTime] = useState("19:30");
	const [guests, setGuests] = useState(2);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Book a table</CardTitle>
				<CardDescription>Osteria Nove · Italian</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<ToggleGroup
					variant="outline"
					spacing={2}
					value={[day]}
					onValueChange={([value]) => value && setDay(value)}
					aria-label="Day"
					className="w-full"
				>
					{days.map(({ value, weekday, date }) => (
						<ToggleGroupItem
							key={value}
							value={value}
							className="h-auto flex-1 flex-col gap-0 py-1.5"
						>
							<span className="text-muted-foreground text-xs font-normal">
								{weekday}
							</span>
							<span className="text-base tabular-nums">{date}</span>
						</ToggleGroupItem>
					))}
				</ToggleGroup>
				<ToggleGroup
					variant="outline"
					spacing={2}
					value={[time]}
					onValueChange={([value]) => value && setTime(value)}
					aria-label="Time"
					className="grid w-full grid-cols-3"
				>
					{times.map((value) => (
						<ToggleGroupItem
							key={value}
							value={value}
							disabled={value === "19:00"}
							className="tabular-nums"
						>
							{value}
						</ToggleGroupItem>
					))}
				</ToggleGroup>
				<div className="flex items-center justify-between gap-4">
					<Label htmlFor="booking-guests">Number of guests</Label>
					<NumberField
						id="booking-guests"
						className="w-28"
						value={guests}
						onValueChange={(value) => setGuests(value ?? 1)}
						min={1}
						max={12}
					>
						<NumberFieldGroup>
							<NumberFieldDecrement />
							<NumberFieldInput />
							<NumberFieldIncrement />
						</NumberFieldGroup>
					</NumberField>
				</div>
			</CardContent>
			<CardFooter className="justify-between gap-4">
				<span className="text-muted-foreground tabular-nums">
					{day} · {time} · {guests} {guests === 1 ? "guest" : "guests"}
				</span>
				<Button size="sm">Reserve</Button>
			</CardFooter>
		</Card>
	);
}
