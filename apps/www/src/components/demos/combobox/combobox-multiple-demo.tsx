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
import { Field, FieldLabel } from "@/components/ui/field";

export default function ComboboxMultipleDemo() {
	return (
		<Field className="max-w-sm">
			<FieldLabel>Frameworks</FieldLabel>
			<Combobox items={frameworks} multiple>
				<ComboboxChips>
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
		</Field>
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
