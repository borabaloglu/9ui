"use client";

import { useState } from "react";
import { format } from "date-fns";
import type { DropdownProps } from "react-day-picker";
import { ar, enUS, he } from "react-day-picker/locale";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Calendar } from "@/components/ui/calendar";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const translations = {
	en: {},
	ar: {},
	he: {},
} satisfies Translations<Record<string, string>>;

const locales = { en: enUS, ar, he };

function CalendarSelect({
	options = [],
	value,
	onChange,
	"aria-label": ariaLabel,
}: DropdownProps) {
	const { dir } = useTranslation(translations);
	const items = options.map((option) => ({
		label: option.label,
		value: String(option.value),
		disabled: option.disabled,
	}));

	return (
		<Select
			items={items}
			value={value === undefined ? null : String(value)}
			onValueChange={(newValue) => {
				if (newValue === null) return;

				onChange?.({
					target: { value: newValue },
				} as React.ChangeEvent<HTMLSelectElement>);
			}}
		>
			<SelectTrigger size="sm" aria-label={ariaLabel}>
				<SelectValue />
			</SelectTrigger>
			<SelectPopup dir={dir}>
				{items.map((item) => (
					<SelectItem
						key={item.value}
						value={item.value}
						disabled={item.disabled}
					>
						{item.label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}

export default function CalendarRtlDemo() {
	const { language } = useTranslation(translations);
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<Calendar
			locale={locales[language]}
			formatters={
				language === "ar"
					? {
							formatWeekdayName: (weekday) =>
								format(weekday, "ccccc", { locale: ar }),
						}
					: undefined
			}
			mode="single"
			selected={date}
			onSelect={setDate}
			captionLayout="dropdown"
			className="rounded-xl border"
			components={{ Dropdown: CalendarSelect }}
		/>
	);
}
