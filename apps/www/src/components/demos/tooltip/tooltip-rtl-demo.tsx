"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const translations = {
	en: {
		bottom: "Bottom",
		left: "Left",
		top: "Top",
		right: "Right",
		inlineStart: "Inline Start",
		inlineEnd: "Inline End",
		hint: "Add to library",
	},
	ar: {
		bottom: "الأسفل",
		left: "اليسار",
		top: "الأعلى",
		right: "اليمين",
		inlineStart: "البداية",
		inlineEnd: "النهاية",
		hint: "إضافة إلى المكتبة",
	},
	he: {
		bottom: "למטה",
		left: "שמאל",
		top: "למעלה",
		right: "ימין",
		inlineStart: "התחלה",
		inlineEnd: "סוף",
		hint: "הוספה לספרייה",
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

export default function TooltipRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<TooltipProvider>
			<div className="flex flex-col items-center gap-4">
				{rows.map((row) => (
					<div
						key={row[0].side}
						className="flex flex-wrap items-center justify-center gap-4"
					>
						{row.map(({ label, side }) => (
							<Tooltip key={label}>
								<TooltipTrigger render={<Button variant="outline" />}>
									{t[label]}
								</TooltipTrigger>
								<TooltipPopup dir={dir} side={side} arrow>
									{t.hint}
								</TooltipPopup>
							</Tooltip>
						))}
					</div>
				))}
			</div>
		</TooltipProvider>
	);
}
