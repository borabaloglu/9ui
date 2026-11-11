"use client";

import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchInvalidDemo() {
	const [checked, setChecked] = useState(false);

	return (
		<Field name="terms" invalid={!checked} className="w-fit">
			<FieldLabel>
				<Switch checked={checked} onCheckedChange={setChecked} />
				Accept terms and conditions
			</FieldLabel>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				<FieldError match={!checked}>Accept the terms to continue.</FieldError>
			</div>
		</Field>
	);
}
