import { Redo2Icon, Undo2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Toolbar, ToolbarButton } from "@/components/ui/toolbar";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const actions = [
	{ label: "Undo", icon: Undo2Icon },
	{ label: "Redo", icon: Redo2Icon },
];

export default function ToolbarTooltipDemo() {
	return (
		<TooltipProvider>
			<Toolbar aria-label="History">
				{actions.map(({ label, icon: Icon }) => (
					<Tooltip key={label}>
						<TooltipTrigger
							render={
								<ToolbarButton
									render={<Button variant="ghost" size="icon" />}
									aria-label={label}
								/>
							}
						>
							<Icon />
						</TooltipTrigger>
						<TooltipPopup sideOffset={8}>{label}</TooltipPopup>
					</Tooltip>
				))}
			</Toolbar>
		</TooltipProvider>
	);
}
