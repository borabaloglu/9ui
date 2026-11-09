import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSizeLgDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="lg">Large</Button>
			<Button size="icon-lg" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
