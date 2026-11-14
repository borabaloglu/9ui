"use client";

import { useState } from "react";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuCheckboxDemo() {
	const [showStatusBar, setShowStatusBar] = useState(true);
	const [showLineNumbers, setShowLineNumbers] = useState(false);
	const [wordWrap, setWordWrap] = useState(true);

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
					checked={showStatusBar}
					onCheckedChange={setShowStatusBar}
				>
					Status Bar
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem
					checked={showLineNumbers}
					onCheckedChange={setShowLineNumbers}
				>
					Line Numbers
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem
					checked={wordWrap}
					onCheckedChange={setWordWrap}
				>
					Word Wrap
				</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem disabled>Minimap</ContextMenuCheckboxItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
