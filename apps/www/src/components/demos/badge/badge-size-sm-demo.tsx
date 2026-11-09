import { PlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeSizeSmDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Badge size="sm">Small</Badge>
			<Badge size="icon-sm" aria-label="Add">
				<PlusIcon />
			</Badge>
		</div>
	);
}
