import * as React from "react"
import { Autocomplete as BaseAutocomplete } from "@base-ui-components/react/autocomplete"

import { cn } from "@/lib/utils"

function Autocomplete({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Root>) {
	return <BaseAutocomplete.Root data-slot="autocomplete" {...props} />
}

function AutocompletePortal({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Portal>) {
	return <BaseAutocomplete.Portal data-slot="autocomplete-portal" {...props} />
}

function AutocompletePositioner({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Positioner>) {
	return (
		<BaseAutocomplete.Positioner
			data-slot="autocomplete-positioner"
			{...props}
		/>
	)
}

function AutocompleteValue({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Value>) {
	return <BaseAutocomplete.Value data-slot="autocomplete-value" {...props} />
}

function AutocompleteTrigger({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Trigger>) {
	return (
		<BaseAutocomplete.Trigger data-slot="autocomplete-trigger" {...props} />
	)
}

function AutocompleteIcon({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Icon>) {
	return <BaseAutocomplete.Icon data-slot="autocomplete-icon" {...props} />
}

function AutocompleteClear({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Clear>) {
	return <BaseAutocomplete.Clear data-slot="autocomplete-clear" {...props} />
}

function AutocompleteInput({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Input>) {
	return (
		<BaseAutocomplete.Input
			data-slot="autocomplete-input"
			className={cn(
				"placeholder:text-muted-foreground selection:bg-primary group-hover:border-ring/70 selection:text-primary-foreground bg-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				"aria-invalid:ring-destructive/50 aria-invalid:border-destructive",
				className
			)}
			{...props}
		/>
	)
}

function AutocompleteContent({
	className,
	children,
	sideOffset = 4,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Popup> & {
	sideOffset?: BaseAutocomplete.Positioner.Props["sideOffset"]
}) {
	return (
		<AutocompletePortal>
			<AutocompletePositioner className="outline-none" sideOffset={sideOffset}>
				<BaseAutocomplete.Popup
					data-slot="autocomplete-content"
					className={cn(
						"bg-popover text-popover-foreground relative z-50 max-h-[min(var(--available-height),20rem)] min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border p-1 shadow-md",
						className
					)}
					{...props}
				>
					{children}
				</BaseAutocomplete.Popup>
			</AutocompletePositioner>
		</AutocompletePortal>
	)
}

function AutocompleteItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Item>) {
	return (
		<BaseAutocomplete.Item
			data-slot="autocomplete-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			{children}
		</BaseAutocomplete.Item>
	)
}

function AutocompleteEmpty({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Empty>) {
	return (
		<BaseAutocomplete.Empty
			data-slot="autocomplete-empty"
			className={cn("py-6 text-center text-sm empty:m-0 empty:p-0", className)}
			{...props}
		/>
	)
}

function AutocompleteStatus({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Status>) {
	return (
		<BaseAutocomplete.Status
			data-slot="autocomplete-status"
			className={cn(
				"text-muted-foreground flex items-center gap-2 px-2 py-1.5 text-sm",
				className
			)}
			{...props}
		/>
	)
}

function AutocompleteGroup({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Group>) {
	return <BaseAutocomplete.Group data-slot="autocomplete-group" {...props} />
}

function AutocompleteGroupLabel({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.GroupLabel>) {
	return (
		<BaseAutocomplete.GroupLabel
			data-slot="autocomplete-group-label"
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium",
				className
			)}
			{...props}
		/>
	)
}

function AutocompleteSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Separator>) {
	return (
		<BaseAutocomplete.Separator
			data-slot="autocomplete-separator"
			className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	)
}

function AutocompleteList(
	props: React.ComponentProps<typeof BaseAutocomplete.List>
) {
	return <BaseAutocomplete.List data-slot="autocomplete-list" {...props} />
}

function AutocompleteCollection(
	props: React.ComponentProps<typeof BaseAutocomplete.Collection>
) {
	return (
		<BaseAutocomplete.Collection
			data-slot="autocomplete-collection"
			{...props}
		/>
	)
}

function AutocompleteRow({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Row>) {
	return (
		<BaseAutocomplete.Row
			data-slot="autocomplete-row"
			className={cn("grid w-full scroll-my-1.5", className)}
			{...props}
		/>
	)
}

export {
	Autocomplete,
	AutocompleteClear,
	AutocompleteCollection,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteIcon,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePortal,
	AutocompletePositioner,
	AutocompleteRow,
	AutocompleteSeparator,
	AutocompleteStatus,
	AutocompleteTrigger,
	AutocompleteValue,
}

export const useFilter = BaseAutocomplete.useFilter
