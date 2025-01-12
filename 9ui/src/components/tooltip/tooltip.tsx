import * as React from "react"
import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip"

import { createChildElement, merge } from "../../utils"

/********
Tooltip Mappings
********/
const Tooltip = BaseTooltip.Root

/********
Tooltip Trigger
********/
// TODO: Update props type when Base UI fixes type issues
interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
	asChild?: boolean
}

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
	({ children, className, asChild, ...props }, ref) => {
		return (
			<BaseTooltip.Trigger
				ref={ref}
				className={merge(className)}
				render={asChild ? createChildElement(children) : undefined}
				{...props}
			>
				{children}
			</BaseTooltip.Trigger>
		)
	}
)
TooltipTrigger.displayName = "TooltipTrigger"

/********
Tooltip Content
********/
interface TooltipContentProps
	extends React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup> {
	positionerProps?: BaseTooltip.Positioner.Props
	portalProps?: BaseTooltip.Portal.Props
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
	({ children, className, portalProps, positionerProps, ...props }, ref) => {
		return (
			<BaseTooltip.Portal ref={ref} {...portalProps}>
				<BaseTooltip.Positioner sideOffset={8} {...positionerProps}>
					<BaseTooltip.Popup
						className={merge(
							"origin-[var(--transform-origin)] rounded-md bg-bg px-3.5 py-2 text-sm text-fg shadow-elevation-low outline outline-1 -outline-offset-1 outline-muted transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
							className
						)}
						{...props}
					>
						<BaseTooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=right]:left-[-13px] data-[side=top]:bottom-[-8px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180">
							<svg width="20" height="10" viewBox="0 0 20 10" fill="none">
								<path
									d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
									className="fill-bg"
								/>
								<path
									d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
									className="fill-muted"
								/>
							</svg>
						</BaseTooltip.Arrow>
						{children}
					</BaseTooltip.Popup>
				</BaseTooltip.Positioner>
			</BaseTooltip.Portal>
		)
	}
)

export { Tooltip, TooltipTrigger, TooltipContent }