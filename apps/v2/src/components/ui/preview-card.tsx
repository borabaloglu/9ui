"use client"

import * as React from "react"
import { PreviewCard as BasePreviewCard } from "@base-ui-components/react"

import { cn } from "@/lib/utils"

const PreviewCard = BasePreviewCard.Root

const PreviewCardTrigger = BasePreviewCard.Trigger

interface PreviewCardContentProps
	extends React.ComponentPropsWithoutRef<typeof BasePreviewCard.Popup> {
	align?: BasePreviewCard.Positioner.Props["align"]
	sideOffset?: BasePreviewCard.Positioner.Props["sideOffset"]
	arrow?: boolean
}

const PreviewCardContent = React.forwardRef<
	HTMLDivElement,
	PreviewCardContentProps
>(
	(
		{
			children,
			className,
			align = "center",
			sideOffset = 8,
			arrow = true,
			...props
		},
		ref
	) => (
		<BasePreviewCard.Portal ref={ref}>
			<BasePreviewCard.Positioner sideOffset={sideOffset} align={align}>
				<BasePreviewCard.Popup
					className={cn(
						"origin-[var(--transform-origin)] rounded-lg bg-popover p-4 text-popover-foreground shadow-sm outline outline-1 -outline-offset-1 outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
						className
					)}
					{...props}
				>
					{arrow && (
						<BasePreviewCard.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=right]:left-[-13px] data-[side=top]:bottom-[-8px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180">
							<svg width="20" height="10" viewBox="0 0 20 10" fill="none">
								<path
									d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
									className="fill-popover"
								/>
								<path
									d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
									className="fill-border"
								/>
							</svg>
						</BasePreviewCard.Arrow>
					)}
					{children}
				</BasePreviewCard.Popup>
			</BasePreviewCard.Positioner>
		</BasePreviewCard.Portal>
	)
)
PreviewCardContent.displayName = "PreviewCardContent"

export { PreviewCard, PreviewCardTrigger, PreviewCardContent }
