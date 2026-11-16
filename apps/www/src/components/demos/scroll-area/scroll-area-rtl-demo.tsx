"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const translations = {
	en: {
		versions: "Versions",
		separator: ",",
	},
	ar: {
		versions: "الإصدارات",
		separator: "،",
	},
	he: {
		versions: "גרסאות",
		separator: ",",
	},
} satisfies Translations<Record<string, string>>;

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`);

export default function ScrollAreaRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-6">
			<ScrollArea className="h-72 w-40 rounded-lg border">
				<div className="flex flex-col gap-1.5 p-3 text-sm">
					<h4 className="font-medium">{t.versions}</h4>
					<Separator />
					<div className="flex flex-col gap-1.5">
						{versions.map((version) => (
							<div key={version}>{version}</div>
						))}
					</div>
				</div>
			</ScrollArea>
			<ScrollArea className="w-full max-w-sm rounded-lg border">
				<div className="inline-flex gap-1 p-3 text-sm text-nowrap">
					{versions.map((version, index) => (
						<span key={version}>
							{version}
							{index < versions.length - 1 && t.separator}
						</span>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
