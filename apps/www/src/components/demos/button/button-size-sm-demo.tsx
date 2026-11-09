import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSizeSmDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="sm">Small</Button>
			<Button size="icon-sm" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
