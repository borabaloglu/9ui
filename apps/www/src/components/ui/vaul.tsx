"use client";

import * as React from "react";
import { Drawer as BaseVaul } from "vaul-base";

import { cn } from "@/lib/utils";

type VaulDirection = NonNullable<
	React.ComponentProps<typeof BaseVaul.Root>["direction"]
>;

const VaulDirectionContext = React.createContext<VaulDirection>("bottom");

function Vaul(props: React.ComponentProps<typeof BaseVaul.Root>) {
	return (
		<VaulDirectionContext value={props.direction ?? "bottom"}>
			<BaseVaul.Root {...props} />
		</VaulDirectionContext>
	);
}

function VaulNested(props: React.ComponentProps<typeof BaseVaul.NestedRoot>) {
	return (
		<VaulDirectionContext value={props.direction ?? "bottom"}>
			<BaseVaul.NestedRoot {...props} />
		</VaulDirectionContext>
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
				"bg-foreground/15! h-1! w-10! shrink-0 opacity-100!",
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
	const direction = React.use(VaulDirectionContext);
	const inset = variant === "inset";

	return (
		<BaseVaul.Portal data-slot="vaul-portal">
			<VaulOverlay />
			<BaseVaul.Content
				data-slot="vaul-content"
				data-variant={variant}
				className={cn(
					"bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 pb-(--vaul-bottom) text-sm shadow-lg outline-none [--vaul-bottom:0px] [--vaul-inset:max(--spacing(4),calc((100%-var(--container-md))/2+--spacing(4)))]",
					(direction === "top" || direction === "bottom") && "max-h-[80dvh]",
					(direction === "left" || direction === "right") &&
						"w-[calc(100%-(--spacing(12)))] max-w-sm",
					direction === "top" && showHandle && "[--vaul-bottom:--spacing(5)]",
					!inset && [
						direction === "top" &&
							"inset-x-0 top-0 rounded-b-2xl border-b pt-[env(safe-area-inset-top,0px)] not-dark:border-b-[color-mix(in_oklab,var(--border),black_6%)]",
						direction === "bottom" &&
							"inset-x-0 bottom-0 rounded-t-2xl border-t [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:100%_0_-100vh_0] data-[vaul-custom-container=true]:[--vaul-overdrag:auto] dark:border-t-[color-mix(in_oklab,var(--border),white_8%)]",
						direction === "right" &&
							"inset-y-0 right-0 rounded-l-2xl border-l pt-[env(safe-area-inset-top,0px)] [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:0_-100vw_0_100%] data-[vaul-custom-container=true]:[--vaul-overdrag:auto]",
						direction === "left" &&
							"inset-y-0 left-0 rounded-r-2xl border-r pt-[env(safe-area-inset-top,0px)] [--vaul-bottom:env(safe-area-inset-bottom,0px)] [--vaul-overdrag:0_100%_0_-100vw] data-[vaul-custom-container=true]:[--vaul-overdrag:auto]",
					],
					inset && [
						"rounded-2xl border [--initial-transform:calc(100%+--spacing(4))] not-dark:border-b-[color-mix(in_oklab,var(--border),black_6%)] after:hidden! dark:border-t-[color-mix(in_oklab,var(--border),white_8%)]",
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
					"bg-muted/50 relative -mb-(--vaul-bottom) rounded-b-[inherit] border-t pb-[calc(--spacing(4)+var(--vaul-bottom))] after:absolute after:[inset:var(--vaul-overdrag,auto)] after:z-1 after:bg-inherit",
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
