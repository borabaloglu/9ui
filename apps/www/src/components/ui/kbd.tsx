import type * as React from "react";

import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="kbd"
			className={cn(
				"bg-muted text-muted-foreground in-[[data-slot=button]:not([data-variant=default])]:bg-foreground/10 in-data-[slot=tooltip-popup]:bg-background in-data-[slot=tooltip-popup]:text-foreground in-[[data-slot=button][data-variant=default]]:bg-primary-foreground in-[[data-slot=button][data-variant=default]]:text-primary pointer-events-none inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [unicode-bidi:plaintext] rtl:flex-row-reverse [&_svg:not([class*='size-'])]:size-3",
				className,
			)}
			{...props}
		/>
	);
}

function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="kbd-group"
			className={cn(
				"inline-flex items-center gap-1 rtl:flex-row-reverse",
				className,
			)}
			{...props}
		/>
	);
}

export { Kbd, KbdGroup };
