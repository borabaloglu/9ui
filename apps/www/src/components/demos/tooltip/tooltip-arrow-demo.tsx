import { BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipArrowDemo() {
	return (
		<Tooltip>
			<TooltipTrigger
				render={
					<Button variant="outline" size="icon" aria-label="Notifications" />
				}
			>
				<BellIcon />
			</TooltipTrigger>
			<TooltipPopup showArrow>Notifications</TooltipPopup>
		</Tooltip>
	);
}
