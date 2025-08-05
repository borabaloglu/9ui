"use client"

import React from "react"
import { useOpenPanel } from "@openpanel/nextjs"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

interface CopyButtonProps
	extends React.ComponentPropsWithoutRef<typeof Button> {
	content: string
	label?: string
	eventType?: "demo" | "component" | "command" | "other"
}

export const CopyButton = ({
	content,
	eventType,
	label,
	className,
	...props
}: CopyButtonProps) => {
	const op = useOpenPanel()

	const [copied, setCopied] = React.useState(false)

	const onCopy = async () => {
		op.track("copy", {
			type: eventType || "other",
			content: eventType === "command" ? content : undefined,
			label,
		})
		await navigator.clipboard.writeText(content!)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<Button
			onClick={onCopy}
			variant="ghost"
			size="icon-sm"
			className={cn("size-6", className)}
			{...props}
		>
			{copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
		</Button>
	)
}
