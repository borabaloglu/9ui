"use client";

import { useState } from "react";
import {
	ArrowDownToLineIcon,
	ClipboardIcon,
	CopyIcon,
	ExternalLinkIcon,
	FileIcon,
	FilePenIcon,
	FolderIcon,
	FolderOpenIcon,
	FolderPlusIcon,
	GridIcon,
	ImageIcon,
	InfoIcon,
	LinkIcon,
	ListIcon,
	LockIcon,
	RefreshCwIcon,
	ScissorsIcon,
	ShareIcon,
	SortAscIcon,
	StarIcon,
	TagIcon,
	Trash2Icon,
	UploadIcon,
} from "lucide-react";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubPopup,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuComplexDemo() {
	const [showHidden, setShowHidden] = useState(false);
	const [showExtensions, setShowExtensions] = useState(true);
	const [sortBy, setSortBy] = useState("name");
	const [viewMode, setViewMode] = useState("list");

	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
				<span className="hidden pointer-fine:inline-block">
					Right click here
				</span>
				<span className="hidden pointer-coarse:inline-block">
					Long press here
				</span>
			</ContextMenuTrigger>
			<ContextMenuPopup className="w-56">
				<ContextMenuGroup>
					<ContextMenuGroupLabel>File Actions</ContextMenuGroupLabel>
					<ContextMenuItem>
						<FolderOpenIcon />
						Open
						<ContextMenuShortcut>⌘O</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<ExternalLinkIcon />
						Open in New Tab
						<ContextMenuShortcut>⌘T</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<InfoIcon />
						Get Info
						<ContextMenuShortcut>⌘I</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel>Edit</ContextMenuGroupLabel>
					<ContextMenuItem>
						<ScissorsIcon />
						Cut
						<ContextMenuShortcut>⌘X</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<CopyIcon />
						Copy
						<ContextMenuShortcut>⌘C</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<ClipboardIcon />
						Paste
						<ContextMenuShortcut>⌘V</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<FilePenIcon />
						Rename
						<ContextMenuShortcut>↩</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel>Create</ContextMenuGroupLabel>
					<ContextMenuItem>
						<FileIcon />
						New File
						<ContextMenuShortcut>⌘N</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<FolderPlusIcon />
						New Folder
						<ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuSub>
					<ContextMenuSubTrigger>
						<ShareIcon />
						Share
					</ContextMenuSubTrigger>
					<ContextMenuSubPopup>
						<ContextMenuItem>
							<LinkIcon />
							Copy Link
						</ContextMenuItem>
						<ContextMenuItem>
							<UploadIcon />
							Upload to Cloud
						</ContextMenuItem>
						<ContextMenuItem>
							<ImageIcon />
							Export as Image
						</ContextMenuItem>
					</ContextMenuSubPopup>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel>View</ContextMenuGroupLabel>
					<ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
						<ContextMenuRadioItem value="list">
							<ListIcon />
							List View
						</ContextMenuRadioItem>
						<ContextMenuRadioItem value="grid">
							<GridIcon />
							Grid View
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuSub>
					<ContextMenuSubTrigger>
						<SortAscIcon />
						Sort By
					</ContextMenuSubTrigger>
					<ContextMenuSubPopup>
						<ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
							<ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
							<ContextMenuRadioItem value="date">
								Date Modified
							</ContextMenuRadioItem>
							<ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
							<ContextMenuRadioItem value="type">Type</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuSubPopup>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem
					checked={showHidden}
					onCheckedChange={setShowHidden}
				>
					Show Hidden Files
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem
					checked={showExtensions}
					onCheckedChange={setShowExtensions}
				>
					Show File Extensions
				</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					<StarIcon />
					Add to Favorites
				</ContextMenuItem>
				<ContextMenuItem>
					<TagIcon />
					Add Tags
				</ContextMenuItem>
				<ContextMenuItem>
					<LockIcon />
					Lock File
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger>
						<FolderIcon />
						Move to
					</ContextMenuSubTrigger>
					<ContextMenuSubPopup>
						<ContextMenuItem>Documents</ContextMenuItem>
						<ContextMenuItem>Downloads</ContextMenuItem>
						<ContextMenuItem>Desktop</ContextMenuItem>
						<ContextMenuItem>
							<ArrowDownToLineIcon />
							Archive
						</ContextMenuItem>
					</ContextMenuSubPopup>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuItem>
					<RefreshCwIcon />
					Refresh
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<Trash2Icon />
					Move to Trash
					<ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
