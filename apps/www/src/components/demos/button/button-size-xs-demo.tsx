import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSizeXsDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="xs">Extra Small</Button>
			<Button size="icon-xs" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
