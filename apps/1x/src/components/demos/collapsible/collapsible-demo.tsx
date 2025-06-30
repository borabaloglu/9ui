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
			<CollapsibleTrigger className="flex w-full items-center justify-between px-1.5 py-1">
				<span className="text-sm font-medium">Components</span>
				<div className={cn("transition-all duration-200", open && "rotate-90")}>
					<ChevronRightIcon size={16} />
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<ol className="mt-2 space-y-1">
					<li className="rounded border bg-secondary px-2 py-1">Button</li>
					<li className="rounded border bg-secondary px-2 py-1">Badge</li>
					<li className="rounded border bg-secondary px-2 py-1">Breadcrumbs</li>
				</ol>
			</CollapsibleContent>
		</Collapsible>
	)
}
