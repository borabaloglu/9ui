"use client"

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "9ui"

export default function ContextMenuDemo() {
	return (
		<div className="w-80">
			<ContextMenu>
				<ContextMenuTrigger className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-muted text-sm">
					Right Click Here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuItem>Back</ContextMenuItem>
						<ContextMenuItem disabled>Forward</ContextMenuItem>
						<ContextMenuItem>Reload</ContextMenuItem>
						<ContextMenu>
							<ContextMenuSubTrigger>More</ContextMenuSubTrigger>
							<ContextMenuContent>
								<ContextMenuItem>Save As...</ContextMenuItem>
								<ContextMenuItem>Print...</ContextMenuItem>
								<ContextMenuItem>Cast...</ContextMenuItem>
								<ContextMenuSeparator />
								<ContextMenuItem>Inspect...</ContextMenuItem>
							</ContextMenuContent>
						</ContextMenu>
					</ContextMenuGroup>
					<ContextMenuSeparator />
					<ContextMenuGroup>
						<ContextMenuGroupLabel>Settings</ContextMenuGroupLabel>
						<ContextMenuCheckboxItem>Always on Top</ContextMenuCheckboxItem>
						<ContextMenuCheckboxItem>Show full URL</ContextMenuCheckboxItem>
					</ContextMenuGroup>
					<ContextMenuSeparator />
					<ContextMenuGroup>
						<ContextMenuGroupLabel>Zoom</ContextMenuGroupLabel>
						<ContextMenuRadioGroup defaultValue="100">
							<ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>
							<ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>
							<ContextMenuRadioItem value="150">150%</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		</div>
	)
}