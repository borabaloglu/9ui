import { CopyButton } from "@/components/copy-button"

import { cn } from "@/lib/utils"

interface CodeBarProps {
	label?: string | React.ReactNode
	type?: "demo" | "component" | "command" | "other"
	content: string
	className?: string
	labelClassName?: string
	copyButtonClassName?: string
}

export function CodeBar({
	label,
	type,
	content,
	className,
	labelClassName,
	copyButtonClassName,
}: CodeBarProps) {
	return (
		<div
			className={cn(
				"bg-secondary flex h-8 items-center justify-between border-y px-2",
				className
			)}
		>
			{typeof label === "string" ? (
				<span className={cn("px-2 text-xs font-medium", labelClassName)}>
					{label}
				</span>
			) : (
				label
			)}

			<CopyButton
				content={content}
				className={copyButtonClassName}
				eventType={type}
				label={typeof label === "string" ? label : undefined}
			/>
		</div>
	)
}
