"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function CheckboxInvalidDemo() {
	const [checked, setChecked] = useState(false);

	return (
		<Field name="terms" invalid={!checked} className="w-fit">
			<FieldLabel>
				<Checkbox checked={checked} onCheckedChange={setChecked} />
				Accept terms and conditions
			</FieldLabel>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				<FieldError match={!checked}>Accept the terms to continue.</FieldError>
			</div>
		</Field>
	);
}
