import { DownloadIcon, Share2Icon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Toolbar,
	ToolbarButton,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarDisabledDemo() {
	return (
		<Toolbar aria-label="File actions">
			<ToolbarButton
				render={<Button variant="ghost" size="icon" />}
				aria-label="Add to favorites"
			>
				<StarIcon />
			</ToolbarButton>
			<ToolbarButton
				render={<Button variant="ghost" size="icon" />}
				aria-label="Download"
				disabled
			>
				<DownloadIcon />
			</ToolbarButton>
			<ToolbarSeparator />
			<ToolbarButton render={<Button variant="ghost" />}>
				<Share2Icon />
				Share
			</ToolbarButton>
		</Toolbar>
	);
}
