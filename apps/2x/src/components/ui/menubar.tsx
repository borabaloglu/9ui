import { Menu as BaseMenu } from "@base-ui-components/react/menu"
import { Menubar as BaseMenubar } from "@base-ui-components/react/menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
	className,
	...props
}: React.ComponentProps<typeof BaseMenubar>) {
	return (
		<BaseMenubar
			data-slot="menubar"
			className={cn(
				"bg-popover flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
				className
			)}
			{...props}
		/>
	)
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof BaseMenu.Root>) {
	return (
		<BaseMenu.Root
			delay={0}
			closeDelay={0}
			data-slot="menubar-menu"
			{...props}
		/>
	)
}

function MenubarGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.Group>) {
	return <BaseMenu.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
	...props
}: React.ComponentProps<typeof BaseMenu.Portal>) {
	return <BaseMenu.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
	...props
}: React.ComponentProps<typeof BaseMenu.RadioGroup>) {
	return <BaseMenu.RadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarTrigger({
	className,
	...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
	return (
		<BaseMenu.Trigger
			data-slot="menubar-trigger"
			className={cn(
				"data-popup-open:bg-accent data-popup-open:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
				className
			)}
			{...props}
		/>
	)
}

function MenubarContent({
	className,
	align = "start",
	alignOffset = -4,
	sideOffset = 8,
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> & {
	align?: BaseMenu.Positioner.Props["align"]
	alignOffset?: BaseMenu.Positioner.Props["alignOffset"]
	sideOffset?: BaseMenu.Positioner.Props["sideOffset"]
}) {
	return (
		<MenubarPortal>
			<BaseMenu.Positioner
				className="max-h-[var(--available-height)]"
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
			>
				<BaseMenu.Popup
					data-slot="menubar-content"
					className={cn(
						"bg-popover data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</MenubarPortal>
	)
}

function MenubarItem({
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
			data-slot="menubar-item"
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

function MenubarCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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

function MenubarRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
	return (
		<BaseMenu.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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

function MenubarLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel> & {
	inset?: boolean
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="menubar-label"
			data-inset={inset}
			className={cn(
				"px-2 py-1.5 text-xs font-medium data-[inset]:pl-8",
				className
			)}
			{...props}
		/>
	)
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
	)
}

function MenubarShortcut({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="menubar-shortcut"
			className={cn(
				"text-muted-foreground ml-auto text-xs tracking-widest",
				className
			)}
			{...props}
		/>
	)
}

function MenubarSub({
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
	return (
		<BaseMenu.SubmenuRoot
			delay={0}
			closeDelay={0}
			data-slot="menubar-sub"
			{...props}
		/>
	)
}

function MenubarSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof BaseMenu.SubmenuTrigger> & {
	inset?: boolean
}) {
	return (
		<BaseMenu.SubmenuTrigger
			data-slot="menubar-sub-trigger"
			data-inset={inset}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto h-4 w-4" />
		</BaseMenu.SubmenuTrigger>
	)
}

function MenubarSubContent({
	className,
	sideOffset = 0,
	align = "start",
	...props
}: React.ComponentProps<typeof BaseMenu.Popup> & {
	sideOffset?: BaseMenu.Positioner.Props["sideOffset"]
	align?: BaseMenu.Positioner.Props["align"]
}) {
	return (
		<MenubarPortal>
			<BaseMenu.Positioner
				className="max-h-[var(--available-height)]"
				sideOffset={sideOffset}
				align={align}
			>
				<BaseMenu.Popup
					data-slot="menubar-sub-content"
					className={cn(
						"bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</MenubarPortal>
	)
}

export {
	Menubar,
	MenubarPortal,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarGroup,
	MenubarSeparator,
	MenubarLabel,
	MenubarItem,
	MenubarShortcut,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
}
