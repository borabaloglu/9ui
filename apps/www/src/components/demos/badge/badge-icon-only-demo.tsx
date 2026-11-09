import { BellIcon, CheckIcon, XIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeIconOnlyDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Badge size="icon" variant="info" aria-label="Notification">
				<BellIcon />
			</Badge>
			<Badge size="icon" variant="success" aria-label="Approved">
				<CheckIcon />
			</Badge>
			<Badge size="icon" variant="danger" aria-label="Rejected">
				<XIcon />
			</Badge>
		</div>
	);
}
