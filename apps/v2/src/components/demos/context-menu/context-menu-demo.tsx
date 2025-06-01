"use client"

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

export default function ContextMenuDemo() {
	return (
		<div className="w-80">
			<ContextMenu>
				<ContextMenuTrigger className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed text-sm">
					Right Click Here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuItem>
							Back
							<ContextMenuShortcut>⌘[</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem disabled>
							Forward
							<ContextMenuShortcut>⌘]</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem>
							Reload
							<ContextMenuShortcut>⌘R</ContextMenuShortcut>
						</ContextMenuItem>
						<DropdownMenu>
							<DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Save As</DropdownMenuItem>
								<DropdownMenuItem>Print</DropdownMenuItem>
								<DropdownMenuItem>Cast</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Inspect</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</ContextMenuGroup>
					<ContextMenuSeparator />
					<ContextMenuGroup>
						<ContextMenuLabel>Settings</ContextMenuLabel>
						<ContextMenuCheckboxItem>Always on Top</ContextMenuCheckboxItem>
						<ContextMenuCheckboxItem>Show full URL</ContextMenuCheckboxItem>
					</ContextMenuGroup>
					<ContextMenuSeparator />
					<ContextMenuGroup>
						<ContextMenuLabel>Zoom</ContextMenuLabel>
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
