"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Dropdown = Menu.Root
Dropdown.displayName = "Dropdown"

const DropdownGroup = Menu.Group
DropdownGroup.displayName = "DropdownGroup"

const DropdownRadioGroup = Menu.RadioGroup
DropdownRadioGroup.displayName = "DropdownRadioGroup"

const DropdownTrigger = Menu.Trigger
DropdownTrigger.displayName = "DropdownTrigger"

interface DropdownContentProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Popup> {
	align?: Menu.Positioner.Props["align"]
	sideOffset?: Menu.Positioner.Props["sideOffset"]
}

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>(
	({ className, align = "center", sideOffset = 4, ...props }, ref) => (
		<Menu.Portal>
			<Menu.Positioner sideOffset={sideOffset} align={align}>
				<Menu.Popup
					ref={ref}
					className={cn(
						"min-w-48 origin-[var(--transform-origin)] rounded-md border bg-popover p-1 text-popover-foreground shadow-sm outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
						className
					)}
					{...props}
				/>
			</Menu.Positioner>
		</Menu.Portal>
	)
)
DropdownContent.displayName = "DropdownContent"

const DropdownItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => (
	<Menu.Item
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
			className
		)}
		{...props}
	/>
))
DropdownItem.displayName = "DropdownItem"

const DropdownItemShortcut = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn(
			"ml-auto pl-10 text-xs tracking-widest text-muted-foreground",
			className
		)}
		{...props}
	/>
))
DropdownItemShortcut.displayName = "DropdownItemShortcut"

const DropdownSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
	<Menu.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
))
DropdownSeparator.displayName = "DropdownSeparator"

const DropdownGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.GroupLabel>
>(({ className, ...props }, ref) => (
	<Menu.GroupLabel
		ref={ref}
		className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
		{...props}
	/>
))
DropdownGroupLabel.displayName = "DropdownGroupLabel"

const DropdownCheckboxItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>
>(({ className, children, ...props }, ref) => (
	<Menu.CheckboxItem
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<div className="size-4">
			<Menu.CheckboxItemIndicator>
				<CheckIcon className="size-full" />
			</Menu.CheckboxItemIndicator>
		</div>
		<span>{children}</span>
	</Menu.CheckboxItem>
))
DropdownCheckboxItem.displayName = "DropdownCheckboxItem"

const DropdownRadioItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioItem>
>(({ className, children, ...props }, ref) => (
	<Menu.RadioItem
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<div className="size-4">
			<Menu.RadioItemIndicator>
				<CheckIcon className="size-full" />
			</Menu.RadioItemIndicator>
		</div>
		<span>{children}</span>
	</Menu.RadioItem>
))
DropdownRadioItem.displayName = "DropdownRadioItem"

const DropdownSubTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => (
	<Menu.SubmenuTrigger
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:text-accent-foreground data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className="ml-auto size-3" />
	</Menu.SubmenuTrigger>
))
DropdownSubTrigger.displayName = "DropdownSubTrigger"

export {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownItemShortcut,
	DropdownGroupLabel,
	DropdownSeparator,
	DropdownTrigger,
	DropdownCheckboxItem,
	DropdownRadioItem,
	DropdownRadioGroup,
	DropdownGroup,
	DropdownSubTrigger,
}
