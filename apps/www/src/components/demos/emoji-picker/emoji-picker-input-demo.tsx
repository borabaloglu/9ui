"use client";

import { useRef, useState } from "react";
import { SmileIcon } from "lucide-react";

import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function EmojiPickerInputDemo() {
	const anchor = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const caret = useRef(0);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<InputGroup ref={anchor} className="w-72">
			<InputGroupInput
				ref={input}
				aria-label="Message"
				placeholder="Write a message…"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onBlur={(event) => {
					caret.current = event.target.selectionStart ?? value.length;
				}}
				onFocus={(event) => {
					event.target.setSelectionRange(caret.current, caret.current);
				}}
			/>
			<InputGroupAddon align="inline-end">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger
						render={<InputGroupButton size="icon-xs" aria-label="Add emoji" />}
					>
						<SmileIcon />
					</PopoverTrigger>
					<PopoverPopup
						className="w-auto p-0"
						align="end"
						anchor={anchor}
						finalFocus={(type) => (type === "touch" ? true : input.current)}
					>
						<EmojiPicker
							onEmojiSelect={({ emoji }) => {
								const position = caret.current;

								setValue(
									(current) =>
										current.slice(0, position) +
										emoji +
										current.slice(position),
								);
								caret.current = position + emoji.length;
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
			</InputGroupAddon>
		</InputGroup>
	);
}
