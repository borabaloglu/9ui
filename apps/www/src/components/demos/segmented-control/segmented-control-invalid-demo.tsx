"use client";

import { useId, useState } from "react";

import { Field, FieldError } from "@/components/ui/field";
import {
	SegmentedControl,
	SegmentedControlItem,
	SegmentedControlLabel,
} from "@/components/ui/segmented-control";

export default function SegmentedControlInvalidDemo() {
	const id = useId();
	const [value, setValue] = useState<string | null>(null);

	return (
		<Field name="billing" invalid={!value} className="w-fit">
			<SegmentedControlLabel id={id}>Billing period</SegmentedControlLabel>
			<SegmentedControl
				aria-labelledby={id}
				value={value}
				onValueChange={(next) => setValue(next as string)}
			>
				<SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
				<SegmentedControlItem value="yearly">Yearly</SegmentedControlItem>
			</SegmentedControl>
			<div className="min-h-lh text-sm leading-normal text-nowrap contain-inline-size">
				<FieldError match={!value}>Choose a billing period.</FieldError>
			</div>
		</Field>
	);
}
