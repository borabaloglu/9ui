import { CopyButton } from "@/components/copy-button"

import { cn } from "@/lib/utils"

interface CodeBarProps {
	label?: string | React.ReactNode
	content: string
	className?: string
	labelClassName?: string
	copyButtonClassName?: string
}

export function CodeBar({
	label,
	content,
	className,
	labelClassName,
	copyButtonClassName,
}: CodeBarProps) {
	return (
		<div
			className={cn(
				"flex h-8 items-center justify-between border-y bg-secondary px-2",
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

			<CopyButton content={content} className={copyButtonClassName} />
		</div>
	)
}
