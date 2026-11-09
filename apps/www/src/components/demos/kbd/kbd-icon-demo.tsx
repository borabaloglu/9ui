import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";

import { Kbd } from "@/components/ui/kbd";

export default function KbdIconDemo() {
	return (
		<div className="text-muted-foreground flex items-center gap-4 text-sm">
			<span className="flex items-center gap-1.5">
				<Kbd>
					<ArrowUpIcon />
					<span className="sr-only">Up</span>
				</Kbd>
				<Kbd>
					<ArrowDownIcon />
					<span className="sr-only">Down</span>
				</Kbd>
				Navigate
			</span>
			<span className="flex items-center gap-1.5">
				<Kbd>
					<CornerDownLeftIcon />
					<span className="sr-only">Enter</span>
				</Kbd>
				Select
			</span>
		</div>
	);
}
