"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { buttonVariants } from "@/components/ui/button";
import {
	PreviewCard,
	PreviewCardPopup,
	PreviewCardTrigger,
} from "@/components/ui/preview-card";

const translations = {
	en: {
		bottom: "Bottom",
		left: "Left",
		top: "Top",
		right: "Right",
		inlineStart: "Inline Start",
		inlineEnd: "Inline End",
		description: "A short preview of the linked page.",
	},
	ar: {
		bottom: "الأسفل",
		left: "اليسار",
		top: "الأعلى",
		right: "اليمين",
		inlineStart: "البداية",
		inlineEnd: "النهاية",
		description: "معاينة قصيرة للصفحة المرتبطة.",
	},
	he: {
		bottom: "למטה",
		left: "שמאל",
		top: "למעלה",
		right: "ימין",
		inlineStart: "התחלה",
		inlineEnd: "סוף",
		description: "תצוגה מקדימה קצרה של הדף המקושר.",
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

export default function PreviewCardRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<div className="flex flex-col items-center gap-4">
			{rows.map((row) => (
				<div
					key={row[0].side}
					className="flex flex-wrap items-center justify-center gap-4"
				>
					{row.map(({ label, side }) => (
						<PreviewCard key={label}>
							<PreviewCardTrigger
								href="https://www.9ui.dev"
								className={buttonVariants({ variant: "outline" })}
							>
								{t[label]}
							</PreviewCardTrigger>
							<PreviewCardPopup dir={dir} arrow side={side} className="w-48">
								<span className="font-medium">9ui.dev</span>
								<p className="text-muted-foreground text-pretty">
									{t.description}
								</p>
							</PreviewCardPopup>
						</PreviewCard>
					))}
				</div>
			))}
		</div>
	);
}
