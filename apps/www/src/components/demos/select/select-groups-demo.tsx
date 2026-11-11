import {
	Select,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectPopup,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grape", value: "grape" },
];

const vegetables = [
	{ label: "Carrot", value: "carrot" },
	{ label: "Potato", value: "potato" },
	{ label: "Tomato", value: "tomato" },
	{ label: "Onion", value: "onion" },
];

export default function SelectGroupsDemo() {
	return (
		<Select items={[...fruits, ...vegetables]}>
			<SelectTrigger aria-label="Produce" className="w-44">
				<SelectValue placeholder="Select an item" />
			</SelectTrigger>
			<SelectPopup>
				<SelectGroup>
					<SelectGroupLabel>Fruits</SelectGroupLabel>
					{fruits.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectGroupLabel>Vegetables</SelectGroupLabel>
					{vegetables.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectPopup>
		</Select>
	);
}
