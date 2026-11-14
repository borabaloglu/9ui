import type * as React from "react";
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function ContextMenu({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Root>) {
	return <BaseContextMenu.Root {...props} />;
}

function ContextMenuTrigger({
	className,
	...props
}: React.ComponentProps<typeof BaseContextMenu.Trigger>) {
	return (
		<BaseContextMenu.Trigger
			data-slot="context-menu-trigger"
			className={cn("select-none", className)}
			{...props}
		/>
	);
}

function ContextMenuPopup({
	className,
	align,
	alignOffset,
	side,
	sideOffset,
	anchor,
	...props
}: React.ComponentProps<typeof BaseContextMenu.Popup> &
	Pick<
		BaseContextMenu.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	>) {
	return (
		<BaseContextMenu.Portal data-slot="context-menu-portal">
			<BaseContextMenu.Positioner
				data-slot="context-menu-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseContextMenu.Popup
					data-slot="context-menu-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border p-1 shadow-md transition-[scale,opacity] duration-150 outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:transition-none data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				/>
			</BaseContextMenu.Positioner>
		</BaseContextMenu.Portal>
	);
}

function ContextMenuGroup({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Group>) {
	return <BaseContextMenu.Group data-slot="context-menu-group" {...props} />;
}

function ContextMenuGroupLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseContextMenu.GroupLabel> & {
	inset?: boolean;
}) {
	return (
		<BaseContextMenu.GroupLabel
			data-slot="context-menu-group-label"
			data-inset={inset ? "" : undefined}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuItem({
	className,
	inset,
	variant = "default",
	...props
}: React.ComponentProps<typeof BaseContextMenu.Item> & {
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<BaseContextMenu.Item
			data-slot="context-menu-item"
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

function ContextMenuLinkItem({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseContextMenu.LinkItem> & {
	inset?: boolean;
}) {
	return (
		<BaseContextMenu.LinkItem
			data-slot="context-menu-link-item"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseContextMenu.CheckboxItem>) {
	return (
		<BaseContextMenu.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseContextMenu.CheckboxItemIndicator data-slot="context-menu-checkbox-item-indicator">
					<CheckIcon />
				</BaseContextMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseContextMenu.CheckboxItem>
	);
}

function ContextMenuRadioGroup({
	...props
}: React.ComponentProps<typeof BaseContextMenu.RadioGroup>) {
	return (
		<BaseContextMenu.RadioGroup
			data-slot="context-menu-radio-group"
			{...props}
		/>
	);
}

function ContextMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseContextMenu.RadioItem>) {
	return (
		<BaseContextMenu.RadioItem
			data-slot="context-menu-radio-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-8 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
				<BaseContextMenu.RadioItemIndicator data-slot="context-menu-radio-item-indicator">
					<CheckIcon />
				</BaseContextMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseContextMenu.RadioItem>
	);
}

function ContextMenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseContextMenu.Separator>) {
	return (
		<BaseContextMenu.Separator
			data-slot="context-menu-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ContextMenuShortcut({
	className,
	...props
}: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="context-menu-shortcut"
			className={cn(
				"text-muted-foreground ml-auto pl-4 font-sans text-xs tracking-widest",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuSub({
	...props
}: React.ComponentProps<typeof BaseContextMenu.SubmenuRoot>) {
	return <BaseContextMenu.SubmenuRoot {...props} />;
}

function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseContextMenu.SubmenuTrigger> & {
	inset?: boolean;
}) {
	return (
		<BaseContextMenu.SubmenuTrigger
			data-slot="context-menu-sub-trigger"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="-mr-0.5 ml-auto" />
		</BaseContextMenu.SubmenuTrigger>
	);
}

function ContextMenuSubPopup({
	className,
	align = "start",
	alignOffset = -5,
	side = "inline-end",
	sideOffset = 0,
	...props
}: React.ComponentProps<typeof ContextMenuPopup>) {
	return (
		<ContextMenuPopup
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
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuLinkItem,
	ContextMenuPopup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubPopup,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
};
