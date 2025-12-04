"use client"

import * as React from "react"
import { ContextMenu as BaseContextMenu } from "@base-ui-components/react/context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Root>) {
	return <BaseContextMenu.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Trigger>) {
	return <BaseContextMenu.Trigger data-slot="context-menu-trigger" {...props} />
}

function ContextMenuGroup({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Group>) {
	return <BaseContextMenu.Group data-slot="context-menu-group" {...props} />
}

function ContextMenuPortal({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Portal>) {
	return <BaseContextMenu.Portal data-slot="context-menu-portal" {...props} />
}

function ContextMenuPositioner({
	...props
}: React.ComponentProps<typeof BaseContextMenu.Positioner>) {
	return (
		<BaseContextMenu.Positioner
			data-slot="context-menu-positioner"
			{...props}
		/>
	)
}

function ContextMenuRadioGroup({
	...props
}: React.ComponentProps<typeof BaseContextMenu.RadioGroup>) {
	return (
		<BaseContextMenu.RadioGroup
			data-slot="context-menu-radio-group"
			{...props}
		/>
	)
}

function ContextMenuContent({
	className,
	sideOffset = 4,
	align = "start",
	...props
}: React.ComponentProps<typeof BaseContextMenu.Popup> & {
	align?: BaseContextMenu.Positioner.Props["align"]
	sideOffset?: BaseContextMenu.Positioner.Props["sideOffset"]
}) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				className="max-h-(--available-height)"
				align={align}
				sideOffset={sideOffset}
			>
				<BaseContextMenu.Popup
					data-slot="context-menu-content"
					className={cn(
						"bg-popover data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--transform-origin) overflow-hidden rounded-md border p-1 shadow-md outline-none",
						className
					)}
					{...props}
				/>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}

function ContextMenuItem({
	className,
	inset,
	variant = "default",
	...props
}: React.ComponentProps<typeof BaseContextMenu.Item> & {
	inset?: boolean
	variant?: "default" | "destructive"
}) {
	return (
		<BaseContextMenu.Item
			data-slot="context-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:text-destructive! focus:data-[variant=destructive]:*:[svg]:text-destructive-foreground! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden transition-all select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-all [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	)
}

function ContextMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof BaseContextMenu.CheckboxItem>) {
	return (
		<BaseContextMenu.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseContextMenu.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</BaseContextMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseContextMenu.CheckboxItem>
	)
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
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseContextMenu.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</BaseContextMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseContextMenu.RadioItem>
	)
}

function ContextMenuLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseContextMenu.GroupLabel> & {
	inset?: boolean
}) {
	return (
		<BaseContextMenu.GroupLabel
			data-slot="context-menu-label"
			data-inset={inset}
			className={cn(
				"px-2 py-1.5 text-xs font-medium data-[inset]:pl-8",
				className
			)}
			{...props}
		/>
	)
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
	)
}

function ContextMenuShortcut({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cn(
				"text-muted-foreground ml-auto text-xs tracking-widest",
				className
			)}
			{...props}
		/>
	)
}

function ContextMenuSub({
	...props
}: React.ComponentProps<typeof BaseContextMenu.SubmenuRoot>) {
	return <BaseContextMenu.SubmenuRoot data-slot="context-menu-sub" {...props} />
}

function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseContextMenu.SubmenuTrigger> & {
	inset?: boolean
}) {
	return (
		<BaseContextMenu.SubmenuTrigger
			delay={0}
			closeDelay={0}
			data-slot="context-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</BaseContextMenu.SubmenuTrigger>
	)
}

function ContextMenuSubContent({
	className,
	sideOffset = 0,
	align = "start",
	...props
}: React.ComponentProps<typeof BaseContextMenu.Popup> & {
	align?: BaseContextMenu.Positioner.Props["align"]
	sideOffset?: BaseContextMenu.Positioner.Props["sideOffset"]
}) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				className="max-h-[var(--available-height)]"
				sideOffset={sideOffset}
				align={align}
			>
				<BaseContextMenu.Popup
					data-slot="context-menu-sub-content"
					className={cn(
						"bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				/>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}

export {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuShortcut,
	ContextMenuTrigger,
	ContextMenuSeparator,
	ContextMenuGroup,
	ContextMenuLabel,
	ContextMenuCheckboxItem,
	ContextMenuRadioGroup,
	ContextMenuPortal,
	ContextMenuPositioner,
	ContextMenuRadioItem,
	ContextMenuSub,
	ContextMenuSubTrigger,
	ContextMenuSubContent,
}
