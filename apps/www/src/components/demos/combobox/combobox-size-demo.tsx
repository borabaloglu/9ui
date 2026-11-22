"use client";

import * as React from "react";

import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxValue,
} from "@/components/ui/combobox";

const sizes = ["sm", "default", "lg"] as const;

export default function ComboboxSizeDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			{sizes.map((size) => (
				<Combobox
					key={size}
					items={frameworks}
					multiple
					defaultValue={[frameworks[0]]}
				>
					<ComboboxChips size={size}>
						<ComboboxValue>
							{(value: Framework[]) => (
								<React.Fragment>
									{value.map((framework) => (
										<ComboboxChip
											key={framework.value}
											aria-label={framework.label}
										>
											{framework.label}
										</ComboboxChip>
									))}
									<ComboboxChipsInput
										aria-label="Frameworks"
										placeholder={value.length > 0 ? "" : "e.g. React"}
									/>
								</React.Fragment>
							)}
						</ComboboxValue>
					</ComboboxChips>

					<ComboboxPopup>
						<ComboboxEmpty>No frameworks found.</ComboboxEmpty>
						<ComboboxList>
							{(framework: Framework) => (
								<ComboboxItem key={framework.value} value={framework}>
									{framework.label}
								</ComboboxItem>
							)}
						</ComboboxList>
					</ComboboxPopup>
				</Combobox>
			))}
		</div>
	);
}

interface Framework {
	label: string;
	value: string;
}

const frameworks: Framework[] = [
	{ label: "React", value: "react" },
	{ label: "Next.js", value: "nextjs" },
	{ label: "Remix", value: "remix" },
	{ label: "Svelte", value: "svelte" },
	{ label: "Astro", value: "astro" },
	{ label: "Vue", value: "vue" },
	{ label: "Nuxt", value: "nuxt" },
	{ label: "Angular", value: "angular" },
	{ label: "Solid", value: "solid" },
	{ label: "Qwik", value: "qwik" },
];
