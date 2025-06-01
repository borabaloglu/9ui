"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({ ...props }: React.ComponentProps<typeof Menu.Root>) {
	return <Menu.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
	...props
}: React.ComponentProps<typeof Menu.Portal>) {
	return <Menu.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({
	...props
}: React.ComponentProps<typeof Menu.Trigger>) {
	return <Menu.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuPositioner({
	...props
}: React.ComponentProps<typeof Menu.Positioner>) {
	return <Menu.Positioner data-slot="dropdown-menu-positioner" {...props} />
}

interface DropdownMenuContentProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Popup> {
	align?: Menu.Positioner.Props["align"]
	sideOffset?: Menu.Positioner.Props["sideOffset"]
}

function DropdownMenuContent({
	className,
	sideOffset = 4,
	align = "center",
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPositioner
				className="max-h-(--available-height)"
				sideOffset={sideOffset}
				align={align}
			>
				<Menu.Popup
					data-slot="dropdown-menu-content"
					className={cn(
						"bg-popover text-popover-foreground z-50 min-w-[8rem] origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md transition-[transform,scale,opacity] outline-none data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
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
}: React.ComponentProps<typeof Menu.Group>) {
	return <Menu.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuItem({
	className,
	inset,
	variant = "default",
	...props
}: React.ComponentProps<typeof Menu.Item> & {
	inset?: boolean
	variant?: "default" | "destructive"
}) {
	return (
		<Menu.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive focus:data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden transition-all select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-all [&_svg:not([class*='size-'])]:size-4",
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
}: React.ComponentProps<typeof Menu.Separator>) {
	return (
		<Menu.Separator
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
}: React.ComponentProps<typeof Menu.GroupLabel> & {
	inset?: boolean
}) {
	return (
		<Menu.GroupLabel
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-[inset]:pl-8",
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
}: React.ComponentProps<typeof Menu.CheckboxItem>) {
	return (
		<Menu.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<Menu.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</Menu.CheckboxItemIndicator>
			</span>
			{children}
		</Menu.CheckboxItem>
	)
}

function DropdownMenuRadioGroup({
	...props
}: React.ComponentProps<typeof Menu.RadioGroup>) {
	return <Menu.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof Menu.RadioItem>) {
	return (
		<Menu.RadioItem
			data-slot="dropdown-menu-radio-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<Menu.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</Menu.RadioItemIndicator>
			</span>
			{children}
		</Menu.RadioItem>
	)
}

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof Menu.SubmenuTrigger> & {
	inset?: boolean
}) {
	return (
		<Menu.SubmenuTrigger
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</Menu.SubmenuTrigger>
	)
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuPositioner,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuRadioGroup,
	DropdownMenuSubTrigger,
}
