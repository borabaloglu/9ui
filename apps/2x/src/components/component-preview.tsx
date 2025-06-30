"use client"

import * as React from "react"
import { Loader2Icon, RefreshCwIcon } from "lucide-react"

import { CodeBar } from "@/components/code-bar"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { demoRegistry } from "@/registry/demos"

import type { DemoRegistry } from "@/types/demo"

type DemoName = keyof DemoRegistry

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: DemoName
	showReload?: boolean
	className?: string
	__source__: string
}

export const ComponentPreview = ({
	name,
	showReload = false,
	className,
	children,
	__source__,
}: ComponentPreviewProps) => {
	const demo = demoRegistry[name]
	const Component = demo.component

	const [key, setKey] = React.useState(0)

	return (
		<div className={cn("mt-8 overflow-hidden rounded-lg border", className)}>
			<div className="relative flex min-h-[200px] items-center justify-center p-10">
				{showReload && (
					<Button
						variant="ghost"
						size="icon-sm"
						className="absolute right-2 top-2 size-6"
						onClick={() => setKey((prev) => prev + 1)}
					>
						<RefreshCwIcon size={16} />
					</Button>
				)}
				<React.Suspense
					fallback={
						<div className="flex animate-spin items-center justify-center">
							<Loader2Icon size={16} />
						</div>
					}
				>
					<Component key={key} />
				</React.Suspense>
			</div>

			<CodeBar label={`${name}.tsx`} content={__source__} />

			<div className="[&_pre]:!max-h-[300px]">{children}</div>
		</div>
	)
}
