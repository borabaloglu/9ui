"use client";

import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const items = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Orange", value: "orange" },
	{ label: "Peach", value: "peach" },
	{ label: "Strawberry", value: "strawberry" },
];

export default function SelectInvalidDemo() {
	const [value, setValue] = useState<string | null>(null);

	return (
		<Field name="fruit" invalid={!value} className="w-44">
			<FieldLabel>Fruit</FieldLabel>
			<Select items={items} value={value} onValueChange={setValue}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectPopup>
					{items.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectPopup>
			</Select>
			<div className="min-h-lh text-sm leading-normal text-nowrap">
				<FieldError match={!value}>Select a fruit.</FieldError>
			</div>
		</Field>
	);
}
