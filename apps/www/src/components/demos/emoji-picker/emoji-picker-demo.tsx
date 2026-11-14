"use client";

import { toast } from "sonner";

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

export default function EmojiPickerDemo() {
	return (
		<EmojiPicker
			onEmojiSelect={({ emoji, label }) => {
				toast(`${emoji} ${label}`);
			}}
		>
			<EmojiPickerSearch />
			<EmojiPickerContent>
				<EmojiPickerLoading />
				<EmojiPickerEmpty />
				<EmojiPickerList />
			</EmojiPickerContent>
			<EmojiPickerFooter>
				<EmojiPickerPreview />
			</EmojiPickerFooter>
		</EmojiPicker>
	);
}
