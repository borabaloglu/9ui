"use client";

import * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarContext =
	React.createContext<BaseMenubar.Props["orientation"]>("horizontal");

function Menubar({
	className,
	orientation = "horizontal",
	...props
}: Omit<BaseMenubar.Props, "className"> & {
	className?: string;
}) {
	return (
		<MenubarContext value={orientation}>
			<BaseMenubar
				data-slot="menubar"
				orientation={orientation}
				className={cn(
					"bg-card text-card-foreground relative flex w-fit items-center gap-0.5 rounded-xl border p-1 shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
					className,
				)}
				{...props}
			/>
		</MenubarContext>
	);
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof BaseMenu.Root>) {
	return <BaseMenu.Root {...props} />;
}

function MenubarTrigger({
	className,
	...props
}: Omit<React.ComponentProps<typeof BaseMenu.Trigger>, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.Trigger
			data-slot="menubar-trigger"
			className={cn(
				"text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 data-popup-open:bg-accent data-popup-open:text-accent-foreground dark:hover:bg-accent/50 dark:data-popup-open:bg-accent/50 relative inline-flex h-7 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-sm font-medium whitespace-nowrap outline-none select-none focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarPopup({
	className,
	align = "start",
	alignOffset = -5,
	side,
	sideOffset = 9,
	anchor,
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> &
	Pick<
		BaseMenu.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	>) {
	const orientation = React.useContext(MenubarContext);

	return (
		<BaseMenu.Portal data-slot="menubar-portal">
			<BaseMenu.Positioner
				data-slot="menubar-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side ?? (orientation === "vertical" ? "inline-end" : "bottom")}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseMenu.Popup
					data-slot="menubar-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint max-h-(--available-height) min-w-32 overflow-x-hidden overflow-y-auto rounded-lg border p-1 shadow-md transition-opacity duration-100 outline-none data-ending-style:opacity-0 data-instant:transition-none",
						className,
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</BaseMenu.Portal>
	);
}

function MenubarGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.Group>) {
	return <BaseMenu.Group data-slot="menubar-group" {...props} />;
}

function MenubarGroupLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="menubar-group-label"
			data-inset={inset ? "" : undefined}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarItem({
	className,
	inset,
	variant = "default",
	...props
}: React.ComponentProps<typeof BaseMenu.Item> & {
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<BaseMenu.Item
			data-slot="menubar-item"
			data-inset={inset ? "" : undefined}
			data-variant={variant}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarLinkItem({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.LinkItem> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.LinkItem
			data-slot="menubar-link-item"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseMenu.CheckboxItemIndicator data-slot="menubar-checkbox-item-indicator">
					<CheckIcon />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	);
}

function MenubarRadioGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.RadioGroup>) {
	return <BaseMenu.RadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
	return (
		<BaseMenu.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseMenu.RadioItemIndicator data-slot="menubar-radio-item-indicator">
					<CheckIcon />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	);
}

function MenubarSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
	return (
		<BaseMenu.Separator
			data-slot="menubar-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="menubar-shortcut"
			className={cn(
				"text-muted-foreground ml-auto pl-4 font-sans text-xs tracking-widest",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarSub({
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
	return <BaseMenu.SubmenuRoot {...props} />;
}

function MenubarSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.SubmenuTrigger
			data-slot="menubar-sub-trigger"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="-mr-0.5 ml-auto" />
		</BaseMenu.SubmenuTrigger>
	);
}

function MenubarSubPopup({
	className,
	align = "start",
	alignOffset = -5,
	side = "inline-end",
	sideOffset = 0,
	...props
}: React.ComponentProps<typeof MenubarPopup>) {
	return (
		<MenubarPopup
			className={cn("data-starting-style:opacity-0", className)}
			align={align}
			alignOffset={alignOffset}
			side={side}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export {
	Menubar,
	MenubarCheckboxItem,
	MenubarGroup,
	MenubarGroupLabel,
	MenubarItem,
	MenubarLinkItem,
	MenubarMenu,
	MenubarPopup,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubPopup,
	MenubarSubTrigger,
	MenubarTrigger,
};
