"use client";

import * as React from "react";

import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export type Language = "en" | "ar" | "he";

export type Direction = "ltr" | "rtl";

export type Translations<T extends Record<string, string>> = Record<
	Language,
	T
>;

export const languages = [
	{ value: "en", label: "English", dir: "ltr" },
	{ value: "ar", label: "العربية", dir: "rtl" },
	{ value: "he", label: "עברית", dir: "rtl" },
] as const satisfies ReadonlyArray<{
	value: Language;
	label: string;
	dir: Direction;
}>;

function getDirection(language: Language): Direction {
	return language === "en" ? "ltr" : "rtl";
}

const LanguageContext = React.createContext<{
	language: Language;
	setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = React.useState<Language>("ar");
	const value = React.useMemo(() => ({ language, setLanguage }), [language]);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = React.useContext(LanguageContext);
	const language = context?.language ?? "ar";

	return {
		language,
		dir: getDirection(language),
		setLanguage: context?.setLanguage,
	};
}

export function useTranslation<T extends Record<string, string>>(
	translations: Translations<T>,
) {
	const { language, dir } = useLanguage();

	return { language, dir, t: translations[language] };
}

export function LanguageSelector({ className }: { className?: string }) {
	const { language, setLanguage } = useLanguage();

	return (
		<Select
			items={languages}
			value={language}
			onValueChange={(value) => {
				if (value) setLanguage?.(value);
			}}
		>
			<SelectTrigger
				size="sm"
				dir="ltr"
				aria-label="Language"
				className={className}
			>
				<SelectValue />
			</SelectTrigger>
			<SelectPopup dir="ltr">
				{languages.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}
