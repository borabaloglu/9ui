"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";
import { ar, enUS, he } from "react-day-picker/locale";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

const translations = {
	en: {
		selectDate: "Select a date",
	},
	ar: {
		selectDate: "اختر تاريخًا",
	},
	he: {
		selectDate: "בחירת תאריך",
	},
} satisfies Translations<Record<string, string>>;

const locales = { en: enUS, ar, he };

export default function DatePickerRtlDemo() {
	const { language, dir, t } = useTranslation(translations);
	const locale = locales[language];
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						className="w-60 justify-between font-normal"
					/>
				}
			>
				<span className="flex min-w-0 items-center gap-2">
					<CalendarIcon className="text-muted-foreground" />
					{date ? (
						<span className="truncate">{format(date, "PP", { locale })}</span>
					) : (
						<span className="text-muted-foreground truncate">
							{t.selectDate}
						</span>
					)}
				</span>
				<ChevronsUpDownIcon className="text-muted-foreground" />
			</PopoverTrigger>
			<PopoverPopup dir={dir} className="w-auto p-0" align="start">
				<Calendar
					locale={locale}
					formatters={
						language === "ar"
							? {
									formatWeekdayName: (weekday) =>
										format(weekday, "ccccc", { locale: ar }),
								}
							: undefined
					}
					mode="single"
					autoFocus
					fixedWeeks
					selected={date}
					defaultMonth={date}
					onSelect={(next) => {
						setDate(next);
						setOpen(false);
					}}
				/>
			</PopoverPopup>
		</Popover>
	);
}
