import * as React from "react"
import { Select as BaseSelect } from "@base-ui-components/react/select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({ ...props }: React.ComponentProps<typeof BaseSelect.Root>) {
	return <BaseSelect.Root data-slot="select" {...props} />
}

function SelectGroup({
	...props
}: React.ComponentProps<typeof BaseSelect.Group>) {
	return <BaseSelect.Group data-slot="select-group" {...props} />
}

function SelectPortal({
	...props
}: React.ComponentProps<typeof BaseSelect.Portal>) {
	return <BaseSelect.Portal data-slot="select-portal" {...props} />
}

function SelectPositioner({
	...props
}: React.ComponentProps<typeof BaseSelect.Positioner>) {
	return <BaseSelect.Positioner data-slot="select-positioner" {...props} />
}

function SelectValue({
	className,
	...props
}: React.ComponentProps<typeof BaseSelect.Value>) {
	return (
		<BaseSelect.Value
			data-slot="select-value"
			className={cn("text-sm", className)}
			{...props}
		/>
	)
}

function SelectTrigger({
	className,
	size = "default",
	children,
	...props
}: React.ComponentProps<typeof BaseSelect.Trigger> & {
	size?: "sm" | "default"
}) {
	return (
		<BaseSelect.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cn(
				"group [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/50 aria-invalid:border-destructive bg-input hover:border-ring/70 flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow,border-color] outline-none select-none focus-visible:ring-[3px] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 data-[popup-open]:[&_*[data-slot=select-icon]]:rotate-180 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			{children}
			<BaseSelect.Icon>
				<ChevronDownIcon
					data-slot="select-icon"
					className="size-4 opacity-50 transition-transform duration-200"
				/>
			</BaseSelect.Icon>
		</BaseSelect.Trigger>
	)
}

function SelectContent({
	className,
	children,
	sideOffset = 4,
	position = "popper",
	...props
}: React.ComponentProps<typeof BaseSelect.Popup> & {
	sideOffset?: BaseSelect.Positioner.Props["sideOffset"]
	position?: "popper" | "item-aligned"
}) {
	return (
		<SelectPortal>
			<SelectPositioner
				sideOffset={sideOffset}
				alignItemWithTrigger={position === "item-aligned"}
			>
				<SelectScrollUpButton />
				<BaseSelect.Popup
					data-slot="select-content"
					className={cn(
						"bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[var(--available-height)] min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
						position === "item-aligned" &&
							"[&_*[data-slot=select-item]]:min-w-[var(--anchor-width)]",
						className
					)}
					{...props}
				>
					{children}
				</BaseSelect.Popup>
				<SelectScrollDownButton />
			</SelectPositioner>
		</SelectPortal>
	)
}

function SelectItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseSelect.Item>) {
	return (
		<BaseSelect.Item
			data-slot="select-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className
			)}
			{...props}
		>
			<span className="absolute right-2 flex size-3.5 items-center justify-center">
				<BaseSelect.ItemIndicator>
					<CheckIcon className="size-4" />
				</BaseSelect.ItemIndicator>
			</span>
			<BaseSelect.ItemText>{children}</BaseSelect.ItemText>
		</BaseSelect.Item>
	)
}

function SelectLabel({
	className,
	...props
}: React.ComponentProps<typeof BaseSelect.GroupLabel>) {
	return (
		<BaseSelect.GroupLabel
			data-slot="select-label"
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium",
				className
			)}
			{...props}
		/>
	)
}

function SelectSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseSelect.Separator>) {
	return (
		<BaseSelect.Separator
			data-slot="select-separator"
			className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	)
}

function SelectScrollUpButton({
	className,
	...props
}: React.ComponentProps<typeof BaseSelect.ScrollUpArrow>) {
	return (
		<BaseSelect.ScrollUpArrow
			data-slot="select-scroll-up-button"
			className={cn(
				"bg-popover top-px left-[1px] z-[100] flex w-[calc(100%-2px)] cursor-default items-center justify-center rounded-t-md py-1",
				className
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</BaseSelect.ScrollUpArrow>
	)
}

function SelectScrollDownButton({
	className,
	...props
}: React.ComponentProps<typeof BaseSelect.ScrollDownArrow>) {
	return (
		<BaseSelect.ScrollDownArrow
			data-slot="select-scroll-down-button"
			className={cn(
				"bg-popover bottom-px left-[1px] z-[100] flex w-[calc(100%-2px)] cursor-default items-center justify-center rounded-b-md py-1",
				className
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</BaseSelect.ScrollDownArrow>
	)
}

export {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectGroup,
	SelectLabel,
	SelectSeparator,
}
