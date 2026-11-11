"use client";

import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldInvalidDemo() {
	const [guests, setGuests] = useState<number | null>(0);
	const invalid = !guests;

	return (
		<Field name="guests" invalid={invalid} className="w-36">
			<FieldLabel>Guests</FieldLabel>
			<NumberField value={guests} onValueChange={setGuests} min={0} max={20}>
				<NumberFieldGroup>
					<NumberFieldDecrement />
					<NumberFieldInput />
					<NumberFieldIncrement />
				</NumberFieldGroup>
			</NumberField>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				<FieldError match={invalid}>Add at least one guest.</FieldError>
			</div>
		</Field>
	);
}
