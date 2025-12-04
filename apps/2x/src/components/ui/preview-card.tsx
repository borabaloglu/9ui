"use client"

import * as React from "react"
import { PreviewCard as BasePreviewCard } from "@base-ui-components/react"

import { cn } from "@/lib/utils"

function PreviewCard({
	...props
}: React.ComponentProps<typeof BasePreviewCard.Root>) {
	return <BasePreviewCard.Root data-slot="preview-card" {...props} />
}

function PreviewCardTrigger({
	...props
}: React.ComponentProps<typeof BasePreviewCard.Trigger>) {
	return (
		<BasePreviewCard.Trigger
			delay={0}
			closeDelay={0}
			data-slot="preview-card-trigger"
			{...props}
		/>
	)
}

function PreviewCardPortal({
	...props
}: React.ComponentProps<typeof BasePreviewCard.Portal>) {
	return <BasePreviewCard.Portal data-slot="preview-card-portal" {...props} />
}

function PreviewCardPositioner({
	...props
}: React.ComponentProps<typeof BasePreviewCard.Positioner>) {
	return (
		<BasePreviewCard.Positioner
			data-slot="preview-card-positioner"
			{...props}
		/>
	)
}

function PreviewCardArrow({
	...props
}: React.ComponentProps<typeof BasePreviewCard.Arrow>) {
	return <BasePreviewCard.Arrow data-slot="preview-card-arrow" {...props} />
}

function PreviewCardContent({
	className,
	children,
	align = "center",
	sideOffset = 8,
	arrow = true,
	...props
}: React.ComponentProps<typeof BasePreviewCard.Popup> & {
	align?: BasePreviewCard.Positioner.Props["align"]
	sideOffset?: BasePreviewCard.Positioner.Props["sideOffset"]
	arrow?: boolean
}) {
	return (
		<PreviewCardPortal>
			<PreviewCardPositioner sideOffset={sideOffset} align={align}>
				<BasePreviewCard.Popup
					data-slot="preview-card-content"
					className={cn(
						"bg-popover text-popover-foreground outline-border z-50 w-64 origin-(--transform-origin) rounded-md p-4 shadow-md outline -outline-offset-1 transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
						className
					)}
					{...props}
				>
					{arrow && (
						<PreviewCardArrow className="data-[side=bottom]:-top-2 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
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
						</PreviewCardArrow>
					)}
					{children}
				</BasePreviewCard.Popup>
			</PreviewCardPositioner>
		</PreviewCardPortal>
	)
}

export { PreviewCard, PreviewCardTrigger, PreviewCardContent }
