import { CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger
				render={<Button variant="outline" size="icon" aria-label="Copy link" />}
			>
				<CopyIcon />
			</TooltipTrigger>
			<TooltipPopup>Copy link</TooltipPopup>
		</Tooltip>
	);
}
