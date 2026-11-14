import { ChevronRightIcon } from "lucide-react";

import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
	return (
		<Collapsible className="mx-auto w-48">
			<CollapsibleTrigger className="focus-visible:ring-ring/50 flex min-h-7 w-full items-center justify-between gap-2 rounded-sm text-sm font-medium outline-none focus-visible:ring-3 any-pointer-coarse:min-h-9">
				Show recovery keys
				<ChevronRightIcon className="text-muted-foreground ease-out-quint size-4 shrink-0 transition-[rotate] duration-150 in-data-panel-open:rotate-90 in-data-panel-open:duration-200 motion-reduce:transition-none" />
			</CollapsibleTrigger>
			<CollapsiblePanel>
				<ol className="flex flex-col gap-1.5 pt-2 font-mono text-sm">
					<li className="bg-muted rounded-sm px-2 py-1">A5FD-7K1B-ZR92</li>
					<li className="bg-muted rounded-sm px-2 py-1">CQ9P-L02R-W8NV</li>
					<li className="bg-muted rounded-sm px-2 py-1">8FD5-GH2B-0SA7</li>
				</ol>
			</CollapsiblePanel>
		</Collapsible>
	);
}
