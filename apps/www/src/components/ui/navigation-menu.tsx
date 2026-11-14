import type * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

const itemClassName =
	"text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 data-active:bg-accent data-active:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground dark:hover:bg-accent/50 dark:data-active:bg-accent/50 dark:data-popup-open:bg-accent/50 outline-none focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const itemVariantClassNames = {
	trigger:
		"inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium whitespace-nowrap any-pointer-coarse:text-base transition-[color,background-color,box-shadow] duration-150 ease-out select-none in-data-[orientation=vertical]:w-full in-data-[orientation=vertical]:justify-between any-pointer-coarse:h-9",
	link: "flex h-full w-full items-center gap-2 rounded-sm p-2 text-start text-sm any-pointer-coarse:text-base",
};

function NavigationMenu({
	className,
	orientation = "horizontal",
	...props
}: Omit<React.ComponentProps<typeof BaseNavigationMenu.Root>, "className"> & {
	className?: string;
}) {
	return (
		<BaseNavigationMenu.Root
			data-slot="navigation-menu"
			data-orientation={orientation}
			orientation={orientation}
			className={className}
			{...props}
		/>
	);
}

function NavigationMenuList({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseNavigationMenu.List>, "className"> & {
	className?: string;
}) {
	return (
		<BaseNavigationMenu.List
			data-slot="navigation-menu-list"
			className={cn(
				"flex items-center gap-1 in-data-[orientation=vertical]:flex-col in-data-[orientation=vertical]:items-stretch",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuItem({
	...props
}: React.ComponentProps<typeof BaseNavigationMenu.Item>) {
	return (
		<BaseNavigationMenu.Item data-slot="navigation-menu-item" {...props} />
	);
}

function NavigationMenuTrigger({
	className,
	children,
	variant = "default",
	showIcon = true,
	...props
}: Omit<
	React.ComponentProps<typeof BaseNavigationMenu.Trigger>,
	"className"
> & {
	className?: string;
	variant?: "default" | "link";
	showIcon?: boolean;
}) {
	return (
		<BaseNavigationMenu.Trigger
			data-slot="navigation-menu-trigger"
			data-variant={variant}
			className={cn(
				itemClassName,
				variant === "link"
					? itemVariantClassNames.link
					: itemVariantClassNames.trigger,
				className,
			)}
			{...props}
		>
			{children}
			{showIcon && (
				<BaseNavigationMenu.Icon
					data-slot="navigation-menu-icon"
					className={cn(
						"ease-out-quint flex opacity-80 transition-[rotate] duration-200 in-data-[orientation=vertical]:-rotate-90 in-data-[orientation=horizontal]:data-popup-open:rotate-180 motion-reduce:transition-none rtl:in-data-[orientation=vertical]:rotate-90",
						variant === "link" && "ms-auto",
					)}
				>
					<ChevronDownIcon aria-hidden="true" />
				</BaseNavigationMenu.Icon>
			)}
		</BaseNavigationMenu.Trigger>
	);
}

function NavigationMenuContent({
	className,
	children,
	...props
}: Omit<
	React.ComponentProps<typeof BaseNavigationMenu.Content>,
	"className"
> & {
	className?: string;
}) {
	return (
		<BaseNavigationMenu.Content
			data-slot="navigation-menu-content"
			className={cn(
				"ease-out-quint flex h-full max-h-(--available-height) w-max max-w-(--available-width) flex-col transition-[translate,opacity] duration-200 [--navigation-menu-padding:--spacing(1)] [--navigation-menu-slide:--spacing(6)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:data-[activation-direction=down]:-translate-y-(--navigation-menu-slide) data-starting-style:data-[activation-direction=down]:translate-y-(--navigation-menu-slide) data-ending-style:data-[activation-direction=left]:translate-x-(--navigation-menu-slide) data-starting-style:data-[activation-direction=left]:-translate-x-(--navigation-menu-slide) data-ending-style:data-[activation-direction=right]:-translate-x-(--navigation-menu-slide) data-starting-style:data-[activation-direction=right]:translate-x-(--navigation-menu-slide) data-ending-style:data-[activation-direction=up]:translate-y-(--navigation-menu-slide) data-starting-style:data-[activation-direction=up]:-translate-y-(--navigation-menu-slide) motion-reduce:[--navigation-menu-slide:0px]",
				className,
			)}
			{...props}
		>
			<ScrollArea className="min-h-0 flex-1">
				<div className="p-(--navigation-menu-padding)">{children}</div>
			</ScrollArea>
		</BaseNavigationMenu.Content>
	);
}

function NavigationMenuLink({
	className,
	variant = "default",
	...props
}: Omit<React.ComponentProps<typeof BaseNavigationMenu.Link>, "className"> & {
	className?: string;
	variant?: "default" | "trigger";
}) {
	return (
		<BaseNavigationMenu.Link
			data-slot="navigation-menu-link"
			data-variant={variant}
			className={cn(
				itemClassName,
				variant === "trigger"
					? itemVariantClassNames.trigger
					: itemVariantClassNames.link,
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuPopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 8,
	anchor,
	collisionAvoidance = side === "bottom" || side === "top"
		? { side: "none" }
		: undefined,
	...props
}: Omit<React.ComponentProps<typeof BaseNavigationMenu.Popup>, "className"> &
	Pick<
		BaseNavigationMenu.Positioner.Props,
		| "align"
		| "alignOffset"
		| "side"
		| "sideOffset"
		| "anchor"
		| "collisionAvoidance"
	> & {
		className?: string;
	}) {
	return (
		<BaseNavigationMenu.Portal data-slot="navigation-menu-portal">
			<BaseNavigationMenu.Positioner
				data-slot="navigation-menu-positioner"
				className="ease-out-quint z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) before:absolute data-instant:transition-none data-[side=bottom]:before:inset-x-0 data-[side=bottom]:before:bottom-full data-[side=bottom]:before:h-(--navigation-menu-offset) data-[side=inline-end]:before:inset-y-0 data-[side=inline-end]:before:end-full data-[side=inline-end]:before:w-(--navigation-menu-offset) data-[side=inline-start]:before:inset-y-0 data-[side=inline-start]:before:start-full data-[side=inline-start]:before:w-(--navigation-menu-offset) data-[side=left]:before:inset-y-0 data-[side=left]:before:left-full data-[side=left]:before:w-(--navigation-menu-offset) data-[side=right]:before:inset-y-0 data-[side=right]:before:right-full data-[side=right]:before:w-(--navigation-menu-offset) data-[side=top]:before:inset-x-0 data-[side=top]:before:top-full data-[side=top]:before:h-(--navigation-menu-offset) motion-safe:transition-[top,left,right,bottom] motion-safe:duration-200"
				style={
					{
						"--navigation-menu-offset": `${typeof sideOffset === "number" ? sideOffset : 0}px`,
					} as React.CSSProperties
				}
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
				collisionAvoidance={collisionAvoidance}
			>
				<BaseNavigationMenu.Popup
					data-slot="navigation-menu-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg border shadow-md transition-[width,height,scale,opacity] duration-200 outline-none data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:transition-[scale,opacity] data-ending-style:duration-150 data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				>
					<NavigationMenuViewport />
				</BaseNavigationMenu.Popup>
			</BaseNavigationMenu.Positioner>
		</BaseNavigationMenu.Portal>
	);
}

function NavigationMenuViewport({
	className,
	...props
}: Omit<
	React.ComponentProps<typeof BaseNavigationMenu.Viewport>,
	"className"
> & {
	className?: string;
}) {
	return (
		<BaseNavigationMenu.Viewport
			data-slot="navigation-menu-viewport"
			className={cn(
				"relative size-full overflow-hidden rounded-[inherit]",
				className,
			)}
			{...props}
		/>
	);
}

export {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuTrigger,
	NavigationMenuViewport,
};
