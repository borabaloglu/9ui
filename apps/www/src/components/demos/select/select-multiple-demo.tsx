"use client";

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

function renderValue(value: string[]) {
	if (value.length === 0) {
		return "Select fruits";
	}

	const firstItem = items.find((item) => item.value === value[0]);
	const additionalItems =
		value.length > 1 ? ` (+${value.length - 1} more)` : "";
	return firstItem?.label + additionalItems;
}
export default function SelectMultipleDemo() {
	return (
		<Select multiple items={items}>
			<SelectTrigger aria-label="Fruit" className="w-44">
				<SelectValue>{renderValue}</SelectValue>
			</SelectTrigger>
			<SelectPopup>
				{items.map(({ label, value }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}
