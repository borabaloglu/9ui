import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDemo() {
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
			<ContextMenuPopup>
				<ContextMenuItem>New File</ContextMenuItem>
				<ContextMenuItem>Open File</ContextMenuItem>
				<ContextMenuItem>Save</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem disabled>Print</ContextMenuItem>
				<ContextMenuItem>Exit</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
