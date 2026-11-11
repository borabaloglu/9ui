"use client";

import { useId, useState } from "react";

import {
	Field,
	FieldError,
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";

const plans = [
	{ value: "basic", label: "Basic" },
	{ value: "standard", label: "Standard" },
	{ value: "premium", label: "Premium" },
];

export default function RadioGroupInvalidDemo() {
	const id = useId();
	const [value, setValue] = useState<string | null>(null);

	return (
		<Field name="plan" invalid={!value} className="w-fit">
			<RadioGroup
				aria-labelledby={id}
				value={value}
				onValueChange={(next) => setValue(next as string)}
			>
				<RadioGroupLabel id={id}>Plan</RadioGroupLabel>
				{plans.map((plan) => (
					<FieldItem key={plan.value}>
						<FieldLabel className="font-normal">
							<Radio value={plan.value} />
							{plan.label}
						</FieldLabel>
					</FieldItem>
				))}
			</RadioGroup>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				<FieldError match={!value}>Choose a plan to continue.</FieldError>
			</div>
		</Field>
	);
}
