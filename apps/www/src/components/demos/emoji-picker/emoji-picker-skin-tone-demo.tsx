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
	EmojiPickerSkinToneSelector,
} from "@/components/ui/emoji-picker";

export default function EmojiPickerSkinToneDemo() {
	return (
		<EmojiPicker>
			<EmojiPickerSearch defaultValue="hand" />
			<EmojiPickerContent>
				<EmojiPickerLoading />
				<EmojiPickerEmpty />
				<EmojiPickerList />
			</EmojiPickerContent>
			<EmojiPickerFooter>
				<EmojiPickerPreview />
				<EmojiPickerSkinToneSelector />
			</EmojiPickerFooter>
		</EmojiPicker>
	);
}
