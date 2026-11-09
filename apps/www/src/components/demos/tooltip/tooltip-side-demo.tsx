import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const sides = ["top", "right", "left", "bottom"] as const;

export default function TooltipSideDemo() {
	return (
		<TooltipProvider>
			<div className="grid grid-cols-2 gap-2">
				{sides.map((side) => (
					<Tooltip key={side}>
						<TooltipTrigger
							render={<Button variant="outline" className="capitalize" />}
						>
							{side}
						</TooltipTrigger>
						<TooltipPopup side={side}>Opens on the {side}</TooltipPopup>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	);
}
