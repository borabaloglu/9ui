import { ArchiveIcon, PencilIcon, ShareIcon, Trash2Icon } from "lucide-react";

import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDestructiveDemo() {
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
			<ContextMenuPopup className="w-48">
				<ContextMenuItem>
					<PencilIcon />
					Edit
				</ContextMenuItem>
				<ContextMenuItem>
					<ShareIcon />
					Share
				</ContextMenuItem>
				<ContextMenuItem>
					<ArchiveIcon />
					Archive
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<Trash2Icon />
					Delete
				</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
