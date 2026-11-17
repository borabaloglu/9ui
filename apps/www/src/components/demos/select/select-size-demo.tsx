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
];

const sizes = ["sm", "default", "lg"] as const;

export default function SelectSizeDemo() {
	return (
		<div className="flex flex-col gap-4">
			{sizes.map((size) => (
				<Select key={size} items={items}>
					<SelectTrigger aria-label="Fruit" size={size} className="w-44">
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
			))}
		</div>
	);
}
