import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDefaultSizeDemo() {
	return (
		<div className="flex items-center gap-2">
			<Button>Default</Button>
			<Button size="icon" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
