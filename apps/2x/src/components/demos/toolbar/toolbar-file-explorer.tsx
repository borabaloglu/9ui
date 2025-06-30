"use client"

import {
	LayoutGridIcon,
	LayoutListIcon,
	MoreHorizontalIcon,
	SearchIcon,
	ShareIcon,
} from "lucide-react"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarInput,
	ToolbarSeparator,
} from "@/components/ui/toolbar"

export default function ToolbarFileExplorerDemo() {
	return (
		<Toolbar>
			<ToggleGroup className="border-none bg-transparent p-0">
				<ToolbarButton
					size="icon"
					render={
						<Toggle aria-label="Grid view" value="grid-view">
							<LayoutGridIcon />
						</Toggle>
					}
				/>
				<ToolbarButton
					size="icon"
					render={
						<Toggle aria-label="List view" value="list-view">
							<LayoutListIcon />
						</Toggle>
					}
				/>
			</ToggleGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<ToolbarButton size="icon" variant="outline">
					<ShareIcon />
				</ToolbarButton>
				<DropdownMenu>
					<ToolbarButton
						size="icon"
						variant="outline"
						render={<DropdownMenuTrigger />}
					>
						<MoreHorizontalIcon />
					</ToolbarButton>
					<DropdownMenuContent>
						<DropdownMenuItem>New File</DropdownMenuItem>
						<DropdownMenuItem>New Folder</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Open in New Tab</DropdownMenuItem>
						<DropdownMenuItem>Get Info</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</ToolbarGroup>
			<ToolbarSeparator />

			<ToolbarInput
				render={<Input placeholder="Search" leadingIcon={<SearchIcon />} />}
			/>
		</Toolbar>
	)
}
