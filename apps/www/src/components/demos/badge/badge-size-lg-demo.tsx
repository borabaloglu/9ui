import { PlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeSizeLgDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Badge size="lg">Large</Badge>
			<Badge size="icon-lg" aria-label="Add">
				<PlusIcon />
			</Badge>
		</div>
	);
}
