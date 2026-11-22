import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonLargeDemo() {
	return (
		<div className="flex items-center gap-2">
			<Button size="lg">Large</Button>
			<Button size="icon-lg" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
