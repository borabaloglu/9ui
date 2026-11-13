"use client";

import * as React from "react";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";

import { cn } from "@/lib/utils";

type DrawerSwipeDirection = NonNullable<
	BaseDrawer.Root.Props["swipeDirection"]
>;

const DrawerContext = React.createContext<{
	swipeDirection: DrawerSwipeDirection;
	modal: boolean;
	hasSnapPoints: boolean;
}>({ swipeDirection: "down", modal: true, hasSnapPoints: false });

const createDrawerHandle = BaseDrawer.createHandle;

function Drawer<Payload>({
	swipeDirection = "down",
	modal = true,
	snapPoints,
	...props
}: BaseDrawer.Root.Props<Payload>) {
	const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
	const context = React.useMemo(
		() => ({ swipeDirection, modal: modal === true, hasSnapPoints }),
		[swipeDirection, modal, hasSnapPoints],
	);

	return (
		<DrawerContext value={context}>
			<BaseDrawer.Root
				swipeDirection={swipeDirection}
				modal={modal}
				snapPoints={snapPoints}
				{...props}
			/>
		</DrawerContext>
	);
}

function DrawerProvider({ ...props }: BaseDrawer.Provider.Props) {
	return <BaseDrawer.Provider {...props} />;
}

function DrawerIndentBackground({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.IndentBackground>) {
	return (
		<BaseDrawer.IndentBackground
			data-slot="drawer-indent-background"
			className={cn(
				"invisible fixed inset-0 bg-black transition-[visibility] duration-450 data-active:visible",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerIndent({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.Indent>) {
	return (
		<BaseDrawer.Indent
			data-slot="drawer-indent"
			className={cn(
				"bg-background ease-drawer relative origin-top overflow-clip transition-[transform,border-radius] duration-[calc(450ms*(1-clamp(0,var(--drawer-swipe-progress)*100000,1)*clamp(0,(1-var(--drawer-swipe-progress))*100000,1)))] data-active:will-change-transform motion-safe:data-active:[transform:translateY(calc((--spacing(3.5)+env(safe-area-inset-top,0px))*(1-var(--drawer-swipe-progress))))_scale(calc(0.96+0.04*var(--drawer-swipe-progress)))] motion-safe:data-active:rounded-[calc(var(--radius-2xl)*(1-var(--drawer-swipe-progress)))]",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerTrigger({
	...props
}: React.ComponentProps<typeof BaseDrawer.Trigger>) {
	return <BaseDrawer.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerClose({
	...props
}: React.ComponentProps<typeof BaseDrawer.Close>) {
	return <BaseDrawer.Close data-slot="drawer-close" {...props} />;
}

function DrawerSwipeArea({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.SwipeArea>) {
	const { swipeDirection } = React.use(DrawerContext);

	return (
		<BaseDrawer.SwipeArea
			data-slot="drawer-swipe-area"
			className={cn(
				"fixed z-50 touch-none",
				swipeDirection === "up" && "inset-x-0 top-0 h-8",
				swipeDirection === "down" && "inset-x-0 bottom-0 h-8",
				swipeDirection === "right" && "inset-y-0 right-0 w-8",
				swipeDirection === "left" && "inset-y-0 left-0 w-8",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerBackdrop({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.Backdrop>) {
	return (
		<BaseDrawer.Backdrop
			data-slot="drawer-backdrop"
			className={cn(
				"ease-drawer fixed inset-0 z-50 min-h-dvh bg-black/30 opacity-[max(var(--drawer-backdrop-floor,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerSwipeHandle({ className }: { className?: string }) {
	return (
		<div
			aria-hidden="true"
			data-slot="drawer-swipe-handle"
			className={cn(
				"z-1 flex cursor-grab justify-center transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:cursor-grabbing active:cursor-grabbing",
				className,
			)}
		>
			<span className="bg-foreground/15 h-1.5 w-25 rounded-full" />
		</div>
	);
}

function DrawerPopup({
	className,
	children,
	variant = "default",
	showHandle = true,
	container,
	...props
}: React.ComponentProps<typeof BaseDrawer.Popup> & {
	variant?: "default" | "inset";
	showHandle?: boolean;
	container?: BaseDrawer.Portal.Props["container"];
}) {
	const { swipeDirection, modal, hasSnapPoints } = React.use(DrawerContext);
	const inset = variant === "inset";

	return (
		<BaseDrawer.Portal data-slot="drawer-portal" container={container}>
			{modal && (
				<DrawerBackdrop
					className={
						hasSnapPoints ? "[--drawer-backdrop-floor:0.5]" : undefined
					}
				/>
			)}
			<BaseDrawer.Viewport
				data-slot="drawer-viewport"
				className={cn(
					"fixed inset-0 z-50 flex",
					!modal && "pointer-events-none",
					swipeDirection === "up" && "items-start",
					swipeDirection === "down" && "items-end",
					swipeDirection === "right" && "justify-end",
					swipeDirection === "left" && "justify-start",
					inset &&
						"px-4 pt-[calc(--spacing(4)+env(safe-area-inset-top,0px))] pb-[calc(--spacing(4)+env(safe-area-inset-bottom,0px))]",
				)}
			>
				<BaseDrawer.Popup
					data-slot="drawer-popup"
					data-variant={variant}
					className={cn(
						"group/drawer-popup bg-popover text-popover-foreground pointer-events-auto relative flex touch-none flex-col gap-4 pt-(--drawer-top) pb-(--drawer-bottom) text-sm shadow-lg outline-none [--drawer-bottom:0px] [--drawer-inset:max(--spacing(4),calc((100%-var(--container-md))/2+--spacing(4)))] [--drawer-offset:0px] [--drawer-radius:var(--radius-2xl)] [--drawer-top:0px]",
						"after:pointer-events-none after:absolute after:[inset:var(--drawer-bleed,auto)] after:bg-inherit",
						"[--drawer-stack-shift:calc((var(--drawer-height,var(--drawer-frontmost-height,0px))-var(--drawer-frontmost-height,0px))*min(1,var(--drawer-stack)))] [--drawer-stack:max(0,calc(var(--nested-drawers)-clamp(0,var(--drawer-swipe-progress),1)))] data-nested-drawer-open:brightness-90 dark:data-nested-drawer-open:brightness-75",
						"ease-drawer transition-[transform,opacity,filter] duration-450 will-change-transform data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-swipe-dismiss:[transform:var(--drawer-closed)] data-swiping:cursor-grabbing data-swiping:select-none motion-safe:data-ending-style:[transform:var(--drawer-closed)] motion-safe:data-starting-style:[transform:var(--drawer-closed)] motion-reduce:data-ending-style:opacity-0 motion-reduce:data-starting-style:opacity-0",
						(swipeDirection === "up" || swipeDirection === "down") &&
							"max-h-[80dvh] w-full",
						(swipeDirection === "left" || swipeDirection === "right") &&
							"w-[calc(100%-(--spacing(12)))] max-w-sm",
						swipeDirection === "up" &&
							"origin-bottom [transform:translateY(calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)-var(--drawer-stack-shift)+var(--drawer-stack)*--spacing(4)))_scale(calc(1-var(--drawer-stack)*0.05))] [--drawer-closed:translateY(calc(-100%-var(--drawer-offset)))]",
						swipeDirection === "down" &&
							"origin-top [transform:translateY(calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)+var(--drawer-stack-shift)-var(--drawer-stack)*--spacing(4)))_scale(calc(1-var(--drawer-stack)*0.05))] [--drawer-closed:translateY(calc(100%+var(--drawer-offset)))]",
						swipeDirection === "right" &&
							"origin-left [transform:translateX(calc(var(--drawer-swipe-movement-x)-var(--drawer-stack)*--spacing(4)))_scale(calc(1-var(--drawer-stack)*0.05))] [--drawer-closed:translateX(calc(100%+var(--drawer-offset)))]",
						swipeDirection === "left" &&
							"origin-right [transform:translateX(calc(var(--drawer-swipe-movement-x)+var(--drawer-stack)*--spacing(4)))_scale(calc(1-var(--drawer-stack)*0.05))] [--drawer-closed:translateX(calc(-100%-var(--drawer-offset)))]",
						swipeDirection === "up" &&
							showHandle &&
							"[--drawer-bottom:--spacing(5)]",
						!inset && [
							swipeDirection === "up" &&
								"rounded-b-(--drawer-radius) border-b [--drawer-bleed:-100vh_0_100%_0] [--drawer-top:env(safe-area-inset-top,0px)] not-dark:border-b-[color-mix(in_oklab,var(--border),black_6%)]",
							swipeDirection === "down" &&
								"rounded-t-(--drawer-radius) border-t [--drawer-bleed:100%_0_-100vh_0] [--drawer-bottom:env(safe-area-inset-bottom,0px)] [--drawer-footer-bleed:var(--drawer-bleed)] dark:border-t-[color-mix(in_oklab,var(--border),white_8%)]",
							swipeDirection === "right" &&
								"rounded-l-(--drawer-radius) border-l [--drawer-bleed:0_-100vw_0_100%] [--drawer-bottom:env(safe-area-inset-bottom,0px)] [--drawer-footer-bleed:var(--drawer-bleed)] [--drawer-top:env(safe-area-inset-top,0px)]",
							swipeDirection === "left" &&
								"rounded-r-(--drawer-radius) border-r [--drawer-bleed:0_100%_0_-100vw] [--drawer-bottom:env(safe-area-inset-bottom,0px)] [--drawer-footer-bleed:var(--drawer-bleed)] [--drawer-top:env(safe-area-inset-top,0px)]",
						],
						inset && [
							"rounded-(--drawer-radius) border bg-size-[var(--drawer-radius)_var(--drawer-radius),var(--drawer-radius)_var(--drawer-radius),calc(100%-2*var(--drawer-radius))_1px] bg-position-[0_0,100%_0,50%_0] bg-no-repeat bg-origin-border not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] dark:bg-[radial-gradient(circle_at_var(--drawer-radius)_calc(var(--drawer-radius)+1px),transparent_calc(var(--drawer-radius)-0.5px),--theme(--color-white/8%)_calc(var(--drawer-radius)+0.5px)),radial-gradient(circle_at_0_calc(var(--drawer-radius)+1px),transparent_calc(var(--drawer-radius)-0.5px),--theme(--color-white/8%)_calc(var(--drawer-radius)+0.5px)),linear-gradient(--theme(--color-white/8%),--theme(--color-white/8%))]",
							swipeDirection === "up" &&
								"[--drawer-offset:calc(--spacing(4)+env(safe-area-inset-top,0px))]",
							swipeDirection === "down" &&
								"[--drawer-offset:calc(--spacing(4)+env(safe-area-inset-bottom,0px))]",
							(swipeDirection === "left" || swipeDirection === "right") &&
								"[--drawer-offset:--spacing(4)]",
						],
						className,
					)}
					{...props}
				>
					{showHandle && swipeDirection === "down" && (
						<DrawerSwipeHandle className="relative -mb-6.5 shrink-0 py-2.5" />
					)}
					{children}
					{showHandle && swipeDirection === "up" && (
						<DrawerSwipeHandle className="absolute inset-x-0 bottom-0 pt-2.5 pb-2" />
					)}
				</BaseDrawer.Popup>
			</BaseDrawer.Viewport>
		</BaseDrawer.Portal>
	);
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="drawer-header"
			className={cn(
				"flex flex-col gap-1.5 px-(--drawer-inset) py-4",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerPanel({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.Content>) {
	return (
		<BaseDrawer.Content
			data-slot="drawer-panel"
			className={cn(
				"-my-1 min-h-0 flex-1 touch-auto overflow-y-auto overscroll-contain px-(--drawer-inset) py-1",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerFooter({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	variant?: "default" | "bare";
}) {
	return (
		<div
			data-slot="drawer-footer"
			data-variant={variant}
			className={cn(
				"mt-auto flex flex-col-reverse gap-2 px-(--drawer-inset) py-4 sm:flex-row sm:justify-end",
				variant === "default" &&
					"bg-muted/50 relative -mb-(--drawer-bottom) rounded-b-[inherit] border-t pb-[calc(--spacing(4)+var(--drawer-bottom))] after:pointer-events-none after:absolute after:[inset:var(--drawer-footer-bleed,auto)] after:z-1 after:bg-inherit",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.Title>) {
	return (
		<BaseDrawer.Title
			data-slot="drawer-title"
			className={cn("text-base leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function DrawerDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseDrawer.Description>) {
	return (
		<BaseDrawer.Description
			data-slot="drawer-description"
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground text-sm text-pretty *:[a]:underline *:[a]:underline-offset-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	createDrawerHandle,
	Drawer,
	DrawerBackdrop,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerIndent,
	DrawerIndentBackground,
	DrawerPanel,
	DrawerPopup,
	DrawerProvider,
	DrawerSwipeArea,
	DrawerTitle,
	DrawerTrigger,
};
