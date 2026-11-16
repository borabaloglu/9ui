"use client";

import { XIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverClose,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";

const translations = {
	en: {
		bottom: "Bottom",
		left: "Left",
		top: "Top",
		right: "Right",
		inlineStart: "Inline Start",
		inlineEnd: "Inline End",
		closeButton: "Close Button",
		title: "Popover",
		description: "A short description.",
		close: "Close",
	},
	ar: {
		bottom: "الأسفل",
		left: "اليسار",
		top: "الأعلى",
		right: "اليمين",
		inlineStart: "البداية",
		inlineEnd: "النهاية",
		closeButton: "زر الإغلاق",
		title: "نافذة منبثقة",
		description: "وصف قصير.",
		close: "إغلاق",
	},
	he: {
		bottom: "למטה",
		left: "שמאל",
		top: "למעלה",
		right: "ימין",
		inlineStart: "התחלה",
		inlineEnd: "סוף",
		closeButton: "כפתור סגירה",
		title: "חלונית",
		description: "תיאור קצר.",
		close: "סגירה",
	},
} satisfies Translations<Record<string, string>>;

const rows = [
	[
		{ label: "bottom", side: "bottom" },
		{ label: "left", side: "left" },
		{ label: "top", side: "top" },
		{ label: "right", side: "right" },
	],
	[
		{ label: "inlineStart", side: "inline-start" },
		{ label: "inlineEnd", side: "inline-end" },
	],
] as const;

export default function PopoverRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<div className="flex flex-col items-center gap-4">
			{rows.map((row, index) => (
				<div
					key={row[0].side}
					className="flex flex-wrap items-center justify-center gap-4"
				>
					{row.map(({ label, side }) => (
						<Popover key={label}>
							<PopoverTrigger render={<Button variant="outline" />}>
								{t[label]}
							</PopoverTrigger>
							<PopoverPopup dir={dir} arrow side={side} className="w-48">
								<PopoverHeader>
									<PopoverTitle>{t.title}</PopoverTitle>
									<PopoverDescription>{t.description}</PopoverDescription>
								</PopoverHeader>
							</PopoverPopup>
						</Popover>
					))}
					{index === rows.length - 1 && (
						<Popover>
							<PopoverTrigger render={<Button variant="outline" />}>
								{t.closeButton}
							</PopoverTrigger>
							<PopoverPopup dir={dir} className="w-56">
								<PopoverClose
									render={
										<Button
											variant="ghost"
											size="icon-sm"
											className="absolute end-2 top-2"
											aria-label={t.close}
										/>
									}
								>
									<XIcon />
								</PopoverClose>
								<PopoverHeader className="pe-8">
									<PopoverTitle>{t.title}</PopoverTitle>
									<PopoverDescription>{t.description}</PopoverDescription>
								</PopoverHeader>
							</PopoverPopup>
						</Popover>
					)}
				</div>
			))}
		</div>
	);
}
