import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuShortcutDemo() {
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
					Undo
					<ContextMenuShortcut>⌘Z</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Redo
					<ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Cut
					<ContextMenuShortcut>⌘X</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Copy
					<ContextMenuShortcut>⌘C</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Paste
					<ContextMenuShortcut>⌘V</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
