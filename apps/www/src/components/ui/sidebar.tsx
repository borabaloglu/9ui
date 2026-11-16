"use client";

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetDescription,
	SheetHeader,
	SheetPopup,
	SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

import { useIsMobile } from "@/hooks/use-mobile";

import { cn } from "@/lib/utils";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextValue = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean | ((open: boolean) => boolean)) => void;
	openMobile: boolean;
	setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

const SidebarSideContext = React.createContext<"left" | "right">("left");

function useSidebar() {
	const context = React.useContext(SidebarContext);

	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}

	return context;
}

function SidebarProvider({
	defaultOpen = true,
	open: openProp,
	onOpenChange,
	className,
	style,
	...props
}: React.ComponentProps<"div"> & {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);
	const [openState, setOpenState] = React.useState(defaultOpen);
	const [instant, setInstant] = React.useState(false);
	const open = openProp ?? openState;

	const setOpen = React.useCallback(
		(value: boolean | ((open: boolean) => boolean)) => {
			const next = typeof value === "function" ? value(open) : value;

			setInstant(false);

			if (openProp === undefined) {
				setOpenState(next);
			}

			onOpenChange?.(next);

			document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; SameSite=Lax`;
		},
		[onOpenChange, open, openProp],
	);

	const toggleSidebar = React.useCallback(() => {
		if (isMobile) {
			setOpenMobile((current) => !current);
		} else {
			setOpen((current) => !current);
		}
	}, [isMobile, setOpen]);

	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.repeat ||
				event.shiftKey ||
				event.altKey ||
				!(event.metaKey || event.ctrlKey) ||
				event.key.toLowerCase() !== SIDEBAR_KEYBOARD_SHORTCUT ||
				(event.target instanceof HTMLElement && event.target.isContentEditable)
			) {
				return;
			}

			event.preventDefault();
			toggleSidebar();
			setInstant(!isMobile);
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isMobile, toggleSidebar]);

	const state = open ? "expanded" : "collapsed";

	const value = React.useMemo<SidebarContextValue>(
		() => ({
			state,
			open,
			setOpen,
			openMobile,
			setOpenMobile,
			isMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, openMobile, isMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={value}>
			<div
				data-slot="sidebar-wrapper"
				data-instant={instant ? "" : undefined}
				style={
					{
						"--sidebar-width": SIDEBAR_WIDTH,
						"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
						...style,
					} as React.CSSProperties
				}
				className={cn(
					"group/sidebar-wrapper has-[[data-slot=sidebar][data-variant=inset]]:bg-card flex min-h-svh w-full",
					className,
				)}
				{...props}
			/>
		</SidebarContext.Provider>
	);
}

function Sidebar({
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
	style,
	children,
	...props
}: React.ComponentProps<"div"> & {
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "offcanvas" | "icon" | "none";
}) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

	if (collapsible === "none") {
		return (
			<div
				data-slot="sidebar"
				className={cn(
					"bg-card text-card-foreground flex h-full w-(--sidebar-width) flex-col",
					className,
				)}
				style={style}
				{...props}
			>
				{children}
			</div>
		);
	}

	if (isMobile) {
		return (
			<Sheet open={openMobile} onOpenChange={setOpenMobile}>
				<SheetPopup
					data-slot="sidebar"
					data-mobile=""
					data-variant={variant}
					side={side}
					showCloseButton={false}
					style={
						{
							"--sidebar-width": SIDEBAR_WIDTH_MOBILE,
							...style,
						} as React.CSSProperties
					}
					className={cn(
						"bg-card text-card-foreground w-(--sidebar-width) gap-0",
						className,
					)}
					{...props}
				>
					<SheetHeader className="sr-only">
						<SheetTitle>Sidebar</SheetTitle>
						<SheetDescription>Displays the mobile sidebar.</SheetDescription>
					</SheetHeader>
					{children}
				</SheetPopup>
			</Sheet>
		);
	}

	return (
		<div
			data-slot="sidebar"
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : undefined}
			data-variant={variant}
			data-side={side}
			className="group/sidebar peer/sidebar text-card-foreground hidden md:block rtl:data-[side=left]:order-last rtl:data-[side=right]:order-first"
		>
			<div
				data-slot="sidebar-gap"
				className={cn(
					"ease-out-quint w-(--sidebar-width) transition-[width] duration-200 group-data-instant/sidebar-wrapper:transition-none group-data-[collapsible=offcanvas]/sidebar:w-0 motion-reduce:transition-none",
					variant === "sidebar"
						? "group-data-[collapsible=icon]/sidebar:w-(--sidebar-width-icon)"
						: "group-data-[collapsible=icon]/sidebar:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]",
				)}
			/>
			<div
				data-slot="sidebar-container"
				data-side={side}
				className={cn(
					"ease-out-quint fixed inset-y-0 z-10 flex w-(--sidebar-width) transition-[translate,width] duration-200 group-data-instant/sidebar-wrapper:transition-none data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]/sidebar:-translate-x-full data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]/sidebar:translate-x-full motion-reduce:transition-none",
					variant === "sidebar"
						? "group-data-[collapsible=icon]/sidebar:w-(--sidebar-width-icon) data-[side=left]:border-r data-[side=right]:border-l"
						: "p-2 group-data-[collapsible=icon]/sidebar:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]",
					className,
				)}
				style={style}
				{...props}
			>
				<div
					data-slot="sidebar-inner"
					className="bg-card flex size-full flex-col transition-[visibility] duration-200 group-data-instant/sidebar-wrapper:transition-none group-data-[collapsible=offcanvas]/sidebar:invisible group-data-[variant=floating]/sidebar:rounded-xl group-data-[variant=floating]/sidebar:border group-data-[variant=floating]/sidebar:shadow-sm motion-reduce:transition-none"
				>
					<SidebarSideContext.Provider value={side}>
						{children}
					</SidebarSideContext.Provider>
				</div>
			</div>
		</div>
	);
}

function SidebarTrigger({
	onClick,
	children,
	...props
}: React.ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-slot="sidebar-trigger"
			variant="ghost"
			size="icon-sm"
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			{children ?? (
				<>
					<PanelLeftIcon className="rtl:rotate-180" />
					<span className="sr-only">Toggle sidebar</span>
				</>
			)}
		</Button>
	);
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
	const { toggleSidebar } = useSidebar();

	return (
		<button
			type="button"
			data-slot="sidebar-rail"
			aria-label="Toggle sidebar"
			title="Toggle sidebar"
			tabIndex={-1}
			onClick={toggleSidebar}
			className={cn(
				"hover:after:bg-border visible absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 cursor-pointer group-data-[collapsible=offcanvas]/sidebar:translate-x-0 group-data-[side=left]/sidebar:-right-4 group-data-[side=right]/sidebar:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:transition-colors after:duration-150 after:ease-out group-data-[collapsible=offcanvas]/sidebar:after:left-full sm:flex",
				"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
	return (
		<main
			data-slot="sidebar-inset"
			className={cn(
				"bg-background ease-out-quint relative flex w-full min-w-0 flex-1 flex-col transition-[margin] duration-200 group-data-instant/sidebar-wrapper:transition-none motion-reduce:transition-none md:group-has-[[data-slot=sidebar][data-variant=inset]]/sidebar-wrapper:m-2 md:group-has-[[data-slot=sidebar][data-variant=inset]]/sidebar-wrapper:rounded-xl md:group-has-[[data-slot=sidebar][data-variant=inset]]/sidebar-wrapper:border md:group-has-[[data-slot=sidebar][data-variant=inset]]/sidebar-wrapper:shadow-xs md:group-has-[[data-slot=sidebar][data-variant=inset][data-side=left]]/sidebar-wrapper:ml-0 md:group-has-[[data-slot=sidebar][data-variant=inset][data-side=left][data-state=collapsed]]/sidebar-wrapper:ml-2 md:group-has-[[data-slot=sidebar][data-variant=inset][data-side=right]]/sidebar-wrapper:mr-0 md:group-has-[[data-slot=sidebar][data-variant=inset][data-side=right][data-state=collapsed]]/sidebar-wrapper:mr-2",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-header"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-footer"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
}

function SidebarSeparator({
	className,
	...props
}: React.ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="sidebar-separator"
			className={cn("mx-2 w-auto", className)}
			{...props}
		/>
	);
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-content"
			className={cn(
				"flex min-h-0 flex-1 [scrollbar-width:none] flex-col overflow-x-hidden overflow-y-auto overscroll-contain group-data-[collapsible=icon]/sidebar:overflow-hidden [&::-webkit-scrollbar]:hidden",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-group"
			className={cn(
				"group/sidebar-group relative flex w-full min-w-0 flex-col p-2",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarGroupLabel({
	className,
	render,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: mergeProps<"div">(
			{
				"data-slot": "sidebar-group-label",
				"data-sidebar": "group-label",
				className: cn(
					"text-muted-foreground focus-visible:ring-ring/50 ease-out-quint flex h-8 shrink-0 items-center rounded-lg px-2 text-xs font-medium transition-[margin,opacity] duration-200 outline-none group-has-data-[slot=sidebar-group-action]/sidebar-group:pe-8 group-data-instant/sidebar-wrapper:transition-none group-data-[collapsible=icon]/sidebar:pointer-events-none group-data-[collapsible=icon]/sidebar:-mt-8 group-data-[collapsible=icon]/sidebar:opacity-0 focus-visible:ring-3 focus-visible:outline-hidden motion-reduce:transition-none [&>span]:truncate [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
					className,
				),
			} as React.ComponentProps<"div">,
			props,
		),
	});
}

function SidebarGroupAction({
	className,
	render,
	...props
}: useRender.ComponentProps<"button">) {
	return useRender({
		defaultTagName: "button",
		render,
		props: mergeProps<"button">(
			{
				"data-slot": "sidebar-group-action",
				"data-sidebar": "group-action",
				className: cn(
					"text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 dark:hover:bg-accent/50 active:bg-foreground/10 dark:active:bg-accent absolute end-3 top-3.5 flex size-5 cursor-pointer items-center justify-center rounded-md outline-none group-data-[collapsible=icon]/sidebar:hidden focus-visible:ring-3 focus-visible:outline-hidden any-pointer-coarse:after:absolute any-pointer-coarse:after:-inset-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
					className,
				),
			} as React.ComponentProps<"button">,
			props,
		),
	});
}

function SidebarGroupContent({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-group-content"
			className={cn("w-full text-sm", className)}
			{...props}
		/>
	);
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			data-slot="sidebar-menu"
			className={cn("flex w-full min-w-0 flex-col gap-0.5", className)}
			{...props}
		/>
	);
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="sidebar-menu-item"
			className={cn("group/menu-item relative", className)}
			{...props}
		/>
	);
}

const sidebarMenuButtonVariants = cva(
	"peer/menu-button hover:bg-accent/50 hover:text-accent-foreground focus-visible:ring-ring/50 active:bg-foreground/10 dark:active:bg-accent data-active:bg-accent data-active:text-accent-foreground data-active:active:bg-foreground/10 dark:data-active:active:bg-foreground/10 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-popup-open:active:bg-foreground/10 dark:data-popup-open:active:bg-foreground/10 ease-out-quint flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-lg px-2 text-start text-sm transition-[width,height,padding] duration-200 outline-none group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-has-data-[slot=sidebar-menu-badge]/menu-item:pe-8 group-data-instant/sidebar-wrapper:transition-none group-data-[collapsible=icon]/sidebar:size-8 group-data-[collapsible=icon]/sidebar:p-2 focus-visible:ring-3 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:font-medium motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:truncate",
	{
		variants: {
			variant: {
				default: "",
				outline:
					"bg-input inset-ring-border shadow-xs inset-ring-1 dark:shadow-none",
			},
			size: {
				sm: "h-7 text-xs any-pointer-coarse:h-8",
				default: "h-8 any-pointer-coarse:h-9",
				lg: "h-12 group-data-[collapsible=icon]/sidebar:p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function SidebarMenuButton({
	render,
	isActive = false,
	variant = "default",
	size = "default",
	tooltip,
	className,
	...props
}: useRender.ComponentProps<"button"> &
	VariantProps<typeof sidebarMenuButtonVariants> & {
		isActive?: boolean;
		tooltip?: string | React.ComponentProps<typeof TooltipPopup>;
	}) {
	const { isMobile, state } = useSidebar();
	const sidebarSide = React.useContext(SidebarSideContext);

	const button = useRender({
		defaultTagName: "button",
		render,
		props: mergeProps<"button">(
			{
				"data-slot": "sidebar-menu-button",
				"data-sidebar": "menu-button",
				"data-size": size,
				"data-active": isActive ? "" : undefined,
				className: cn(sidebarMenuButtonVariants({ variant, size }), className),
			} as React.ComponentProps<"button">,
			props,
		),
	});

	if (!tooltip) {
		return button;
	}

	const tooltipProps =
		typeof tooltip === "string" ? { children: tooltip } : tooltip;

	return (
		<Tooltip disabled={state !== "collapsed" || isMobile}>
			<TooltipTrigger render={button} />
			<TooltipPopup
				side={sidebarSide === "left" ? "right" : "left"}
				{...tooltipProps}
			/>
		</Tooltip>
	);
}

function SidebarMenuAction({
	className,
	render,
	showOnHover = false,
	...props
}: useRender.ComponentProps<"button"> & {
	showOnHover?: boolean;
}) {
	return useRender({
		defaultTagName: "button",
		render,
		props: mergeProps<"button">(
			{
				"data-slot": "sidebar-menu-action",
				"data-sidebar": "menu-action",
				className: cn(
					"text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 data-popup-open:bg-accent data-popup-open:text-accent-foreground dark:hover:bg-accent/50 dark:data-popup-open:bg-accent/50 active:bg-foreground/10 dark:active:bg-accent data-popup-open:active:bg-foreground/10 dark:data-popup-open:active:bg-accent absolute end-1.5 top-1.5 flex size-5 cursor-pointer items-center justify-center rounded-md outline-none group-data-[collapsible=icon]/sidebar:hidden peer-data-[size=lg]/menu-button:top-3.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-3 focus-visible:outline-hidden any-pointer-coarse:top-2 any-pointer-coarse:peer-data-[size=sm]/menu-button:top-1.5 any-pointer-coarse:after:absolute any-pointer-coarse:after:-inset-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
					showOnHover &&
						"opacity-0 group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-popup-open:opacity-100 any-pointer-coarse:opacity-100",
					className,
				),
			} as React.ComponentProps<"button">,
			props,
		),
	});
}

function SidebarMenuBadge({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-menu-badge"
			className={cn(
				"text-muted-foreground peer-hover/menu-button:text-accent-foreground peer-data-active/menu-button:text-accent-foreground pointer-events-none absolute end-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none group-data-[collapsible=icon]/sidebar:hidden peer-data-[size=lg]/menu-button:top-3.5 peer-data-[size=sm]/menu-button:top-1 any-pointer-coarse:top-2 any-pointer-coarse:peer-data-[size=sm]/menu-button:top-1.5",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarMenuSkeleton({
	className,
	showIcon = false,
	...props
}: React.ComponentProps<"div"> & {
	showIcon?: boolean;
}) {
	const id = React.useId();
	const width = React.useMemo(() => {
		let hash = 0;

		for (const character of id) {
			hash = (hash * 31 + character.charCodeAt(0)) % 997;
		}

		return `${50 + (hash % 40)}%`;
	}, [id]);

	return (
		<div
			data-slot="sidebar-menu-skeleton"
			className={cn(
				"flex h-8 items-center gap-2 rounded-lg px-2 any-pointer-coarse:h-9",
				className,
			)}
			{...props}
		>
			{showIcon && <Skeleton className="size-4" />}
			<Skeleton
				style={{ "--skeleton-width": width } as React.CSSProperties}
				className="h-4 max-w-(--skeleton-width) flex-1"
			/>
		</div>
	);
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			data-slot="sidebar-menu-sub"
			className={cn(
				"mx-3.5 flex min-w-0 flex-col gap-0.5 border-s px-2.5 py-0.5 group-data-[collapsible=icon]/sidebar:hidden",
				className,
			)}
			{...props}
		/>
	);
}

function SidebarMenuSubItem({
	className,
	...props
}: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			className={cn("relative", className)}
			{...props}
		/>
	);
}

function SidebarMenuSubButton({
	render,
	size = "default",
	isActive = false,
	className,
	...props
}: useRender.ComponentProps<"a"> & {
	size?: "sm" | "default";
	isActive?: boolean;
}) {
	return useRender({
		defaultTagName: "a",
		render,
		props: mergeProps<"a">(
			{
				"data-slot": "sidebar-menu-sub-button",
				"data-sidebar": "menu-sub-button",
				"data-size": size,
				"data-active": isActive ? "" : undefined,
				className: cn(
					"hover:bg-accent/50 hover:text-accent-foreground focus-visible:ring-ring/50 active:bg-foreground/10 dark:active:bg-accent data-active:bg-accent data-active:text-accent-foreground data-active:active:bg-foreground/10 dark:data-active:active:bg-foreground/10 flex h-7 min-w-0 cursor-pointer items-center gap-2 overflow-hidden rounded-md px-2 text-sm outline-none group-data-[collapsible=icon]/sidebar:hidden focus-visible:ring-3 focus-visible:outline-hidden aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:font-medium data-[size=sm]:text-xs any-pointer-coarse:h-8 [&>span]:truncate [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
					className,
				),
			} as React.ComponentProps<"a">,
			props,
		),
	});
}

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
};
