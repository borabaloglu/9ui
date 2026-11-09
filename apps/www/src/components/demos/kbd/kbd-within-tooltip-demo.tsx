import { SaveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function KbdWithinTooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger
				render={<Button variant="outline" size="icon" aria-label="Save file" />}
			>
				<SaveIcon />
			</TooltipTrigger>
			<TooltipPopup className="flex items-center gap-2 pr-1">
				Save file
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>S</Kbd>
				</KbdGroup>
			</TooltipPopup>
		</Tooltip>
	);
}
