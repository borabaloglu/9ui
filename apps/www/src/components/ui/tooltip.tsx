import type * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
	delay = 300,
	...props
}: React.ComponentProps<typeof BaseTooltip.Provider>) {
	return <BaseTooltip.Provider delay={delay} {...props} />;
}

function Tooltip({ ...props }: React.ComponentProps<typeof BaseTooltip.Root>) {
	return <BaseTooltip.Root {...props} />;
}

function TooltipTrigger({
	...props
}: React.ComponentProps<typeof BaseTooltip.Trigger>) {
	return <BaseTooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipArrow({
	className,
	...props
}: React.ComponentProps<typeof BaseTooltip.Arrow>) {
	return (
		<BaseTooltip.Arrow
			data-slot="tooltip-arrow"
			className={cn(
				"text-foreground flex data-[side=bottom]:-top-2 data-[side=inline-end]:-start-3 data-[side=inline-end]:-rotate-90 data-[side=inline-start]:-end-3 data-[side=inline-start]:rotate-90 data-[side=left]:-right-3 data-[side=left]:rotate-90 data-[side=right]:-left-3 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180 rtl:data-[side=inline-end]:rotate-90 rtl:data-[side=inline-start]:-rotate-90",
				className,
			)}
			{...props}
		>
			<svg
				width="18"
				height="10"
				viewBox="0 0 18 10"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M8.69793 2.60192L4.32682 6.97303C3.66577 7.63408 2.8079 7.99985 1.91855 7.99985H0V9.99985H18V7.99985H16.6814C15.7921 7.99985 14.9342 7.63408 14.2732 6.97303L9.90207 2.60192C9.5598 2.25965 9.04023 2.25964 8.69793 2.60192Z"
					className="fill-current"
				/>
			</svg>
		</BaseTooltip.Arrow>
	);
}

function TooltipPopup({
	className,
	children,
	arrow = false,
	align = "center",
	alignOffset = 0,
	side = "top",
	sideOffset = arrow ? 10 : 4,
	anchor,
	...props
}: React.ComponentProps<typeof BaseTooltip.Popup> &
	Pick<
		BaseTooltip.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		arrow?: boolean;
	}) {
	return (
		<BaseTooltip.Portal data-slot="tooltip-portal">
			<BaseTooltip.Positioner
				data-slot="tooltip-positioner"
				className="z-50"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseTooltip.Popup
					data-slot="tooltip-popup"
					className={cn(
						"bg-foreground text-background ease-out-quint w-fit max-w-xs origin-(--transform-origin) rounded-md px-2 py-1 text-xs text-balance transition-[scale,opacity] duration-150 data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:transition-none data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				>
					{children}
					{arrow && <TooltipArrow />}
				</BaseTooltip.Popup>
			</BaseTooltip.Positioner>
		</BaseTooltip.Portal>
	);
}

export { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger };
