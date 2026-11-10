import type * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
	return (
		<label
			data-slot="label"
			className={cn(
				"has-[:disabled,[data-disabled]]:text-foreground/50 has-[+:disabled,+[data-disabled]]:text-foreground/50 [:is(:disabled,[data-disabled])+&]:text-foreground/50 has-aria-invalid:text-destructive has-[+[aria-invalid=true]]:text-destructive [[aria-invalid=true]+&]:text-destructive flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none has-[+:disabled,+[data-disabled]]:cursor-not-allowed has-[:disabled,[data-disabled]]:cursor-not-allowed [:is(:disabled,[data-disabled])+&]:cursor-not-allowed",
				className,
			)}
			{...props}
		/>
	);
}

export { Label };
