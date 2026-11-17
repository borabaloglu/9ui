import type * as React from "react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";

import { cn } from "@/lib/utils";

function Collapsible({ ...props }: BaseCollapsible.Root.Props) {
	return <BaseCollapsible.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseCollapsible.Trigger>, "className"> & {
	className?: string;
}) {
	return (
		<BaseCollapsible.Trigger
			data-slot="collapsible-trigger"
			className={cn(
				"[:where(&:focus-visible)]:ring-ring/50 cursor-pointer outline-none focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 [:where(&)]:rounded-sm",
				className,
			)}
			{...props}
		/>
	);
}

function CollapsiblePanel({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseCollapsible.Panel>, "className"> & {
	className?: string;
}) {
	return (
		<BaseCollapsible.Panel
			data-slot="collapsible-panel"
			className={cn(
				"ease-out-quint h-(--collapsible-panel-height) overflow-hidden transition-[height,opacity] duration-200 data-ending-style:h-0 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:h-0 data-starting-style:opacity-0 motion-reduce:transition-opacity",
				className,
			)}
			{...props}
		/>
	);
}

export { Collapsible, CollapsiblePanel, CollapsibleTrigger };
