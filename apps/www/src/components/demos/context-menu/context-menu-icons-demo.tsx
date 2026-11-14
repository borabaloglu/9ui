import {
	CloudIcon,
	KeyboardIcon,
	LogOutIcon,
	SettingsIcon,
	UserIcon,
} from "lucide-react";

import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuIconsDemo() {
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
					<UserIcon />
					Profile
				</ContextMenuItem>
				<ContextMenuItem>
					<SettingsIcon />
					Settings
				</ContextMenuItem>
				<ContextMenuItem>
					<KeyboardIcon />
					Keyboard Shortcuts
				</ContextMenuItem>
				<ContextMenuItem>
					<CloudIcon />
					Cloud Sync
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					<LogOutIcon />
					Log Out
				</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
