"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

function Tabs({
	className,
	...props
}: Omit<BaseTabs.Root.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseTabs.Root
			data-slot="tabs"
			className={cn(
				"group/tabs flex flex-col gap-2 data-[orientation=vertical]:flex-row",
				className,
			)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	children,
	variant = "default",
	size = "default",
	...props
}: Omit<BaseTabs.List.Props, "className"> & {
	className?: string;
	variant?: "default" | "line";
	size?: "sm" | "default" | "lg";
}) {
	return (
		<BaseTabs.List
			data-slot="tabs-list"
			data-variant={variant}
			data-size={size}
			className={cn(
				"group/tabs-list text-muted-foreground relative z-0 inline-flex w-fit shrink-0 [scrollbar-width:none] items-center justify-center gap-0.5 data-[orientation=horizontal]:h-(--tabs-height) data-[orientation=horizontal]:max-w-full data-[orientation=horizontal]:justify-start data-[orientation=horizontal]:overflow-x-auto data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[orientation=vertical]:self-start",
				"[mask-image:linear-gradient(to_right,transparent,black_--spacing(6)),linear-gradient(to_left,transparent,black_--spacing(6))] [mask-composite:intersect] [mask-size:calc(100%+--spacing(6))_100%] [mask-position:calc(--spacing(6)*-1)_0,0_0] [mask-repeat:no-repeat] [animation-fill-mode:both] [animation-name:tabs-fade-start,tabs-fade-end] [animation-range:0_--spacing(6),calc(100%-(--spacing(6)))_100%] [animation-timeline:scroll(self_inline)] [animation-timing-function:linear]",
				size === "sm" &&
					"[--tabs-height:--spacing(7)] any-pointer-coarse:[--tabs-height:--spacing(8)]",
				size === "default" &&
					"[--tabs-height:--spacing(8)] any-pointer-coarse:[--tabs-height:--spacing(9)]",
				size === "lg" &&
					"[--tabs-height:--spacing(9)] any-pointer-coarse:[--tabs-height:--spacing(10)]",
				variant === "default"
					? "bg-muted rounded-lg p-0.75"
					: "data-[orientation=horizontal]:pb-1 data-[orientation=vertical]:ps-1",
				className,
			)}
			{...props}
		>
			{children}
			<BaseTabs.Indicator
				data-slot="tabs-indicator"
				renderBeforeHydration
				className={cn(
					"ease-out-quint absolute top-0 left-0 transition-[translate,width,height] duration-200 motion-reduce:transition-none",
					variant === "default"
						? "bg-input dark:bg-accent -z-1 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) translate-y-(--active-tab-top) rounded-md shadow-xs dark:shadow-none"
						: "bg-foreground rounded-full data-[orientation=horizontal]:top-auto data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-(--active-tab-width) data-[orientation=horizontal]:translate-x-(--active-tab-left) data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:translate-y-(--active-tab-top)",
				)}
			/>
		</BaseTabs.List>
	);
}

function TabsTab({
	className,
	...props
}: Omit<BaseTabs.Tab.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseTabs.Tab
			data-slot="tabs-tab"
			className={cn(
				"text-muted-foreground hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 data-active:text-foreground [&:active]:text-foreground/70 relative z-1 inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 text-sm font-medium whitespace-nowrap transition-[color,border-color,box-shadow] duration-150 ease-out outline-none select-none [-webkit-tap-highlight-color:transparent] group-data-[orientation=horizontal]/tabs:h-full group-data-[orientation=horizontal]/tabs:grow group-data-[orientation=vertical]/tabs:h-[calc(var(--tabs-height)-(--spacing(1)))] group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-3 group-data-[variant=line]/tabs-list:focus-visible:ring-inset data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				"group-data-[size=lg]/tabs-list:px-2.5 group-data-[size=sm]/tabs-list:px-1.5 group-data-[size=sm]/tabs-list:text-[0.8rem] group-data-[size=sm]/tabs-list:[&_svg:not([class*='size-'])]:size-3.5",
				"any-pointer-coarse:after:absolute group-data-[orientation=horizontal]/tabs:any-pointer-coarse:after:-inset-x-px group-data-[orientation=horizontal]/tabs:any-pointer-coarse:after:-inset-y-0.75 group-data-[orientation=vertical]/tabs:any-pointer-coarse:after:-inset-x-0.75 group-data-[orientation=vertical]/tabs:any-pointer-coarse:after:-inset-y-px",
				className,
			)}
			{...props}
		/>
	);
}

function TabsPanel({
	className,
	...props
}: Omit<BaseTabs.Panel.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseTabs.Panel
			data-slot="tabs-panel"
			className={cn(
				"focus-visible:ring-ring/50 min-w-0 flex-1 rounded-lg text-sm outline-none focus-visible:ring-3",
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsPanel, TabsTab };
