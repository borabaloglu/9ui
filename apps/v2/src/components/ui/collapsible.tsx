import * as React from "react"
import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible"

import { cn } from "@/lib/utils"

const Collapsible = BaseCollapsible.Root

const CollapsibleTrigger = BaseCollapsible.Trigger

const CollapsibleContent = React.forwardRef<
	HTMLDivElement,
	BaseCollapsible.Panel.Props
>(({ className, ...props }, ref) => (
	<BaseCollapsible.Panel
		ref={ref}
		className={cn(
			"h-[var(--collapsible-panel-height)] overflow-hidden text-sm transition-all duration-200 data-[ending-style]:h-0 data-[starting-style]:h-0",
			className
		)}
		{...props}
	/>
))
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
