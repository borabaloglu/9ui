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
	Dropdown,
	DropdownCheckboxItem,
	DropdownContent,
	DropdownGroup,
	DropdownGroupLabel,
	DropdownItem,
	DropdownItemShortcut,
	DropdownRadioGroup,
	DropdownRadioItem,
	DropdownSeparator,
	DropdownSubTrigger,
	DropdownTrigger,
} from "@/components/ui/dropdown"

export default function DropdownDemo() {
	const [shuffle, setShuffle] = useState(false)
	const [repeat, setRepeat] = useState(false)
	const [sortBy, setSortBy] = useState("artist")

	return (
		<Dropdown>
			<DropdownTrigger
				render={(props) => <Button {...props}>Controls</Button>}
			/>
			<DropdownContent>
				<DropdownGroup>
					<DropdownGroupLabel>Playback</DropdownGroupLabel>
					<DropdownItem>
						<PlayIcon />
						Play
						<DropdownItemShortcut>⌘P</DropdownItemShortcut>
					</DropdownItem>
					<DropdownItem>
						<PauseIcon />
						Pause
						<DropdownItemShortcut>⇧⌘P</DropdownItemShortcut>
					</DropdownItem>
					<DropdownItem>
						<SkipBackIcon />
						Previous
						<DropdownItemShortcut>⌘[</DropdownItemShortcut>
					</DropdownItem>
					<DropdownItem>
						<SkipForwardIcon />
						Next
						<DropdownItemShortcut>⌘]</DropdownItemShortcut>
					</DropdownItem>
				</DropdownGroup>
				<DropdownSeparator />
				<DropdownCheckboxItem checked={shuffle} onCheckedChange={setShuffle}>
					Shuffle
				</DropdownCheckboxItem>
				<DropdownCheckboxItem checked={repeat} onCheckedChange={setRepeat}>
					Repeat
				</DropdownCheckboxItem>
				<DropdownCheckboxItem disabled>Enhanced Audio</DropdownCheckboxItem>
				<DropdownSeparator />
				<DropdownGroup>
					<DropdownGroupLabel>Sort by</DropdownGroupLabel>
					<DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>
						<DropdownRadioItem value="artist">Artist</DropdownRadioItem>
						<DropdownRadioItem value="album">Repeat</DropdownRadioItem>
						<DropdownRadioItem value="title">Title</DropdownRadioItem>
					</DropdownRadioGroup>
				</DropdownGroup>
				<DropdownSeparator />
				<Dropdown>
					<DropdownSubTrigger>Add to Playlist</DropdownSubTrigger>
					<DropdownContent>
						<DropdownItem>Jazz</DropdownItem>
						<DropdownItem>Rock</DropdownItem>
						<DropdownItem>Pop</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</DropdownContent>
		</Dropdown>
	)
}
