import { ArrowRightIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonWithIconDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button>
				<PlayIcon data-icon="inline-start" />
				Watch trailer
			</Button>
			<Button>
				Next step
				<ArrowRightIcon data-icon="inline-end" />
			</Button>
		</div>
	);
}
