import type * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Menu({ ...props }: React.ComponentProps<typeof BaseMenu.Root>) {
	return <BaseMenu.Root {...props} />;
}

function MenuTrigger({
	...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
	return <BaseMenu.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuPopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	anchor,
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> &
	Pick<
		BaseMenu.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	>) {
	return (
		<BaseMenu.Portal data-slot="menu-portal">
			<BaseMenu.Positioner
				data-slot="menu-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseMenu.Popup
					data-slot="menu-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border p-1 shadow-md transition-[scale,opacity] duration-150 outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:transition-none data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</BaseMenu.Portal>
	);
}

function MenuGroup({ ...props }: React.ComponentProps<typeof BaseMenu.Group>) {
	return <BaseMenu.Group data-slot="menu-group" {...props} />;
}

function MenuGroupLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="menu-group-label"
			data-inset={inset ? "" : undefined}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function MenuItem({
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
			data-slot="menu-item"
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

function MenuLinkItem({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.LinkItem> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.LinkItem
			data-slot="menu-link-item"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenuCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="menu-checkbox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseMenu.CheckboxItemIndicator data-slot="menu-checkbox-item-indicator">
					<CheckIcon />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	);
}

function MenuRadioGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.RadioGroup>) {
	return <BaseMenu.RadioGroup data-slot="menu-radio-group" {...props} />;
}

function MenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
	return (
		<BaseMenu.RadioItem
			data-slot="menu-radio-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseMenu.RadioItemIndicator data-slot="menu-radio-item-indicator">
					<CheckIcon />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	);
}

function MenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
	return (
		<BaseMenu.Separator
			data-slot="menu-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="menu-shortcut"
			className={cn(
				"text-muted-foreground ml-auto pl-4 font-sans text-xs tracking-widest",
				className,
			)}
			{...props}
		/>
	);
}

function MenuSub({
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
	return <BaseMenu.SubmenuRoot {...props} />;
}

function MenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger> & {
	inset?: boolean;
}) {
	return (
		<BaseMenu.SubmenuTrigger
			data-slot="menu-sub-trigger"
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

function MenuSubPopup({
	className,
	align = "start",
	alignOffset = -5,
	side = "inline-end",
	sideOffset = 0,
	...props
}: React.ComponentProps<typeof MenuPopup>) {
	return (
		<MenuPopup
			className={cn(
				"duration-100 data-ending-style:scale-100 data-starting-style:scale-100",
				className,
			)}
			align={align}
			alignOffset={alignOffset}
			side={side}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export {
	Menu,
	MenuCheckboxItem,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuLinkItem,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuShortcut,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
};
