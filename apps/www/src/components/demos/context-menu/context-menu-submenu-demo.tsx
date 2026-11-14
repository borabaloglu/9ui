import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuPopup,
	ContextMenuSeparator,
	ContextMenuSub,
	ContextMenuSubPopup,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuSubmenuDemo() {
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
				<ContextMenuItem>New File</ContextMenuItem>
				<ContextMenuItem>Open File</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuSub>
					<ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
					<ContextMenuSubPopup>
						<ContextMenuItem>Email</ContextMenuItem>
						<ContextMenuItem>Message</ContextMenuItem>
						<ContextMenuSub>
							<ContextMenuSubTrigger>Social Media</ContextMenuSubTrigger>
							<ContextMenuSubPopup>
								<ContextMenuItem>Twitter</ContextMenuItem>
								<ContextMenuItem>Facebook</ContextMenuItem>
								<ContextMenuItem>LinkedIn</ContextMenuItem>
							</ContextMenuSubPopup>
						</ContextMenuSub>
					</ContextMenuSubPopup>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuItem>Exit</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
