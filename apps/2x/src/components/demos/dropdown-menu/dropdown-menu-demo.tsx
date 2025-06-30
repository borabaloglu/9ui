"use client"

import { useState } from "react"
import {
	PauseIcon,
	PlayIcon,
	SkipBackIcon,
	SkipForwardIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownDemo() {
	const [shuffle, setShuffle] = useState(false)
	const [repeat, setRepeat] = useState(false)
	const [sortBy, setSortBy] = useState("artist")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={(props) => <Button {...props}>Controls</Button>}
			/>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>Playback</DropdownMenuLabel>
					<DropdownMenuItem>
						<PlayIcon />
						Play
						<DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<PauseIcon />
						Pause
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SkipBackIcon />
						Previous
						<DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SkipForwardIcon />
						Next
						<DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={shuffle}
					onCheckedChange={setShuffle}
				>
					Shuffle
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={repeat} onCheckedChange={setRepeat}>
					Repeat
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem disabled>
					Enhanced Audio
				</DropdownMenuCheckboxItem>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuLabel>Sort by</DropdownMenuLabel>
					<DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
						<DropdownMenuRadioItem value="artist">Artist</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="album">Repeat</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Add to Playlist</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>Jazz</DropdownMenuItem>
						<DropdownMenuItem>Rock</DropdownMenuItem>
						<DropdownMenuItem>Pop</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
