import { ArrowRightIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeWithIconDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Badge>
				<StarIcon data-icon="inline-start" />
				Featured
			</Badge>
			<Badge variant="secondary">
				Continue
				<ArrowRightIcon data-icon="inline-end" />
			</Badge>
		</div>
	);
}
