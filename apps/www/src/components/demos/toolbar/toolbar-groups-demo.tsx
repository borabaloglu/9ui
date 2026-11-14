import {
	ClipboardIcon,
	CopyIcon,
	Redo2Icon,
	ScissorsIcon,
	Undo2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarGroupsDemo() {
	return (
		<Toolbar aria-label="Editing">
			<ToolbarGroup aria-label="History">
				<ToolbarButton
					render={<Button variant="ghost" size="icon" />}
					aria-label="Undo"
				>
					<Undo2Icon />
				</ToolbarButton>
				<ToolbarButton
					render={<Button variant="ghost" size="icon" />}
					aria-label="Redo"
				>
					<Redo2Icon />
				</ToolbarButton>
			</ToolbarGroup>
			<ToolbarSeparator />
			<ToolbarGroup aria-label="Clipboard">
				<ToolbarButton
					render={<Button variant="ghost" size="icon" />}
					aria-label="Cut"
				>
					<ScissorsIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<Button variant="ghost" size="icon" />}
					aria-label="Copy"
				>
					<CopyIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<Button variant="ghost" size="icon" />}
					aria-label="Paste"
				>
					<ClipboardIcon />
				</ToolbarButton>
			</ToolbarGroup>
		</Toolbar>
	);
}
