import { BugIcon, CopyIcon, ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Toolbar,
	ToolbarButton,
	ToolbarLink,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarLinkDemo() {
	return (
		<Toolbar aria-label="Sharing">
			<ToolbarButton render={<Button variant="ghost" />}>
				<CopyIcon />
				Copy Link
			</ToolbarButton>
			<ToolbarSeparator />
			<ToolbarLink href="#">
				<ExternalLinkIcon />
				GitHub
			</ToolbarLink>
			<ToolbarLink href="#">
				<BugIcon />
				Report Issue
			</ToolbarLink>
		</Toolbar>
	);
}
