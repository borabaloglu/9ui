import type * as React from "react";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";

import { cn } from "@/lib/utils";

const Autocomplete = BaseAutocomplete.Root;
const useFilter = BaseAutocomplete.useFilter;
const useFilteredItems = BaseAutocomplete.useFilteredItems;

function AutocompleteInputGroup({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.InputGroup>) {
	return (
		<BaseAutocomplete.InputGroup
			data-slot="autocomplete-input-group"
			{...props}
		/>
	);
}

function AutocompleteInput({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Input>) {
	return <BaseAutocomplete.Input data-slot="autocomplete-input" {...props} />;
}

function AutocompleteTrigger({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Trigger>) {
	return (
		<BaseAutocomplete.Trigger data-slot="autocomplete-trigger" {...props} />
	);
}

function AutocompleteClear({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Clear>) {
	return <BaseAutocomplete.Clear data-slot="autocomplete-clear" {...props} />;
}

function AutocompleteValue({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Value>) {
	return <BaseAutocomplete.Value {...props} />;
}

function AutocompletePopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	anchor,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Popup> &
	Pick<
		BaseAutocomplete.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	>) {
	return (
		<BaseAutocomplete.Portal data-slot="autocomplete-portal">
			<BaseAutocomplete.Positioner
				data-slot="autocomplete-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseAutocomplete.Popup
					data-slot="autocomplete-popup"
					className={cn(
						"bg-popover text-popover-foreground flex max-h-[min(var(--available-height),20rem)] max-w-(--available-width) min-w-(--anchor-width) flex-col rounded-lg border shadow-md outline-none",
						className,
					)}
					{...props}
				/>
			</BaseAutocomplete.Positioner>
		</BaseAutocomplete.Portal>
	);
}

function AutocompleteList({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.List>) {
	return (
		<BaseAutocomplete.List
			data-slot="autocomplete-list"
			className={cn(
				"min-h-0 flex-1 scroll-py-1 overflow-y-auto overscroll-contain outline-none not-empty:p-1",
				className,
			)}
			{...props}
		/>
	);
}

function AutocompleteItem({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Item>) {
	return (
		<BaseAutocomplete.Item
			data-slot="autocomplete-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function AutocompleteEmpty({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Empty>) {
	return (
		<BaseAutocomplete.Empty
			data-slot="autocomplete-empty"
			className={cn(
				"text-muted-foreground text-center text-sm wrap-break-word not-empty:p-2 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function AutocompleteStatus({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Status>) {
	return (
		<BaseAutocomplete.Status
			data-slot="autocomplete-status"
			className={cn(
				"text-muted-foreground text-sm wrap-break-word not-empty:px-3 not-empty:py-2 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function AutocompleteGroup({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Group>) {
	return <BaseAutocomplete.Group data-slot="autocomplete-group" {...props} />;
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
				className,
			)}
			{...props}
		/>
	);
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
	);
}

function AutocompleteCollection({
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Collection>) {
	return <BaseAutocomplete.Collection {...props} />;
}

function AutocompleteRow({
	className,
	...props
}: React.ComponentProps<typeof BaseAutocomplete.Row>) {
	return (
		<BaseAutocomplete.Row
			data-slot="autocomplete-row"
			className={cn("grid w-full scroll-my-1 gap-1", className)}
			{...props}
		/>
	);
}

export {
	Autocomplete,
	AutocompleteClear,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteInputGroup,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	AutocompleteRow,
	AutocompleteSeparator,
	AutocompleteStatus,
	AutocompleteTrigger,
	AutocompleteValue,
	useFilter,
	useFilteredItems,
};
