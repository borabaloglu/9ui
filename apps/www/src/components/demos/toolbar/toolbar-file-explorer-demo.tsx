"use client";

import {
	LayoutGridIcon,
	LayoutListIcon,
	MoreHorizontalIcon,
	SearchIcon,
	ShareIcon,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarInput,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

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
				<Menu>
					<ToolbarButton size="icon" variant="outline" render={<MenuTrigger />}>
						<MoreHorizontalIcon />
					</ToolbarButton>
					<MenuPopup>
						<MenuItem>New File</MenuItem>
						<MenuItem>New Folder</MenuItem>
						<MenuSeparator />
						<MenuItem>Open in New Tab</MenuItem>
						<MenuItem>Get Info</MenuItem>
					</MenuPopup>
				</Menu>
			</ToolbarGroup>
			<ToolbarSeparator />

			<div className="relative">
				<SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
				<ToolbarInput
					render={<Input placeholder="Search" className="pl-8" />}
				/>
			</div>
		</Toolbar>
	);
}
