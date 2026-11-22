import { PlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeLargeDemo() {
	return (
		<div className="flex items-center gap-2">
			<Badge size="lg">Large</Badge>
			<Badge size="icon-lg" aria-label="Add">
				<PlusIcon />
			</Badge>
		</div>
	);
}
