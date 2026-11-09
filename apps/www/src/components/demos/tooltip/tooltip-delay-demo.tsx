import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDelayDemo() {
	return (
		<Tooltip>
			<TooltipTrigger delay={0} render={<Button variant="outline" />}>
				No delay
			</TooltipTrigger>
			<TooltipPopup>Opens right away</TooltipPopup>
		</Tooltip>
	);
}
