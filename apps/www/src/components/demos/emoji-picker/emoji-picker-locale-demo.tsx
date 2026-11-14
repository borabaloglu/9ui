"use client";

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

export default function EmojiPickerLocaleDemo() {
	return (
		<EmojiPicker locale="fr">
			<EmojiPickerSearch
				placeholder="Rechercher…"
				aria-label="Rechercher un emoji"
			/>
			<EmojiPickerContent>
				<EmojiPickerLoading />
				<EmojiPickerEmpty>Aucun emoji trouvé.</EmojiPickerEmpty>
				<EmojiPickerList />
			</EmojiPickerContent>
			<EmojiPickerFooter>
				<EmojiPickerPreview>Choisissez un emoji…</EmojiPickerPreview>
			</EmojiPickerFooter>
		</EmojiPicker>
	);
}
