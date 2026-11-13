"use client";

import * as React from "react";
import {
	CreditCardIcon,
	FilePlusIcon,
	FolderPlusIcon,
	InboxIcon,
	LayoutDashboardIcon,
	type LucideIcon,
	MoonStarIcon,
	SearchIcon,
	SettingsIcon,
	SparklesIcon,
	UserPlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandCollection,
	CommandDialog,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandGroupLabel,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

export default function CommandDialogDemo() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button variant="outline" onClick={() => setOpen(true)}>
				Open command palette
				<Kbd>⌘J</Kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command items={groups}>
					<div className="p-1 pb-0">
						<InputGroup>
							<InputGroupAddon align="inline-start">
								<InputGroupText>
									<SearchIcon />
								</InputGroupText>
							</InputGroupAddon>
							<InputGroupInput
								placeholder="Type a command or search…"
								aria-label="Search commands"
								render={<CommandInput />}
							/>
						</InputGroup>
					</div>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandList>
						{(group: Group, index: number) => (
							<React.Fragment key={group.value}>
								{index > 0 && <CommandSeparator />}
								<CommandGroup items={group.items}>
									<CommandGroupLabel>{group.value}</CommandGroupLabel>
									<CommandCollection>
										{(item: Item) => (
											<CommandItem
												key={item.value}
												value={item}
												onClick={() => setOpen(false)}
											>
												<item.icon />
												{item.label}
												{item.shortcut && (
													<CommandShortcut>{item.shortcut}</CommandShortcut>
												)}
											</CommandItem>
										)}
									</CommandCollection>
								</CommandGroup>
							</React.Fragment>
						)}
					</CommandList>
					<CommandFooter className="gap-4">
						<span className="flex items-center gap-2">
							Navigate
							<Kbd>↑↓</Kbd>
						</span>
						<span className="flex items-center gap-2">
							Select
							<Kbd>↵</Kbd>
						</span>
						<span className="ml-auto flex items-center gap-2">
							Close
							<Kbd>Esc</Kbd>
						</span>
					</CommandFooter>
				</Command>
			</CommandDialog>
		</>
	);
}

interface Item {
	value: string;
	label: string;
	icon: LucideIcon;
	shortcut?: string;
}

interface Group {
	value: string;
	items: Item[];
}

const groups: Group[] = [
	{
		value: "Suggestions",
		items: [
			{ value: "ask-ai", label: "Ask AI", icon: SparklesIcon, shortcut: "⌘I" },
			{
				value: "toggle-theme",
				label: "Toggle theme",
				icon: MoonStarIcon,
				shortcut: "⌘⇧T",
			},
		],
	},
	{
		value: "Create",
		items: [
			{
				value: "new-document",
				label: "New document",
				icon: FilePlusIcon,
				shortcut: "⌘N",
			},
			{ value: "new-project", label: "New project", icon: FolderPlusIcon },
			{ value: "invite-member", label: "Invite member", icon: UserPlusIcon },
		],
	},
	{
		value: "Go to",
		items: [
			{ value: "dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
			{ value: "inbox", label: "Inbox", icon: InboxIcon },
			{ value: "billing", label: "Billing", icon: CreditCardIcon },
			{
				value: "settings",
				label: "Settings",
				icon: SettingsIcon,
				shortcut: "⌘,",
			},
		],
	},
];
