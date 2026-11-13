"use client";

import * as React from "react";
import { Drawer as BaseVaul } from "vaul-base";

import { cn } from "@/lib/utils";

type VaulDirection = NonNullable<
	React.ComponentProps<typeof BaseVaul.Root>["direction"]
>;

const VaulContext = React.createContext<{
	direction: VaulDirection;
	hasSnapPoints: boolean;
}>({ direction: "bottom", hasSnapPoints: false });

function useVaulContextValue({
	direction = "bottom",
	snapPoints,
}: Pick<
	React.ComponentProps<typeof BaseVaul.Root>,
	"direction" | "snapPoints"
>) {
	const hasSnapPoints = snapPoints != null && snapPoints.length > 0;

	return React.useMemo(
		() => ({ direction, hasSnapPoints }),
		[direction, hasSnapPoints],
	);
}

function Vaul(props: React.ComponentProps<typeof BaseVaul.Root>) {
	const context = useVaulContextValue(props);

	return (
		<VaulContext value={context}>
			<BaseVaul.Root {...props} />
		</VaulContext>
	);
}

function VaulNested(props: React.ComponentProps<typeof BaseVaul.NestedRoot>) {
	const context = useVaulContextValue(props);

	return (
		<VaulContext value={context}>
			<BaseVaul.NestedRoot {...props} />
		</VaulContext>
	);
}

function VaulTrigger({
	...props
}: React.ComponentProps<typeof BaseVaul.Trigger>) {
	return <BaseVaul.Trigger data-slot="vaul-trigger" {...props} />;
}

function VaulClose({ ...props }: React.ComponentProps<typeof BaseVaul.Close>) {
	return <BaseVaul.Close data-slot="vaul-close" {...props} />;
}

function VaulOverlay({
	className,
	...props
}: React.ComponentProps<typeof BaseVaul.Overlay>) {
	return (
		<BaseVaul.Overlay
			data-slot="vaul-overlay"
			className={cn(
				"fixed inset-0 z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-xs",
				className,
			)}
			{...props}
		/>
	);
}

function VaulHandle({
	className,
	...props
}: React.ComponentProps<typeof BaseVaul.Handle>) {
	return (
		<BaseVaul.Handle
			data-slot="vaul-handle"
			className={cn(
				"bg-foreground/15! z-1 h-1.5! w-25! shrink-0 cursor-grab opacity-100! *:min-h-6.5 active:cursor-grabbing",
				className,
			)}
			{...props}
		/>
	);
}

function VaulContent({
	className,
	children,
	variant = "default",
	showHandle = true,
	...props
}: React.ComponentProps<typeof BaseVaul.Content> & {
	variant?: "default" | "inset";
	showHandle?: boolean;
}) {
	const { direction, hasSnapPoints } = React.use(VaulContext);
	const inset = variant === "inset";

	return (
		<BaseVaul.Portal data-slot="vaul-portal">
			<VaulOverlay
				className={
					hasSnapPoints
						? "opacity-100! not-data-[vaul-snap-points-overlay=true]:opacity-50! data-closed:data-vaul-overlay:animate-none! data-closed:data-vaul-overlay:opacity-0! starting:data-open:data-vaul-overlay:opacity-0!"
						: undefined
				}
			/>
			<BaseVaul.Content
				data-slot="vaul-content"
				data-variant={variant}
				className={cn(
					"bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 pb-(--vaul-bottom) text-sm shadow-lg outline-none [--vaul-bottom:0px] [--vaul-inset:max(--spacing(4),calc((100%-var(--container-md))/2+--spacing(4)))] [--vaul-radius:var(--radius-2xl)]",
					(direction === "top" || direction === "bottom") && "max-h-[80dvh]",
					(direction === "left" || direction === "right") &&
						"w-[calc(100%-(--spacing(12)))] max-w-sm",
					direction === "top" && showHandle && "[--vaul-bottom:--spacing(5)]",
					!inset && [
						direction === "top" &&
							"inset-x-0 top-0 rounded-b-(--vaul-radius) border-b pt-[env(safe-area-inset-top,0px)] not-dark:border-b-[color-mix(in_oklab,var(--border),black_6%)]",
						direction === "bottom" &&
							"inset-x-0 bottom-0 rounded-t-(--vaul-radius) border-t [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:100%_0_-100vh_0] data-[vaul-custom-container=true]:[--vaul-overdrag:auto] dark:border-t-[color-mix(in_oklab,var(--border),white_8%)]",
						direction === "right" &&
							"inset-y-0 right-0 rounded-l-(--vaul-radius) border-l pt-[env(safe-area-inset-top,0px)] [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:0_-100vw_0_100%] data-[vaul-custom-container=true]:[--vaul-overdrag:auto]",
						direction === "left" &&
							"inset-y-0 left-0 rounded-r-(--vaul-radius) border-r pt-[env(safe-area-inset-top,0px)] [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:0_100%_0_-100vw] data-[vaul-custom-container=true]:[--vaul-overdrag:auto]",
					],
					inset && [
						"rounded-(--vaul-radius) border bg-size-[var(--vaul-radius)_var(--vaul-radius),var(--vaul-radius)_var(--vaul-radius),calc(100%-2*var(--vaul-radius))_1px] bg-position-[0_0,100%_0,50%_0] bg-no-repeat bg-origin-border [--initial-transform:calc(100%+--spacing(4))] not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] after:hidden! dark:bg-[radial-gradient(circle_at_var(--vaul-radius)_calc(var(--vaul-radius)+1px),transparent_calc(var(--vaul-radius)-0.5px),--theme(--color-white/8%)_calc(var(--vaul-radius)+0.5px)),radial-gradient(circle_at_0_calc(var(--vaul-radius)+1px),transparent_calc(var(--vaul-radius)-0.5px),--theme(--color-white/8%)_calc(var(--vaul-radius)+0.5px)),linear-gradient(--theme(--color-white/8%),--theme(--color-white/8%))]",
						direction === "top" &&
							"inset-x-4 top-[calc(--spacing(4)+env(safe-area-inset-top,0px))]",
						direction === "bottom" &&
							"inset-x-4 bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0px))]",
						direction === "right" &&
							"top-[calc(--spacing(4)+env(safe-area-inset-top,0px))] right-4 bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0px))]",
						direction === "left" &&
							"top-[calc(--spacing(4)+env(safe-area-inset-top,0px))] bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0px))] left-4",
					],
					className,
				)}
				{...props}
			>
				{showHandle && direction === "bottom" && (
					<VaulHandle className="mt-2.5 -mb-4" />
				)}
				{children}
				{showHandle && direction === "top" && (
					<VaulHandle className="absolute! inset-x-0 bottom-2" />
				)}
			</BaseVaul.Content>
		</BaseVaul.Portal>
	);
}

function VaulHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="vaul-header"
			className={cn("flex flex-col gap-1.5 px-(--vaul-inset) py-4", className)}
			{...props}
		/>
	);
}

function VaulPanel({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="vaul-panel"
			className={cn(
				"-my-1 min-h-0 flex-1 overflow-y-auto overscroll-contain px-(--vaul-inset) py-1",
				className,
			)}
			{...props}
		/>
	);
}

function VaulFooter({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	variant?: "default" | "bare";
}) {
	return (
		<div
			data-slot="vaul-footer"
			data-variant={variant}
			className={cn(
				"mt-auto flex flex-col-reverse gap-2 px-(--vaul-inset) py-4 sm:flex-row sm:justify-end",
				variant === "default" &&
					"bg-muted/50 relative -mb-(--vaul-bottom) rounded-b-[inherit] border-t pb-[calc(--spacing(4)+var(--vaul-bottom))] after:pointer-events-none after:absolute after:[inset:var(--vaul-overdrag,auto)] after:z-1 after:bg-inherit",
				className,
			)}
			{...props}
		/>
	);
}

function VaulTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseVaul.Title>) {
	return (
		<BaseVaul.Title
			data-slot="vaul-title"
			className={cn("text-base leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function VaulDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseVaul.Description>) {
	return (
		<BaseVaul.Description
			data-slot="vaul-description"
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground text-sm text-pretty *:[a]:underline *:[a]:underline-offset-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHandle,
	VaulHeader,
	VaulNested,
	VaulOverlay,
	VaulPanel,
	VaulTitle,
	VaulTrigger,
};
