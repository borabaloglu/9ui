import { TruckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverArrowDemo() {
	return (
		<Popover>
			<PopoverTrigger render={<Button variant="outline" />}>
				<TruckIcon />
				Shipping
			</PopoverTrigger>
			<PopoverPopup arrow>
				<PopoverHeader>
					<PopoverTitle>Shipping & delivery</PopoverTitle>
					<PopoverDescription>
						Standard orders arrive in 3–5 business days. Order before 2:00 p.m.
						local time on a weekday and we ship the same day. Free returns
						within 30 days.
					</PopoverDescription>
				</PopoverHeader>
			</PopoverPopup>
		</Popover>
	);
}
