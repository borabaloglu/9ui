import { useState } from "react"
import { ChevronRightIcon } from "lucide-react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { cn } from "@/lib/utils"

export default function CollapsibleDemo() {
	const [open, setOpen] = useState(false)

	return (
		<Collapsible
			className="mx-auto w-40 py-12"
			open={open}
			onOpenChange={setOpen}
		>
			<CollapsibleTrigger className="flex w-full items-center justify-between">
				<span className="text-sm font-medium">Show recovery keys</span>
				<div className={cn("transition-all duration-200", open && "rotate-90")}>
					<ChevronRightIcon size={16} />
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<ol className="mt-2 space-y-1.5 font-medium">
					<li className="bg-secondary rounded-sm px-2 py-1">A5FD-7K1B-ZR92</li>
					<li className="bg-secondary rounded-sm px-2 py-1">CQ9P-L02R-W8NV</li>
					<li className="bg-secondary rounded-sm px-2 py-1">8FD5-GH2B-0SA7</li>
				</ol>
			</CollapsibleContent>
		</Collapsible>
	)
}
