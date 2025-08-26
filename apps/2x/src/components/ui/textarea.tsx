import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"placeholder:text-muted-foreground hover:border-ring/70 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/50 aria-invalid:border-destructive bg-input flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:text-sm",
				className
			)}
			{...props}
		/>
	)
}

export { Textarea }
