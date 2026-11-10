"use client";

import { useState } from "react";
import {
	ChevronDownIcon,
	EllipsisVerticalIcon,
	FolderIcon,
	FolderOpenIcon,
	FolderPlusIcon,
} from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import {
	Menu,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuPopup,
	MenuTrigger,
} from "@/components/ui/menu";

const domains = ["gmail.com", "outlook.com", "yahoo.com", "9ui.dev"];

const folders = [
	{ name: "Root", icon: FolderIcon },
	{ name: "Documents", icon: FolderOpenIcon },
	{ name: "Projects", icon: FolderOpenIcon },
];

export default function InputGroupMenuDemo() {
	const [domain, setDomain] = useState(domains[0]);
	const [folder, setFolder] = useState(folders[0].name);

	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupInput aria-label="Email username" placeholder="Username" />
				<InputGroupAddon align="inline-end">
					<InputGroupText className="text-xs">@{domain}</InputGroupText>
					<Menu>
						<MenuTrigger
							render={
								<InputGroupButton size="icon-xs" aria-label="Select domain" />
							}
						>
							<EllipsisVerticalIcon />
						</MenuTrigger>
						<MenuPopup align="end">
							<MenuGroup>
								<MenuGroupLabel>Domain</MenuGroupLabel>
								{domains.map((item) => (
									<MenuItem key={item} onClick={() => setDomain(item)}>
										{item}
									</MenuItem>
								))}
							</MenuGroup>
						</MenuPopup>
					</Menu>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<FolderPlusIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					aria-label="Folder name"
					placeholder="New folder name"
				/>
				<InputGroupAddon align="inline-end">
					<Menu>
						<MenuTrigger
							render={<InputGroupButton variant="secondary" />}
							aria-label={`Create in ${folder}`}
						>
							{folder}
							<ChevronDownIcon />
						</MenuTrigger>
						<MenuPopup align="end">
							<MenuGroup>
								<MenuGroupLabel>Create in</MenuGroupLabel>
								{folders.map((item) => (
									<MenuItem
										key={item.name}
										onClick={() => setFolder(item.name)}
									>
										<item.icon />
										{item.name}
									</MenuItem>
								))}
							</MenuGroup>
						</MenuPopup>
					</Menu>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
