import { Field, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const items = [
	{ label: "Select a fruit", value: null },
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Orange", value: "orange" },
	{ label: "Peach", value: "peach" },
	{ label: "Strawberry", value: "strawberry" },
];

export default function SelectDisabledDemo() {
	return (
		<Field name="fruit" disabled className="w-44">
			<FieldLabel>Fruit</FieldLabel>
			<Select items={items}>
				<SelectTrigger className="w-full">
					<SelectValue />
				</SelectTrigger>
				<SelectPopup>
					{items.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectPopup>
			</Select>
		</Field>
	);
}
