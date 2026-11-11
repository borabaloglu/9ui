import {
	AppleIcon,
	BananaIcon,
	CherryIcon,
	CitrusIcon,
	GrapeIcon,
} from "lucide-react";

import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const items = [
	{ label: "Apple", value: "apple", icon: AppleIcon },
	{ label: "Banana", value: "banana", icon: BananaIcon },
	{ label: "Cherry", value: "cherry", icon: CherryIcon },
	{ label: "Citrus", value: "citrus", icon: CitrusIcon },
	{ label: "Grape", value: "grape", icon: GrapeIcon },
];

export default function SelectIconDemo() {
	return (
		<Select items={items}>
			<SelectTrigger aria-label="Fruit" className="w-44">
				<SelectValue>
					{(value) => {
						const item = items.find((item) => item.value === value);
						if (!item) return "Select a fruit";
						return (
							<span className="flex items-center gap-2">
								<item.icon />
								{item.label}
							</span>
						);
					}}
				</SelectValue>
			</SelectTrigger>
			<SelectPopup>
				{items.map(({ value, label, icon: Icon }) => (
					<SelectItem key={value} value={value}>
						<Icon />
						{label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}
