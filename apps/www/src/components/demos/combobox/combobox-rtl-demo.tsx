"use client";

import * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
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

const translations = {
	en: {
		frameworks: "Frameworks",
		placeholder: "e.g. React",
		empty: "No frameworks found.",
	},
	ar: {
		frameworks: "أطر العمل",
		placeholder: "مثال: React",
		empty: "لا توجد أطر عمل مطابقة.",
	},
	he: {
		frameworks: "פריימוורקים",
		placeholder: "לדוגמה: React",
		empty: "לא נמצאו פריימוורקים.",
	},
} satisfies Translations<Record<string, string>>;

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

export default function ComboboxRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Field className="max-w-sm">
			<FieldLabel>{t.frameworks}</FieldLabel>
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
									placeholder={value.length > 0 ? "" : t.placeholder}
								/>
							</React.Fragment>
						)}
					</ComboboxValue>
				</ComboboxChips>

				<ComboboxPopup dir={dir}>
					<ComboboxEmpty>{t.empty}</ComboboxEmpty>
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
