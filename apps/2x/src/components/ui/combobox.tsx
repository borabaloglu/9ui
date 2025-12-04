import { Combobox as BaseCombobox } from "@base-ui-components/react/combobox"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Combobox({
	...props
}: React.ComponentProps<typeof BaseCombobox.Root>) {
	return <BaseCombobox.Root data-slot="combobox" {...props} />
}

function ComboboxValue({
	...props
}: React.ComponentProps<typeof BaseCombobox.Value>) {
	return <BaseCombobox.Value data-slot="combobox-value" {...props} />
}

function ComboboxIcon({
	...props
}: React.ComponentProps<typeof BaseCombobox.Icon>) {
	return <BaseCombobox.Icon data-slot="combobox-icon" {...props} />
}

function ComboboxClear({
	...props
}: React.ComponentProps<typeof BaseCombobox.Clear>) {
	return <BaseCombobox.Clear data-slot="combobox-clear" {...props} />
}

function ComboboxList({
	...props
}: React.ComponentProps<typeof BaseCombobox.List>) {
	return <BaseCombobox.List data-slot="combobox-list" {...props} />
}

function ComboboxGroup({
	...props
}: React.ComponentProps<typeof BaseCombobox.Group>) {
	return <BaseCombobox.Group data-slot="combobox-group" {...props} />
}

function ComboboxPortal({
	...props
}: React.ComponentProps<typeof BaseCombobox.Portal>) {
	return <BaseCombobox.Portal data-slot="combobox-portal" {...props} />
}

function ComboboxPositioner({
	...props
}: React.ComponentProps<typeof BaseCombobox.Positioner>) {
	return <BaseCombobox.Positioner data-slot="combobox-positioner" {...props} />
}

function ComboboxTrigger({
	className,
	size = "default",
	children,
	...props
}: React.ComponentProps<typeof BaseCombobox.Trigger> & {
	size?: "sm" | "default"
}) {
	return (
		<BaseCombobox.Trigger
			data-slot="combobox-trigger"
			data-size={size}
			className={cn(
				"group [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/50 aria-invalid:border-destructive bg-input hover:border-ring/70 flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow,border-color] outline-none select-none focus-visible:ring-[3px] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=combobox-value]:line-clamp-1 *:data-[slot=combobox-value]:flex *:data-[slot=combobox-value]:items-center *:data-[slot=combobox-value]:gap-2 data-[popup-open]:[&_*[data-slot=combobox-icon]]:rotate-180 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			{children}
			<BaseCombobox.Icon>
				<ChevronDownIcon
					data-slot="combobox-icon"
					className="size-4 opacity-50 transition-transform duration-200"
				/>
			</BaseCombobox.Icon>
		</BaseCombobox.Trigger>
	)
}

function ComboboxInput({
	className,
	inputContainerClassName,
	showClear = true,
	disabled,
	multiple,
	...props
}: React.ComponentProps<typeof BaseCombobox.Input> & {
	inputContainerClassName?: string
	showClear?: boolean
	multiple?: boolean
}) {
	return (
		<div
			className={cn(
				"group relative w-full data-[disabled]:pointer-events-none",
				inputContainerClassName
			)}
			data-disabled={disabled}
			data-slot="combobox-input-container"
		>
			<BaseCombobox.Input
				data-slot="combobox-input"
				className={cn(
					"placeholder:text-muted-foreground selection:bg-primary group-hover:border-ring/70 selection:text-primary-foreground bg-input focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:text-sm",
					showClear && "pr-8",
					multiple && "border-none bg-transparent focus-visible:ring-0",
					className
				)}
				disabled={disabled}
				{...props}
			/>
			{showClear && (
				<ComboboxClear
					data-slot="combobox-clear"
					className="text-muted-foreground absolute top-1/2 right-3 shrink-0 -translate-y-1/2 [&_svg]:shrink-0"
				>
					<XIcon className="size-4" />
				</ComboboxClear>
			)}
		</div>
	)
}

function ComboboxContent({
	className,
	children,
	sideOffset = 4,
	anchor = null,
	align = "start",
	...props
}: React.ComponentProps<typeof BaseCombobox.Popup> & {
	sideOffset?: BaseCombobox.Positioner.Props["sideOffset"]
	anchor?: BaseCombobox.Positioner.Props["anchor"]
	align?: BaseCombobox.Positioner.Props["align"]
}) {
	return (
		<ComboboxPortal>
			<ComboboxPositioner
				className="outline-none"
				sideOffset={sideOffset}
				anchor={anchor}
				align={align}
			>
				<BaseCombobox.Popup
					data-slot="combobox-content"
					className={cn(
						"bg-popover text-popover-foreground relative z-50 max-h-[min(var(--available-height),20rem)] min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border p-1 shadow-md",
						"[&_*[data-slot=combobox-input]]:rounded-sm",
						className
					)}
					{...props}
				>
					{children}
				</BaseCombobox.Popup>
			</ComboboxPositioner>
		</ComboboxPortal>
	)
}

function ComboboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseCombobox.Item>) {
	return (
		<BaseCombobox.Item
			data-slot="combobox-item"
			className={cn(
				"focus-visible:bg-accent focus-visible:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className
			)}
			{...props}
		>
			<span className="absolute right-2 flex size-3.5 items-center justify-center">
				<BaseCombobox.ItemIndicator>
					<CheckIcon className="size-4" />
				</BaseCombobox.ItemIndicator>
			</span>
			{children}
		</BaseCombobox.Item>
	)
}

function ComboboxEmpty({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Empty>) {
	return (
		<BaseCombobox.Empty
			data-slot="combobox-empty"
			className={cn("py-6 text-center text-sm empty:m-0 empty:p-0", className)}
			{...props}
		/>
	)
}

function ComboboxStatus({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Status>) {
	return (
		<BaseCombobox.Status
			data-slot="combobox-status"
			className={cn(
				"text-muted-foreground flex items-center gap-2 px-2 py-1.5 text-sm",
				className
			)}
			{...props}
		/>
	)
}

function ComboboxChips({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Chips>) {
	return (
		<BaseCombobox.Chips
			data-slot="combobox-chips"
			className={cn(
				"bg-input focus-within:border-ring focus-within:ring-ring/50 flex h-auto flex-wrap items-center rounded-md border focus-within:ring-[3px]",
				className
			)}
			{...props}
		/>
	)
}

function ComboboxChip({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseCombobox.Chip>) {
	return (
		<BaseCombobox.Chip
			data-slot="combobox-chip"
			className={cn(
				"bg-card text-card-foreground flex h-8 cursor-default items-center gap-1 rounded-md border px-1.5 py-0.5 text-sm outline-none",
				className
			)}
			{...props}
		>
			{children}
			<ComboboxChipRemove
				className="text-muted-foreground p-1 opacity-50 transition-opacity hover:opacity-100"
				aria-label="Remove"
			>
				<XIcon className="size-4" />
			</ComboboxChipRemove>
		</BaseCombobox.Chip>
	)
}

function ComboboxChipRemove({
	...props
}: React.ComponentProps<typeof BaseCombobox.ChipRemove>) {
	return <BaseCombobox.ChipRemove data-slot="combobox-chip-remove" {...props} />
}

export {
	Combobox,
	ComboboxClear,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxIcon,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxGroup,
	ComboboxPortal,
	ComboboxPositioner,
	ComboboxStatus,
	ComboboxTrigger,
	ComboboxValue,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipRemove,
}
