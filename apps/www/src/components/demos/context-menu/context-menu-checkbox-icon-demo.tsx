"use client";

import { useState } from "react";
import { BellIcon, GlobeIcon, ShieldIcon } from "lucide-react";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuPopup,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuCheckboxIconDemo() {
	const [notifications, setNotifications] = useState(true);
	const [location, setLocation] = useState(false);
	const [security, setSecurity] = useState(true);

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
				<ContextMenuCheckboxItem
					checked={notifications}
					onCheckedChange={setNotifications}
				>
					<BellIcon />
					Notifications
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem
					checked={location}
					onCheckedChange={setLocation}
				>
					<GlobeIcon />
					Location
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem
					checked={security}
					onCheckedChange={setSecurity}
				>
					<ShieldIcon />
					Security
				</ContextMenuCheckboxItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
