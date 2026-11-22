"use client";

import { SearchIcon } from "lucide-react";

import {
	Combobox,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxInputGroup,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
} from "@/components/ui/combobox";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function ComboboxInputGroupDemo() {
	return (
		<Combobox items={fruits}>
			<ComboboxInputGroup render={<InputGroup className="w-full max-w-sm" />}>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<SearchIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					aria-label="Fruit"
					placeholder="e.g. Apple"
					render={<ComboboxInput />}
				/>
			</ComboboxInputGroup>

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
