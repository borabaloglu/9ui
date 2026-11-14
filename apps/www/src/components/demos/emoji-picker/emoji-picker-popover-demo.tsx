"use client";

import { useState } from "react";
import { SmilePlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function EmojiPickerPopoverDemo() {
	const [open, setOpen] = useState(false);
	const [emoji, setEmoji] = useState<string | undefined>(undefined);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						size="icon"
						className="text-base"
						aria-label="Pick an emoji"
					/>
				}
			>
				{emoji ?? <SmilePlusIcon />}
			</PopoverTrigger>
			<PopoverPopup className="w-auto p-0">
				<EmojiPicker
					onEmojiSelect={({ emoji }) => {
						setEmoji(emoji);
						setOpen(false);
					}}
				>
					<EmojiPickerSearch />
					<EmojiPickerContent>
						<EmojiPickerLoading />
						<EmojiPickerEmpty />
						<EmojiPickerList />
					</EmojiPickerContent>
				</EmojiPicker>
			</PopoverPopup>
		</Popover>
	);
}
