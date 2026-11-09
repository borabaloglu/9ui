import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const actions = [
	{ label: "Bold", icon: BoldIcon },
	{ label: "Italic", icon: ItalicIcon },
	{ label: "Underline", icon: UnderlineIcon },
] as const;

export default function TooltipGroupedDemo() {
	return (
		<TooltipProvider>
			<div className="flex items-center gap-1">
				{actions.map(({ label, icon: Icon }) => (
					<Tooltip key={label}>
						<TooltipTrigger
							render={
								<Button variant="outline" size="icon" aria-label={label} />
							}
						>
							<Icon />
						</TooltipTrigger>
						<TooltipPopup>{label}</TooltipPopup>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	);
}
