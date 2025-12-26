"use client"

import * as React from "react"
import { Menu as BaseMenu } from "@base-ui/react/menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
	...props
}: React.ComponentProps<typeof BaseMenu.Root>) {
	return <BaseMenu.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
	...props
}: React.ComponentProps<typeof BaseMenu.Portal>) {
	return <BaseMenu.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({
	...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
	return <BaseMenu.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuPositioner({
	...props
}: React.ComponentProps<typeof BaseMenu.Positioner>) {
	return <BaseMenu.Positioner data-slot="dropdown-menu-positioner" {...props} />
}

function DropdownMenuContent({
	className,
	sideOffset = 4,
	align = "center",
	side = "bottom",
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> & {
	align?: BaseMenu.Positioner.Props["align"]
	sideOffset?: BaseMenu.Positioner.Props["sideOffset"]
	side?: BaseMenu.Positioner.Props["side"]
}) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPositioner
				className="max-h-(--available-height)"
				sideOffset={sideOffset}
				side={side}
				align={align}
			>
				<BaseMenu.Popup
					data-slot="dropdown-menu-content"
					className={cn(
						"bg-popover data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				/>
			</DropdownMenuPositioner>
		</DropdownMenuPortal>
	)
}

function DropdownMenuGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.Group>) {
	return <BaseMenu.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuItem({
	className,
	inset,
	variant = "default",
	...props
}: React.ComponentProps<typeof BaseMenu.Item> & {
	inset?: boolean
	variant?: "default" | "destructive"
}) {
	return (
		<BaseMenu.Item
			data-slot="dropdown-menu-item"
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

function DropdownMenuShortcut({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cn(
				"text-muted-foreground ml-auto text-xs tracking-widest",
				className
			)}
			{...props}
		/>
	)
}

function DropdownMenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
	return (
		<BaseMenu.Separator
			data-slot="dropdown-menu-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	)
}

function DropdownMenuLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel> & {
	inset?: boolean
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cn(
				"px-2 py-1.5 text-xs font-medium data-inset:pl-8",
				className
			)}
			{...props}
		/>
	)
}

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseMenu.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	)
}

function DropdownMenuRadioGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.RadioGroup>) {
	return (
		<BaseMenu.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
	)
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
	return (
		<BaseMenu.RadioItem
			data-slot="dropdown-menu-radio-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseMenu.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	)
}

function DropdownMenuSub({
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
	return <BaseMenu.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger> & {
	inset?: boolean
}) {
	return (
		<BaseMenu.SubmenuTrigger
			closeDelay={0}
			delay={0}
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</BaseMenu.SubmenuTrigger>
	)
}

function DropdownMenuSubContent({
	className,
	sideOffset = 0,
	align = "start",
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> & {
	align?: BaseMenu.Positioner.Props["align"]
	sideOffset?: BaseMenu.Positioner.Props["sideOffset"]
}) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPositioner
				className="max-h-(--available-height)"
				sideOffset={sideOffset}
				align={align}
			>
				<BaseMenu.Popup
					data-slot="dropdown-menu-content"
					className={cn(
						"bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				/>
			</DropdownMenuPositioner>
		</DropdownMenuPortal>
	)
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
}
