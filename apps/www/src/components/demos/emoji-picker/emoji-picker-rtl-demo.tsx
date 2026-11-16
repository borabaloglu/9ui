"use client";

import type { Locale } from "frimousse";
import { toast } from "sonner";

import {
	type Language,
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerFooter,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerPreview,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker";

const translations = {
	en: {
		search: "Search…",
		searchEmoji: "Search emoji",
		empty: "No emoji found.",
		preview: "Select an emoji…",
	},
	ar: {
		search: "بحث…",
		searchEmoji: "البحث عن رمز تعبيري",
		empty: "لا توجد رموز تعبيرية.",
		preview: "اختر رمزًا تعبيريًا…",
	},
	he: {
		search: "חיפוש…",
		searchEmoji: "חיפוש אימוג'י",
		empty: "לא נמצאו אימוג'ים.",
		preview: "בחירת אימוג'י…",
	},
} satisfies Translations<Record<string, string>>;

const emojiLocales: Record<Language, Locale | undefined> = {
	en: "en",
	ar: undefined,
	he: undefined,
};

export default function EmojiPickerRtlDemo() {
	const { language, t } = useTranslation(translations);

	return (
		<EmojiPicker
			locale={emojiLocales[language]}
			onEmojiSelect={({ emoji, label }) => {
				toast(`${emoji} ${label}`);
			}}
		>
			<EmojiPickerSearch placeholder={t.search} aria-label={t.searchEmoji} />
			<EmojiPickerContent>
				<EmojiPickerLoading />
				<EmojiPickerEmpty>{t.empty}</EmojiPickerEmpty>
				<EmojiPickerList />
			</EmojiPickerContent>
			<EmojiPickerFooter>
				<EmojiPickerPreview>{t.preview}</EmojiPickerPreview>
			</EmojiPickerFooter>
		</EmojiPicker>
	);
}
