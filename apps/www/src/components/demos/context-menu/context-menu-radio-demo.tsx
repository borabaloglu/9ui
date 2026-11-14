"use client";

import { useState } from "react";

import {
	ContextMenu,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuPopup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuRadioDemo() {
	const [theme, setTheme] = useState("system");

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
				<ContextMenuGroup>
					<ContextMenuGroupLabel>Theme</ContextMenuGroupLabel>
					<ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
						<ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
						<ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
						<ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuGroup>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
