"use client";

import * as React from "react";
import {
	FilePlusIcon,
	FolderPlusIcon,
	InboxIcon,
	type LucideIcon,
	SearchIcon,
	SettingsIcon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Badge } from "@/components/ui/badge";
import {
	Command,
	CommandCollection,
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

const translations = {
	en: {
		placeholder: "Type a command or search…",
		searchCommands: "Search commands",
		empty: "No results found.",
		create: "Create",
		goTo: "Go To",
		newDocument: "New Document",
		newProject: "New Project",
		inbox: "Inbox",
		settings: "Settings",
		navigate: "Navigate",
		select: "Select",
	},
	ar: {
		placeholder: "اكتب أمرًا أو ابحث…",
		searchCommands: "البحث في الأوامر",
		empty: "لا توجد نتائج.",
		create: "إنشاء",
		goTo: "انتقال إلى",
		newDocument: "مستند جديد",
		newProject: "مشروع جديد",
		inbox: "الوارد",
		settings: "الإعدادات",
		navigate: "التنقل",
		select: "اختيار",
	},
	he: {
		placeholder: "הקלידו פקודה או חפשו…",
		searchCommands: "חיפוש פקודות",
		empty: "לא נמצאו תוצאות.",
		create: "יצירה",
		goTo: "מעבר אל",
		newDocument: "מסמך חדש",
		newProject: "פרויקט חדש",
		inbox: "דואר נכנס",
		settings: "הגדרות",
		navigate: "ניווט",
		select: "בחירה",
	},
} satisfies Translations<Record<string, string>>;

type Key = keyof (typeof translations)["en"];

interface Item {
	value: Key;
	label: string;
	icon: LucideIcon;
	shortcut?: string;
	count?: number;
}

interface Group {
	value: Key;
	label: string;
	items: Item[];
}

const groupDefinitions: {
	value: Key;
	items: Omit<Item, "label">[];
}[] = [
	{
		value: "create",
		items: [
			{ value: "newDocument", icon: FilePlusIcon, shortcut: "⌘N" },
			{ value: "newProject", icon: FolderPlusIcon },
		],
	},
	{
		value: "goTo",
		items: [
			{ value: "inbox", icon: InboxIcon, count: 12 },
			{ value: "settings", icon: SettingsIcon, shortcut: "⌘," },
		],
	},
];

export default function CommandRtlDemo() {
	const { language, t } = useTranslation(translations);

	const groups = React.useMemo<Group[]>(
		() =>
			groupDefinitions.map((group) => ({
				value: group.value,
				label: t[group.value],
				items: group.items.map((item) => ({ ...item, label: t[item.value] })),
			})),
		[t],
	);

	return (
		<Command key={language} className="max-w-sm" items={groups}>
			<div className="p-1 pb-0">
				<InputGroup>
					<InputGroupAddon align="inline-start">
						<InputGroupText>
							<SearchIcon />
						</InputGroupText>
					</InputGroupAddon>
					<InputGroupInput
						placeholder={t.placeholder}
						aria-label={t.searchCommands}
						render={<CommandInput />}
					/>
				</InputGroup>
			</div>
			<CommandEmpty>{t.empty}</CommandEmpty>
			<CommandList>
				{(group: Group, index: number) => (
					<React.Fragment key={group.value}>
						{index > 0 && <CommandSeparator />}
						<CommandGroup items={group.items}>
							<CommandGroupLabel>{group.label}</CommandGroupLabel>
							<CommandCollection>
								{(item: Item) => (
									<CommandItem key={item.value} value={item}>
										<item.icon />
										{item.label}
										{item.count && (
											<Badge size="sm" variant="secondary" className="ms-auto">
												{item.count}
											</Badge>
										)}
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
			<CommandFooter className="justify-between">
				<span className="flex items-center gap-2">
					{t.navigate}
					<Kbd>↑↓</Kbd>
				</span>
				<span className="flex items-center gap-2">
					{t.select}
					<Kbd>↵</Kbd>
				</span>
			</CommandFooter>
		</Command>
	);
}
