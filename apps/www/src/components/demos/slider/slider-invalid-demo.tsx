"use client";

import { useState } from "react";

import { Field, FieldError } from "@/components/ui/field";
import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderInvalidDemo() {
	const [seats, setSeats] = useState(0);

	return (
		<Field name="seats" invalid={seats === 0} className="max-w-60">
			<Slider value={seats} onValueChange={setSeats} max={20}>
				<SliderLabel>Seats</SliderLabel>
				<SliderValue />
			</Slider>
			<div className="min-h-lh text-sm leading-normal">
				<FieldError match={seats === 0}>Add at least one seat.</FieldError>
			</div>
		</Field>
	);
}
