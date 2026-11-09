import { PlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeSizeDefaultDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Badge>Default</Badge>
			<Badge size="icon" aria-label="Add">
				<PlusIcon />
			</Badge>
		</div>
	);
}
