"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"
import { useControlled } from "@base-ui-components/react/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenuGroup = Menu.Group
ContextMenuGroup.displayName = "ContextMenuGroup"

const ContextMenuRadioGroup = Menu.RadioGroup
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup"

type ContextMenuContext = {
	open: boolean
	setOpen: (open: boolean) => void
}

const ContextMenuContext = React.createContext<ContextMenuContext | null>(null)

const useContextMenu = () => {
	const context = React.useContext(ContextMenuContext)

	if (!context) {
		throw new Error("useContextMenu must be used within a ContextMenuProvider")
	}

	return context
}

const ContextMenu = ({ ...props }: Menu.Root.Props) => {
	const [open, setOpen] = useControlled({
		controlled: props.open,
		default: false,
		name: "ContextMenu",
		state: "open",
	})

	return (
		<ContextMenuContext.Provider value={{ open, setOpen }}>
			<Menu.Root open={open} onOpenChange={setOpen} {...props} />
		</ContextMenuContext.Provider>
	)
}
ContextMenu.displayName = "ContextMenu"

const ContextMenuContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Popup>
>(({ className, ...props }, ref) => (
	<Menu.Portal>
		<Menu.Positioner align="start">
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
))
ContextMenuContent.displayName = "ContextMenuContent"

const ContextMenuTrigger = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
	const [position, setPosition] = React.useState({ x: 0, y: 0 })
	const { setOpen } = useContextMenu()

	const handleContextMenu = (e: React.MouseEvent) => {
		e.preventDefault()
		setPosition({ x: e.clientX, y: e.clientY })
		setOpen(true)
	}

	return (
		<div
			ref={ref}
			className={className}
			onContextMenu={handleContextMenu}
			{...props}
		>
			{children}
			<Menu.Trigger
				style={{
					position: "fixed",
					left: position.x,
					top: position.y,
					margin: 0,
				}}
			/>
		</div>
	)
})
ContextMenuTrigger.displayName = "ContextMenuTrigger"

const ContextMenuItem = React.forwardRef<
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
ContextMenuItem.displayName = "ContextMenuItem"

const ContextMenuItemShortcut = React.forwardRef<
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
ContextMenuItemShortcut.displayName = "ContextMenuItemShortcut"

const ContextMenuGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.GroupLabel>
>(({ className, ...props }, ref) => (
	<Menu.GroupLabel
		ref={ref}
		className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
		{...props}
	/>
))
ContextMenuGroupLabel.displayName = "ContextMenuGroupLabel"

const ContextMenuCheckboxItem = React.forwardRef<
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
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

const ContextMenuRadioItem = React.forwardRef<
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
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

const ContextMenuSubTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => (
	<Menu.SubmenuTrigger
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className="ml-auto size-3" />
	</Menu.SubmenuTrigger>
))
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

const ContextMenuSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
	<Menu.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
))
ContextMenuSeparator.displayName = "ContextMenuSeparator"

export {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuItemShortcut,
	ContextMenuTrigger,
	ContextMenuSeparator,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuCheckboxItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSubTrigger,
}
