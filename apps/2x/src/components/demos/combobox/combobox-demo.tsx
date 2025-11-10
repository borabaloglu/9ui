import * as React from "react"

import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

export default function ComboboxDemo() {
	return (
		<Combobox items={fruits}>
			<div className="relative flex flex-col gap-2">
				<Label htmlFor="select-fruit">Select a fruit</Label>
				<ComboboxInput
					className="w-80"
					id="select-fruit"
					placeholder="e.g. Apple"
				/>
			</div>

			<ComboboxContent>
				<ComboboxEmpty>No fruits found.</ComboboxEmpty>
				<ComboboxList>
					{(item: string) => (
						<ComboboxItem key={item} value={item}>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}

const fruits = [
	"Apple",
	"Banana",
	"Orange",
	"Pineapple",
	"Grape",
	"Mango",
	"Strawberry",
	"Blueberry",
	"Raspberry",
	"Blackberry",
	"Cherry",
	"Peach",
	"Pear",
	"Plum",
	"Kiwi",
	"Watermelon",
	"Cantaloupe",
	"Honeydew",
	"Papaya",
	"Guava",
	"Lychee",
	"Pomegranate",
	"Apricot",
	"Grapefruit",
	"Passionfruit",
]
