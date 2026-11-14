import {
	ContextMenu,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuGroupDemo() {
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
					<ContextMenuGroupLabel>File</ContextMenuGroupLabel>
					<ContextMenuItem>New</ContextMenuItem>
					<ContextMenuItem>Open</ContextMenuItem>
					<ContextMenuItem>Save</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel>Edit</ContextMenuGroupLabel>
					<ContextMenuItem>Undo</ContextMenuItem>
					<ContextMenuItem>Redo</ContextMenuItem>
					<ContextMenuItem>Find</ContextMenuItem>
				</ContextMenuGroup>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
