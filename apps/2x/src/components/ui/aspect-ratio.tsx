import * as React from "react"

import { cn } from "@/lib/utils"

function AspectRatio({
	children,
	className,
	ratio = 1,
	style,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	ratio?: number
}) {
	return (
		<div
			data-slot="aspect-ratio"
			style={{
				...style,
				paddingBottom: `${(1 / ratio) * 100}%`,
			}}
			className={cn("relative w-full", className)}
			{...props}
		>
			<div className="absolute inset-0 size-full">{children}</div>
		</div>
	)
}

export { AspectRatio }
