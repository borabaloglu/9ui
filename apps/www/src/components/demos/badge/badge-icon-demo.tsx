import { ArrowRightIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeIconDemo() {
	return (
		<div className="flex items-center gap-2">
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
