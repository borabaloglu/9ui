import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function EmojiPickerPopoverDemo() {
	const [open, setOpen] = React.useState(false)
	const [emoji, setEmoji] = React.useState<string | undefined>(undefined)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={(props) => (
					<Button {...props} variant="outline" size="icon">
						{emoji ? emoji : "👇"}
					</Button>
				)}
			/>
			<PopoverContent className="rounded-md p-0 outline-offset-0">
				<EmojiPicker
					className="border-none"
					onEmojiSelect={({ emoji, label }) => {
						setEmoji(emoji)
						setOpen(false)
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
			</PopoverContent>
		</Popover>
	)
}
