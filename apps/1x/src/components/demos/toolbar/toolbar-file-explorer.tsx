"use client"

import {
	LayoutGridIcon,
	LayoutListIcon,
	MoreHorizontalIcon,
	SearchIcon,
	ShareIcon,
} from "lucide-react"

import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from "@/components/ui/dropdown"
import { Input, InputIcon } from "@/components/ui/input"
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
							<LayoutGridIcon className="size-4" />
						</Toggle>
					}
				/>
				<ToolbarButton
					size="icon"
					render={
						<Toggle aria-label="List view" value="list-view">
							<LayoutListIcon className="size-4" />
						</Toggle>
					}
				/>
			</ToggleGroup>

			<ToolbarSeparator />

			<ToolbarGroup>
				<ToolbarButton size="icon">
					<ShareIcon className="size-4" />
				</ToolbarButton>
				<Dropdown>
					<ToolbarButton size="icon" render={<DropdownTrigger />}>
						<MoreHorizontalIcon className="size-4" />
					</ToolbarButton>
					<DropdownContent>
						<DropdownItem>New File</DropdownItem>
						<DropdownItem>New Folder</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Open in New Tab</DropdownItem>
						<DropdownItem>Get Info</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</ToolbarGroup>
			<ToolbarSeparator />

			<ToolbarInput
				render={
					<Input placeholder="Search">
						<InputIcon side="leading">
							<SearchIcon className="size-4" />
						</InputIcon>
					</Input>
				}
			/>
		</Toolbar>
	)
}
