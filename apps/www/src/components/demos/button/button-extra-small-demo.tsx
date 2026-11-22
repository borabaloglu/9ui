import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonExtraSmallDemo() {
	return (
		<div className="flex items-center gap-2">
			<Button size="xs">Extra Small</Button>
			<Button size="icon-xs" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
