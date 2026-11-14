import { EllipsisIcon, PencilIcon, Share2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import {
	Toolbar,
	ToolbarButton,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarMenuDemo() {
	return (
		<Toolbar aria-label="Document actions">
			<ToolbarButton render={<Button variant="ghost" />}>
				<PencilIcon />
				Edit
			</ToolbarButton>
			<ToolbarButton render={<Button variant="ghost" />}>
				<Share2Icon />
				Share
			</ToolbarButton>
			<ToolbarSeparator />
			<Menu>
				<ToolbarButton
					render={
						<MenuTrigger render={<Button variant="ghost" size="icon" />} />
					}
					aria-label="More actions"
				>
					<EllipsisIcon />
				</ToolbarButton>
				<MenuPopup align="end">
					<MenuItem>Duplicate</MenuItem>
					<MenuItem>Move</MenuItem>
					<MenuSeparator />
					<MenuItem>Archive</MenuItem>
				</MenuPopup>
			</Menu>
		</Toolbar>
	);
}
