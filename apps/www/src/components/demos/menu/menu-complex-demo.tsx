"use client";

import { useState } from "react";
import {
	ArrowDownToLineIcon,
	ArrowUpIcon,
	BellIcon,
	BookmarkIcon,
	ClipboardIcon,
	CopyIcon,
	EllipsisIcon,
	ExternalLinkIcon,
	EyeOffIcon,
	FlagIcon,
	LinkIcon,
	MailIcon,
	MessageSquareIcon,
	PencilIcon,
	PinIcon,
	ShareIcon,
	Trash2Icon,
	UserMinusIcon,
	UserPlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuCheckboxItem,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuShortcut,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuComplexDemo() {
	const [pinned, setPinned] = useState(false);
	const [muted, setMuted] = useState(false);

	return (
		<Menu>
			<MenuTrigger
				render={
					<Button variant="outline" size="icon" aria-label="Post actions" />
				}
			>
				<EllipsisIcon />
			</MenuTrigger>
			<MenuPopup className="w-56">
				<MenuGroup>
					<MenuGroupLabel>Post Actions</MenuGroupLabel>
					<MenuItem>
						<PencilIcon />
						Edit Post
						<MenuShortcut>⌘E</MenuShortcut>
					</MenuItem>
					<MenuItem>
						<CopyIcon />
						Duplicate
						<MenuShortcut>⌘D</MenuShortcut>
					</MenuItem>
					<MenuItem>
						<ClipboardIcon />
						Copy Content
						<MenuShortcut>⌘C</MenuShortcut>
					</MenuItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuGroup>
					<MenuGroupLabel>Organize</MenuGroupLabel>
					<MenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>
						<PinIcon />
						Pin to Top
					</MenuCheckboxItem>
					<MenuItem>
						<BookmarkIcon />
						Save to Collection
					</MenuItem>
					<MenuItem>
						<ArrowUpIcon />
						Move to Top
					</MenuItem>
					<MenuItem>
						<ArrowDownToLineIcon />
						Archive
					</MenuItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuSub>
					<MenuSubTrigger>
						<ShareIcon />
						Share
					</MenuSubTrigger>
					<MenuSubPopup>
						<MenuItem>
							<LinkIcon />
							Copy Link
						</MenuItem>
						<MenuItem>
							<MailIcon />
							Email
						</MenuItem>
						<MenuItem>
							<MessageSquareIcon />
							Message
						</MenuItem>
						<MenuItem>
							<ExternalLinkIcon />
							Open in New Tab
						</MenuItem>
					</MenuSubPopup>
				</MenuSub>
				<MenuSeparator />
				<MenuGroup>
					<MenuGroupLabel>People</MenuGroupLabel>
					<MenuItem>
						<UserPlusIcon />
						Follow Author
					</MenuItem>
					<MenuItem>
						<UserMinusIcon />
						Mute Author
					</MenuItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuCheckboxItem checked={muted} onCheckedChange={setMuted}>
					<BellIcon />
					Mute Notifications
				</MenuCheckboxItem>
				<MenuItem>
					<EyeOffIcon />
					Hide Post
				</MenuItem>
				<MenuItem>
					<FlagIcon />
					Report
				</MenuItem>
				<MenuSeparator />
				<MenuItem variant="destructive">
					<Trash2Icon />
					Delete Post
					<MenuShortcut>⌘⌫</MenuShortcut>
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
