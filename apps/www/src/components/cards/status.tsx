"use client";

import { useState } from "react";
import { SmilePlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerSearch,
} from "@/components/ui/emoji-picker";
import { Input } from "@/components/ui/input";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const presets = [
	{ emoji: "🎯", text: "Focusing" },
	{ emoji: "🌴", text: "On vacation" },
	{ emoji: "🤒", text: "Out sick" },
	{ emoji: "🚇", text: "Commuting" },
];

const durations = [
	{ label: "Clear after 30 minutes", value: "30m" },
	{ label: "Clear after 1 hour", value: "1h" },
	{ label: "Clear after today", value: "today" },
	{ label: "Never clear", value: "never" },
];

export function StatusCard() {
	const [open, setOpen] = useState(false);
	const [emoji, setEmoji] = useState<string | undefined>("🎯");
	const [text, setText] = useState("Focusing");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Set a status</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<div className="flex gap-2">
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
						<PopoverPopup
							aria-label="Choose emoji"
							align="start"
							className="w-auto p-0"
						>
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
					<Input
						aria-label="Status"
						placeholder="What's happening?"
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
				</div>
				<div className="grid grid-cols-2 gap-2">
					{presets.map((preset) => (
						<Button
							key={preset.text}
							variant="outline"
							size="sm"
							className="justify-start font-normal"
							onClick={() => {
								setEmoji(preset.emoji);
								setText(preset.text);
							}}
						>
							<span>{preset.emoji}</span>
							{preset.text}
						</Button>
					))}
				</div>
				<Select items={durations} defaultValue="1h">
					<SelectTrigger aria-label="Clear status" className="w-full">
						<SelectValue />
					</SelectTrigger>
					<SelectPopup>
						{durations.map(({ label, value }) => (
							<SelectItem key={value} value={value}>
								{label}
							</SelectItem>
						))}
					</SelectPopup>
				</Select>
			</CardContent>
			<CardFooter className="justify-end gap-2">
				<Button
					variant="outline"
					onClick={() => {
						setEmoji(undefined);
						setText("");
					}}
				>
					Clear
				</Button>
				<Button>Save</Button>
			</CardFooter>
		</Card>
	);
}
