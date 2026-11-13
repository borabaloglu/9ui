"use client";

import { useState } from "react";

import {
	Combobox,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
} from "@/components/ui/combobox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ComboboxInvalidDemo() {
	const [value, setValue] = useState<Fruit | null>(null);

	return (
		<Field name="fruit" invalid={!value} className="max-w-sm">
			<FieldLabel>Fruit</FieldLabel>
			<Combobox items={fruits} value={value} onValueChange={setValue}>
				<ComboboxInput placeholder="e.g. Apple" render={<Input />} />
				<ComboboxPopup>
					<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					<ComboboxList>
						{(fruit: Fruit) => (
							<ComboboxItem key={fruit.value} value={fruit}>
								{fruit.label}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxPopup>
			</Combobox>
			<div className="min-h-lh text-sm leading-normal">
				<FieldError match={!value}>Select a fruit.</FieldError>
			</div>
		</Field>
	);
}

interface Fruit {
	label: string;
	value: string;
}

const fruits: Fruit[] = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Pineapple", value: "pineapple" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Raspberry", value: "raspberry" },
	{ label: "Blackberry", value: "blackberry" },
	{ label: "Cherry", value: "cherry" },
	{ label: "Peach", value: "peach" },
	{ label: "Pear", value: "pear" },
	{ label: "Plum", value: "plum" },
	{ label: "Kiwi", value: "kiwi" },
	{ label: "Watermelon", value: "watermelon" },
	{ label: "Cantaloupe", value: "cantaloupe" },
	{ label: "Honeydew", value: "honeydew" },
	{ label: "Papaya", value: "papaya" },
	{ label: "Guava", value: "guava" },
	{ label: "Lychee", value: "lychee" },
	{ label: "Pomegranate", value: "pomegranate" },
	{ label: "Apricot", value: "apricot" },
	{ label: "Grapefruit", value: "grapefruit" },
	{ label: "Passionfruit", value: "passionfruit" },
];
