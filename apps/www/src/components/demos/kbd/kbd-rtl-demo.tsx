"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const translations = {
	en: {
		press: "Press",
		toCopy: "to copy and",
		toPaste: "to paste.",
	},
	ar: {
		press: "اضغط",
		toCopy: "للنسخ و",
		toPaste: "للصق.",
	},
	he: {
		press: "הקישו",
		toCopy: "להעתקה ו-",
		toPaste: "להדבקה.",
	},
} satisfies Translations<Record<string, string>>;

export default function KbdRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex items-center gap-1">
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
				<Kbd>⌫</Kbd>
			</div>
			<p className="text-muted-foreground text-sm">
				{t.press}{" "}
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>C</Kbd>
				</KbdGroup>{" "}
				{t.toCopy}{" "}
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>V</Kbd>
				</KbdGroup>{" "}
				{t.toPaste}
			</p>
		</div>
	);
}
