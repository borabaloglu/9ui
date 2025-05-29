import * as React from "react"

import { cn } from "@/lib/utils"

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	ratio?: number
}

function AspectRatio({
	children,
	className,
	ratio = 1,
	style,
	...props
}: AspectRatioProps) {
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
