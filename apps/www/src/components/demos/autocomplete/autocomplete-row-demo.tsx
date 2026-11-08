"use client";

import * as React from "react";

import {
	Autocomplete,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteRow,
	AutocompleteTrigger,
} from "@/components/ui/autocomplete";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

export default function AutocompleteRowDemo() {
	const [pickerOpen, setPickerOpen] = React.useState(false);
	const [avatar, setAvatar] = React.useState<string | null>(null);
	const [searchValue, setSearchValue] = React.useState("");

	function handleSelectAvatar(value: string | null) {
		if (!value) {
			return;
		}

		setPickerOpen(false);
		setAvatar(value);
		setSearchValue("");
	}

	return (
		<Autocomplete
			items={avatarGroups}
			grid={true}
			open={pickerOpen}
			onOpenChange={setPickerOpen}
			onOpenChangeComplete={() => setSearchValue("")}
			value={searchValue}
			onValueChange={(value, details) => {
				if (details.reason !== "item-press") {
					setSearchValue(value);
				}
			}}
		>
			<AutocompleteTrigger
				className="flex flex-col items-center gap-2 outline-none"
				aria-label="Choose avatar"
			>
				<Avatar id="avatar-selector">
					<AvatarFallback>{avatar || "+"}</AvatarFallback>
				</Avatar>
				<Label
					className="text-muted-foreground text-xs"
					htmlFor="avatar-selector"
				>
					Choose an avatar
				</Label>
			</AutocompleteTrigger>
			<AutocompleteContent className="w-80">
				<AutocompleteInput placeholder="e.g. cat, doctor, star" />
				<AutocompleteEmpty>No avatars found</AutocompleteEmpty>
				<AutocompleteList>
					{(group: AvatarGroup) => (
						<AutocompleteGroup
							className="mt-2"
							key={group.value}
							items={group.items}
						>
							<AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
							<div role="presentation">
								{chunkArray(group.items, COLUMNS).map((row, rowIdx) => (
									<AutocompleteRow key={rowIdx} className="grid-cols-6">
										{row.map((avatar) => (
											<AutocompleteItem
												key={avatar.id}
												value={avatar}
												className="flex aspect-square size-full items-center justify-center rounded-md"
												onClick={() => handleSelectAvatar(avatar.emoji)}
											>
												<span className="text-xl">{avatar.emoji}</span>
											</AutocompleteItem>
										))}
									</AutocompleteRow>
								))}
							</div>
						</AutocompleteGroup>
					)}
				</AutocompleteList>
			</AutocompleteContent>
		</Autocomplete>
	);
}

interface AvatarItem {
	id: string;
	emoji: string;
	name: string;
	category: string;
}

interface AvatarGroup {
	value: string;
	label: string;
	items: AvatarItem[];
}

const avatarCategories = [
	{
		label: "People",
		avatars: [
			{ id: "1", emoji: "👤", name: "default user" },
			{ id: "2", emoji: "👨", name: "man" },
			{ id: "3", emoji: "👩", name: "woman" },
			{ id: "4", emoji: "🧑", name: "person" },
			{ id: "5", emoji: "👦", name: "boy" },
			{ id: "6", emoji: "👧", name: "girl" },
			{ id: "7", emoji: "👴", name: "old man" },
			{ id: "8", emoji: "👵", name: "old woman" },
			{ id: "9", emoji: "👶", name: "baby" },
			{ id: "10", emoji: "🧒", name: "child" },
			{ id: "11", emoji: "🧓", name: "older person" },
			{ id: "12", emoji: "👨‍💼", name: "businessman" },
			{ id: "13", emoji: "👩‍💼", name: "businesswoman" },
			{ id: "14", emoji: "👨‍💻", name: "developer" },
			{ id: "15", emoji: "👩‍💻", name: "developer woman" },
			{ id: "16", emoji: "👨‍🎨", name: "artist" },
		],
	},
	{
		label: "Professions",
		avatars: [
			{ id: "17", emoji: "👩‍🎨", name: "artist woman" },
			{ id: "18", emoji: "👨‍⚕️", name: "doctor" },
			{ id: "19", emoji: "👩‍⚕️", name: "doctor woman" },
			{ id: "20", emoji: "👨‍🏫", name: "teacher" },
			{ id: "21", emoji: "👩‍🏫", name: "teacher woman" },
			{ id: "22", emoji: "👨‍🚀", name: "astronaut" },
			{ id: "23", emoji: "👩‍🚀", name: "astronaut woman" },
			{ id: "24", emoji: "👨‍🔬", name: "scientist" },
			{ id: "25", emoji: "👩‍🔬", name: "scientist woman" },
			{ id: "26", emoji: "👨‍🍳", name: "chef" },
			{ id: "27", emoji: "👩‍🍳", name: "chef woman" },
			{ id: "28", emoji: "👨‍🎤", name: "singer" },
			{ id: "29", emoji: "👩‍🎤", name: "singer woman" },
			{ id: "30", emoji: "👨‍✈️", name: "pilot" },
			{ id: "31", emoji: "👩‍✈️", name: "pilot woman" },
			{ id: "32", emoji: "👮", name: "police officer" },
		],
	},
	{
		label: "Animals",
		avatars: [
			{ id: "33", emoji: "🐶", name: "dog" },
			{ id: "34", emoji: "🐱", name: "cat" },
			{ id: "35", emoji: "🐭", name: "mouse" },
			{ id: "36", emoji: "🐹", name: "hamster" },
			{ id: "37", emoji: "🐰", name: "rabbit" },
			{ id: "38", emoji: "🦊", name: "fox" },
			{ id: "39", emoji: "🐻", name: "bear" },
			{ id: "40", emoji: "🐼", name: "panda" },
			{ id: "41", emoji: "🐨", name: "koala" },
			{ id: "42", emoji: "🐯", name: "tiger" },
			{ id: "43", emoji: "🦁", name: "lion" },
			{ id: "44", emoji: "🐮", name: "cow" },
			{ id: "45", emoji: "🐷", name: "pig" },
			{ id: "46", emoji: "🐸", name: "frog" },
			{ id: "47", emoji: "🐵", name: "monkey" },
			{ id: "48", emoji: "🐧", name: "penguin" },
		],
	},
	{
		label: "Objects & Symbols",
		avatars: [
			{ id: "49", emoji: "⭐", name: "star" },
			{ id: "50", emoji: "🌟", name: "glowing star" },
			{ id: "51", emoji: "💎", name: "diamond" },
			{ id: "52", emoji: "🔥", name: "fire" },
			{ id: "53", emoji: "⚡", name: "lightning" },
			{ id: "54", emoji: "🌙", name: "moon" },
			{ id: "55", emoji: "☀️", name: "sun" },
			{ id: "56", emoji: "🌈", name: "rainbow" },
			{ id: "57", emoji: "🎯", name: "target" },
			{ id: "58", emoji: "🚀", name: "rocket" },
			{ id: "59", emoji: "🎮", name: "gaming" },
			{ id: "60", emoji: "💻", name: "laptop" },
			{ id: "61", emoji: "📱", name: "phone" },
			{ id: "62", emoji: "🎨", name: "art" },
			{ id: "63", emoji: "🏆", name: "trophy" },
			{ id: "64", emoji: "🎪", name: "circus" },
		],
	},
];

const avatarGroups: AvatarGroup[] = avatarCategories.map((category) => ({
	value: category.label,
	label: category.label,
	items: category.avatars.map((avatar) => ({
		...avatar,
		value: avatar.name.toLowerCase(),
		category: category.label,
	})),
}));

const COLUMNS = 6;

function chunkArray<T>(array: T[], size: number): T[][] {
	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}
