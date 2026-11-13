import type * as React from "react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";

import { cn } from "@/lib/utils";

const createPreviewCardHandle = BasePreviewCard.createHandle;

function PreviewCard<Payload>({
	...props
}: BasePreviewCard.Root.Props<Payload>) {
	return <BasePreviewCard.Root {...props} />;
}

function PreviewCardTrigger<Payload>({
	delay = 300,
	...props
}: BasePreviewCard.Trigger.Props<Payload>) {
	return (
		<BasePreviewCard.Trigger
			data-slot="preview-card-trigger"
			delay={delay}
			{...props}
		/>
	);
}

function PreviewCardArrow({
	className,
	...props
}: React.ComponentProps<typeof BasePreviewCard.Arrow>) {
	return (
		<BasePreviewCard.Arrow
			data-slot="preview-card-arrow"
			className={cn(
				"text-border flex data-[side=bottom]:-top-2.25 data-[side=inline-end]:-start-3.25 data-[side=inline-end]:-rotate-90 data-[side=inline-start]:-end-3.25 data-[side=inline-start]:rotate-90 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2.25 data-[side=top]:rotate-180 not-dark:data-[side=top]:text-(--preview-card-edge) rtl:data-[side=inline-end]:rotate-90 rtl:data-[side=inline-start]:-rotate-90 dark:data-[side=bottom]:text-(--preview-card-edge)",
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
		</BasePreviewCard.Arrow>
	);
}

function PreviewCardPopup({
	className,
	children,
	arrow = false,
	align = "center",
	alignOffset = 0,
	side = "bottom",
	sideOffset = arrow ? 10 : 4,
	anchor,
	...props
}: React.ComponentProps<typeof BasePreviewCard.Popup> &
	Pick<
		BasePreviewCard.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		arrow?: boolean;
	}) {
	return (
		<BasePreviewCard.Portal data-slot="preview-card-portal">
			<BasePreviewCard.Positioner
				data-slot="preview-card-positioner"
				className="ease-out-quint z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) motion-safe:has-data-transitioning:transition-[top,left,right,bottom,transform] motion-safe:has-data-transitioning:duration-150"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BasePreviewCard.Popup
					data-slot="preview-card-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint relative flex h-(--popup-height,auto) max-h-(--available-height) w-72 max-w-(--available-width) origin-(--transform-origin) flex-col gap-1 overflow-y-auto overscroll-contain rounded-lg border p-(--preview-card-padding) text-sm shadow-md transition-[width,height,scale,opacity] duration-150 [--preview-card-padding:--spacing(4)] not-dark:border-b-(--preview-card-edge) not-dark:[--preview-card-edge:color-mix(in_oklab,var(--border),black_6%)] has-data-[slot=preview-card-panel]:overflow-visible has-data-[slot=preview-card-viewport]:overflow-visible data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-100 data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:border-t-(--preview-card-edge) dark:[--preview-card-edge:color-mix(in_oklab,var(--border),white_8%)]",
						arrow && "overflow-visible",
						className,
					)}
					{...props}
				>
					{children}
					{arrow && <PreviewCardArrow />}
				</BasePreviewCard.Popup>
			</BasePreviewCard.Positioner>
		</BasePreviewCard.Portal>
	);
}

function PreviewCardPanel({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="preview-card-panel"
			className={cn(
				"-m-(--preview-card-padding) flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain rounded-[calc(var(--radius-lg)-1px)] p-(--preview-card-padding)",
				className,
			)}
			{...props}
		/>
	);
}

function PreviewCardViewport({
	className,
	...props
}: React.ComponentProps<typeof BasePreviewCard.Viewport>) {
	return (
		<BasePreviewCard.Viewport
			data-slot="preview-card-viewport"
			className={cn(
				"relative -m-(--preview-card-padding) min-h-0 flex-1 overflow-clip p-(--preview-card-padding) [--preview-card-slide:--spacing(6)] *:flex *:w-[calc(var(--popup-width)-2*var(--preview-card-padding)-2px)] *:flex-col *:gap-1 *:transition-[translate,opacity] *:duration-150 not-data-transitioning:overflow-y-auto *:data-ending-style:opacity-0 *:data-starting-style:opacity-0 data-[activation-direction~=down]:*:data-ending-style:-translate-y-(--preview-card-slide) data-[activation-direction~=down]:*:data-starting-style:translate-y-(--preview-card-slide) data-[activation-direction~=left]:*:data-ending-style:translate-x-(--preview-card-slide) data-[activation-direction~=left]:*:data-starting-style:-translate-x-(--preview-card-slide) data-[activation-direction~=right]:*:data-ending-style:-translate-x-(--preview-card-slide) data-[activation-direction~=right]:*:data-starting-style:translate-x-(--preview-card-slide) data-[activation-direction~=up]:*:data-ending-style:translate-y-(--preview-card-slide) data-[activation-direction~=up]:*:data-starting-style:-translate-y-(--preview-card-slide) motion-reduce:[--preview-card-slide:0px]",
				className,
			)}
			{...props}
		/>
	);
}

export {
	createPreviewCardHandle,
	PreviewCard,
	PreviewCardPanel,
	PreviewCardPopup,
	PreviewCardTrigger,
	PreviewCardViewport,
};
