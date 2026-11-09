import { SaveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function KbdWithinTooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger
				render={<Button variant="outline" size="icon" aria-label="Save file" />}
			>
				<SaveIcon />
			</TooltipTrigger>
			<TooltipContent className="flex items-center gap-2">
				Save file
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>S</Kbd>
				</KbdGroup>
			</TooltipContent>
		</Tooltip>
	);
}
