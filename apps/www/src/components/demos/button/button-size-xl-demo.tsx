import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSizeXlDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="xl">Extra Large</Button>
			<Button size="icon-xl" aria-label="Add">
				<PlusIcon />
			</Button>
		</div>
	);
}
