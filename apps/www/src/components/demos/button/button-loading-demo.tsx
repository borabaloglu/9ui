import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
	return (
		<Button className="gap-2" disabled>
			<div className="animate-spin">
				<LoaderCircleIcon />
			</div>
			Loading
		</Button>
	);
}
