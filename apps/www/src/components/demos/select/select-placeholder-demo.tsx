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

export default function SelectPlaceholderDemo() {
	return (
		<Select items={items}>
			<SelectTrigger aria-label="Fruit" className="w-44">
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
	);
}
