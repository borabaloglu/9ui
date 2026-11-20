"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

const groups = [
	{
		title: "General",
		shortcuts: [
			{ label: "Open command menu", keys: ["⌘", "K"] },
			{ label: "Search", keys: ["/"] },
			{ label: "Toggle theme", keys: ["⌘", "⇧", "T"] },
		],
	},
	{
		title: "Editing",
		shortcuts: [
			{ label: "Copy code", keys: ["⌘", "C"] },
			{ label: "Undo", keys: ["⌘", "Z"] },
			{ label: "Save", keys: ["⌘", "S"] },
		],
	},
];

export function ShortcutsCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Keyboard shortcuts</CardTitle>
				<CardDescription>Move faster without the mouse.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{groups.map((group, index) => (
					<div key={group.title} className="flex flex-col gap-3">
						{index > 0 && <Separator />}
						<p className="text-muted-foreground text-xs font-medium">
							{group.title}
						</p>
						{group.shortcuts.map((shortcut) => (
							<div
								key={shortcut.label}
								className="flex items-center justify-between gap-4"
							>
								{shortcut.label}
								<KbdGroup>
									{shortcut.keys.map((key) => (
										<Kbd key={key}>{key}</Kbd>
									))}
								</KbdGroup>
							</div>
						))}
					</div>
				))}
			</CardContent>
		</Card>
	);
}
