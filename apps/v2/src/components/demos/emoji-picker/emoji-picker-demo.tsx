"use client"

import { toast } from "sonner"

import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker"

export default function EmojiPickerDemo() {
	return (
		<EmojiPicker
			onEmojiSelect={({ emoji, label }) => {
				toast.custom(() => (
					<p className="flex items-center gap-2 text-sm">
						<span className="text-lg">{emoji}</span>
						{label}
					</p>
				))
			}}
		>
			<EmojiPickerSearch />
			<EmojiPickerContent>
				<EmojiPickerLoading />
				<EmojiPickerEmpty>No results</EmojiPickerEmpty>
				<EmojiPickerList />
			</EmojiPickerContent>
		</EmojiPicker>
	)
}
