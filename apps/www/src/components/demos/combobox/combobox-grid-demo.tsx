"use client";

import {
	Combobox,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxRow,
	useComboboxFilteredItems,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

export default function ComboboxGridDemo() {
	return (
		<Combobox
			items={colors}
			grid
			itemToStringLabel={(color: Color) => color.name}
		>
			<ComboboxInput
				aria-label="Color"
				placeholder="e.g. Teal"
				render={<Input className="max-w-sm" />}
			/>
			<ComboboxPopup className="w-(--anchor-width)">
				<ComboboxEmpty>No colors found.</ComboboxEmpty>
				<ComboboxList>
					<ColorGrid />
				</ComboboxList>
			</ComboboxPopup>
		</Combobox>
	);
}

function ColorGrid() {
	const filteredColors = useComboboxFilteredItems<Color>();

	return chunk(filteredColors, COLUMNS).map((row) => (
		<ComboboxRow key={row[0].name} className="grid-cols-6">
			{row.map((color) => (
				<ComboboxItem
					key={color.name}
					value={color}
					className="min-w-0 flex-col gap-1 py-1.5 ps-1 pe-1 *:data-[slot=combobox-item-indicator]:inset-x-0 *:data-[slot=combobox-item-indicator]:top-2.5 *:data-[slot=combobox-item-indicator]:mx-auto *:data-[slot=combobox-item-indicator]:text-white"
				>
					<span className={`size-6 rounded-md ${color.className}`} />
					<span className="text-muted-foreground w-full truncate text-center text-xs">
						{color.name}
					</span>
				</ComboboxItem>
			))}
		</ComboboxRow>
	));
}

const COLUMNS = 6;

interface Color {
	name: string;
	className: string;
}

const colors: Color[] = [
	{ name: "Red", className: "bg-red-500" },
	{ name: "Orange", className: "bg-orange-500" },
	{ name: "Amber", className: "bg-amber-500" },
	{ name: "Yellow", className: "bg-yellow-500" },
	{ name: "Lime", className: "bg-lime-500" },
	{ name: "Green", className: "bg-green-500" },
	{ name: "Emerald", className: "bg-emerald-500" },
	{ name: "Teal", className: "bg-teal-500" },
	{ name: "Cyan", className: "bg-cyan-500" },
	{ name: "Sky", className: "bg-sky-500" },
	{ name: "Blue", className: "bg-blue-500" },
	{ name: "Indigo", className: "bg-indigo-500" },
	{ name: "Violet", className: "bg-violet-500" },
	{ name: "Purple", className: "bg-purple-500" },
	{ name: "Fuchsia", className: "bg-fuchsia-500" },
	{ name: "Pink", className: "bg-pink-500" },
	{ name: "Rose", className: "bg-rose-500" },
	{ name: "Slate", className: "bg-slate-500" },
	{ name: "Gray", className: "bg-gray-500" },
	{ name: "Zinc", className: "bg-zinc-500" },
	{ name: "Neutral", className: "bg-neutral-500" },
	{ name: "Stone", className: "bg-stone-500" },
];

function chunk<T>(array: T[], size: number): T[][] {
	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}
