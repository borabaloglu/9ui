import {
	ArchiveIcon,
	CopyIcon,
	FilePlusIcon,
	FolderOpenIcon,
	PencilIcon,
	SaveIcon,
	ShareIcon,
	Trash2Icon,
	UserPlusIcon,
} from "lucide-react";

import {
	Menubar,
	MenubarGroup,
	MenubarGroupLabel,
	MenubarItem,
	MenubarMenu,
	MenubarPopup,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarIconsDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarPopup className="min-w-48">
					<MenubarItem>
						<FilePlusIcon />
						New File
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
					</MenubarItem>
					<MenubarItem>
						<SaveIcon />
						Save
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem variant="destructive">
						<Trash2Icon />
						Delete
					</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarPopup className="min-w-48">
					<MenubarItem>
						<PencilIcon />
						Rename
					</MenubarItem>
					<MenubarItem>
						<CopyIcon />
						Duplicate
					</MenubarItem>
					<MenubarItem>
						<ArchiveIcon />
						Archive
					</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Share</MenubarTrigger>
				<MenubarPopup className="min-w-48">
					<MenubarGroup>
						<MenubarGroupLabel>Collaborate</MenubarGroupLabel>
						<MenubarItem>
							<UserPlusIcon />
							Invite People
						</MenubarItem>
						<MenubarItem>
							<ShareIcon />
							Copy Link
						</MenubarItem>
					</MenubarGroup>
				</MenubarPopup>
			</MenubarMenu>
		</Menubar>
	);
}
