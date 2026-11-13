import * as React from "react";
import {
	CreditCardIcon,
	FilePlusIcon,
	FolderPlusIcon,
	InboxIcon,
	LayoutDashboardIcon,
	type LucideIcon,
	SearchIcon,
	SettingsIcon,
	UserPlusIcon,
} from "lucide-react";

import {
	Command,
	CommandCollection,
	CommandEmpty,
	CommandGroup,
	CommandGroupLabel,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

export default function CommandPanelDemo() {
	return (
		<Command className="max-w-sm" items={groups}>
			<div className="flex items-center gap-2 px-3">
				<SearchIcon className="text-muted-foreground size-4 shrink-0" />
				<CommandInput
					placeholder="Type a command or search…"
					aria-label="Search commands"
					className="placeholder:text-muted-foreground h-10 min-w-0 flex-1 bg-transparent text-sm outline-none any-pointer-coarse:text-base"
				/>
			</div>
			<div className="bg-background/50 flex min-h-0 flex-col rounded-t-lg border-t">
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandList>
					{(group: Group, index: number) => (
						<React.Fragment key={group.value}>
							{index > 0 && <CommandSeparator />}
							<CommandGroup items={group.items}>
								<CommandGroupLabel>{group.value}</CommandGroupLabel>
								<CommandCollection>
									{(item: Item) => (
										<CommandItem key={item.value} value={item}>
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
			</div>
		</Command>
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
