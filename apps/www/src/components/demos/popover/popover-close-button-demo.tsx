import { BellIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverClose,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverCloseButtonDemo() {
	return (
		<Popover>
			<PopoverTrigger
				render={
					<Button variant="outline" size="icon" aria-label="Notifications" />
				}
			>
				<BellIcon />
			</PopoverTrigger>
			<PopoverPopup>
				<PopoverClose
					render={
						<Button
							variant="ghost"
							size="icon-sm"
							className="absolute top-2 right-2"
							aria-label="Close"
						/>
					}
				>
					<XIcon />
				</PopoverClose>
				<PopoverHeader className="pe-8">
					<PopoverTitle>Notifications</PopoverTitle>
					<PopoverDescription>
						You have 3 unread messages. Check your inbox for more details.
					</PopoverDescription>
				</PopoverHeader>
			</PopoverPopup>
		</Popover>
	);
}
