import type * as React from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";

import { cn } from "@/lib/utils";

const createPopoverHandle = BasePopover.createHandle;

function Popover<Payload>({ ...props }: BasePopover.Root.Props<Payload>) {
	return <BasePopover.Root {...props} />;
}

function PopoverTrigger<Payload>({
	...props
}: BasePopover.Trigger.Props<Payload>) {
	return <BasePopover.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverClose({
	...props
}: React.ComponentProps<typeof BasePopover.Close>) {
	return <BasePopover.Close data-slot="popover-close" {...props} />;
}

function PopoverArrow({
	className,
	...props
}: React.ComponentProps<typeof BasePopover.Arrow>) {
	return (
		<BasePopover.Arrow
			data-slot="popover-arrow"
			className={cn(
				"text-border flex data-[side=bottom]:-top-2 data-[side=inline-end]:-start-3 data-[side=inline-end]:-rotate-90 data-[side=inline-start]:-end-3 data-[side=inline-start]:rotate-90 data-[side=left]:-right-3 data-[side=left]:rotate-90 data-[side=right]:-left-3 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180 not-dark:data-[side=top]:text-(--popover-edge) rtl:data-[side=inline-end]:rotate-90 rtl:data-[side=inline-start]:-rotate-90 dark:data-[side=bottom]:text-(--popover-edge)",
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
					className="fill-popover"
				/>
				<path
					d="M9.29997 3.34524L4.92889 7.71633C4.10258 8.54264 3.03024 8.99985 1.91855 8.99985H0V7.99985H1.91855C2.8079 7.99985 3.66577 7.63408 4.32682 6.97303L8.69793 2.60192C9.04023 2.25964 9.5598 2.25965 9.90207 2.60192L14.2732 6.97303C14.9342 7.63408 15.7921 7.99985 16.6814 7.99985H18V8.99985H16.6814C15.5698 8.99985 14.4975 8.54263 13.6711 7.71633L9.29997 3.34524Z"
					className="fill-current"
				/>
			</svg>
		</BasePopover.Arrow>
	);
}

function PopoverPopup({
	className,
	children,
	arrow = false,
	align = "center",
	alignOffset = 0,
	side = "bottom",
	sideOffset = arrow ? 10 : 4,
	anchor,
	...props
}: React.ComponentProps<typeof BasePopover.Popup> &
	Pick<
		BasePopover.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		arrow?: boolean;
	}) {
	return (
		<BasePopover.Portal data-slot="popover-portal">
			<BasePopover.Positioner
				data-slot="popover-positioner"
				className="ease-out-quint z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) has-data-transitioning:transition-[top,left,right,bottom,transform] has-data-transitioning:duration-150"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BasePopover.Popup
					data-slot="popover-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint flex h-(--popup-height,auto) max-h-(--available-height) w-72 max-w-(--available-width) origin-(--transform-origin) flex-col gap-4 overflow-y-auto overscroll-contain rounded-lg border p-(--popover-padding) text-sm shadow-md transition-[width,height,scale,opacity] duration-150 outline-none [--popover-padding:--spacing(4)] not-dark:border-b-(--popover-edge) not-dark:[--popover-edge:color-mix(in_oklab,var(--border),black_6%)] has-data-[slot=popover-viewport]:overflow-visible data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:transition-none data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:border-t-(--popover-edge) dark:[--popover-edge:color-mix(in_oklab,var(--border),white_8%)]",
						className,
					)}
					{...props}
				>
					{children}
					{arrow && <PopoverArrow />}
				</BasePopover.Popup>
			</BasePopover.Positioner>
		</BasePopover.Portal>
	);
}

function PopoverViewport({
	className,
	...props
}: React.ComponentProps<typeof BasePopover.Viewport>) {
	return (
		<BasePopover.Viewport
			data-slot="popover-viewport"
			className={cn(
				"relative -m-(--popover-padding) min-h-0 flex-1 overflow-clip p-(--popover-padding) *:flex *:w-[calc(var(--popup-width)-2*var(--popover-padding)-2px)] *:flex-col *:gap-4 *:transition-opacity *:duration-150 not-data-transitioning:overflow-y-auto *:data-ending-style:opacity-0 *:data-starting-style:opacity-0",
				className,
			)}
			{...props}
		/>
	);
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="popover-header"
			className={cn("flex flex-col gap-1", className)}
			{...props}
		/>
	);
}

function PopoverTitle({
	className,
	...props
}: React.ComponentProps<typeof BasePopover.Title>) {
	return (
		<BasePopover.Title
			data-slot="popover-title"
			className={cn("leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function PopoverDescription({
	className,
	...props
}: React.ComponentProps<typeof BasePopover.Description>) {
	return (
		<BasePopover.Description
			data-slot="popover-description"
			className={cn("text-muted-foreground text-pretty", className)}
			{...props}
		/>
	);
}

export {
	createPopoverHandle,
	Popover,
	PopoverClose,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
	PopoverViewport,
};
