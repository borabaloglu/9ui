import {
	BoldIcon,
	ItalicIcon,
	LinkIcon,
	ListIcon,
	ListOrderedIcon,
	UnderlineIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarVerticalDemo() {
	return (
		<Toolbar orientation="vertical" aria-label="Text formatting">
			<ToggleGroup
				orientation="vertical"
				spacing={1}
				multiple
				aria-label="Formatting"
			>
				<ToolbarButton
					render={<ToggleGroupItem value="bold" />}
					aria-label="Bold"
				>
					<BoldIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<ToggleGroupItem value="italic" />}
					aria-label="Italic"
				>
					<ItalicIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<ToggleGroupItem value="underline" />}
					aria-label="Underline"
				>
					<UnderlineIcon />
				</ToolbarButton>
			</ToggleGroup>
			<ToolbarSeparator />
			<ToggleGroup orientation="vertical" spacing={1} aria-label="List">
				<ToolbarButton
					render={<ToggleGroupItem value="bullet" />}
					aria-label="Bullet list"
				>
					<ListIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<ToggleGroupItem value="numbered" />}
					aria-label="Numbered list"
				>
					<ListOrderedIcon />
				</ToolbarButton>
			</ToggleGroup>
			<ToolbarSeparator />
			<ToolbarButton
				render={<Button variant="ghost" size="icon" />}
				aria-label="Insert link"
			>
				<LinkIcon />
			</ToolbarButton>
		</Toolbar>
	);
}
