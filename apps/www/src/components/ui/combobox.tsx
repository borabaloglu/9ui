import type * as React from "react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { CheckIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Combobox = BaseCombobox.Root;
const useFilter = BaseCombobox.useFilter;
const useFilteredItems = BaseCombobox.useFilteredItems;
const createComboboxItems = BaseCombobox.createItems;

function ComboboxLabel({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Label>) {
	return (
		<BaseCombobox.Label
			data-slot="combobox-label"
			className={cn(
				"data-disabled:text-foreground/50 data-invalid:text-destructive w-fit cursor-default text-sm leading-snug font-medium select-none",
				className,
			)}
			{...props}
		/>
	);
}

function ComboboxInputGroup({
	...props
}: React.ComponentProps<typeof BaseCombobox.InputGroup>) {
	return (
		<BaseCombobox.InputGroup data-slot="combobox-input-group" {...props} />
	);
}

function ComboboxInput({
	...props
}: React.ComponentProps<typeof BaseCombobox.Input>) {
	return <BaseCombobox.Input data-slot="combobox-input" {...props} />;
}

function ComboboxTrigger({
	...props
}: React.ComponentProps<typeof BaseCombobox.Trigger>) {
	return <BaseCombobox.Trigger data-slot="combobox-trigger" {...props} />;
}

function ComboboxClear({
	...props
}: React.ComponentProps<typeof BaseCombobox.Clear>) {
	return <BaseCombobox.Clear data-slot="combobox-clear" {...props} />;
}

function ComboboxValue({
	...props
}: React.ComponentProps<typeof BaseCombobox.Value>) {
	return <BaseCombobox.Value {...props} />;
}

function ComboboxPopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	anchor,
	...props
}: React.ComponentProps<typeof BaseCombobox.Popup> &
	Pick<
		BaseCombobox.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	>) {
	return (
		<BaseCombobox.Portal data-slot="combobox-portal">
			<BaseCombobox.Positioner
				data-slot="combobox-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
			>
				<BaseCombobox.Popup
					data-slot="combobox-popup"
					className={cn(
						"bg-popover text-popover-foreground flex max-h-[min(var(--available-height),20rem)] max-w-(--available-width) min-w-(--anchor-width) flex-col rounded-lg border shadow-md outline-none",
						className,
					)}
					{...props}
				/>
			</BaseCombobox.Positioner>
		</BaseCombobox.Portal>
	);
}

function ComboboxList({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.List>) {
	return (
		<BaseCombobox.List
			data-slot="combobox-list"
			className={cn(
				"min-h-0 flex-1 scroll-py-1 overflow-y-auto overscroll-contain outline-none not-empty:p-1",
				className,
			)}
			{...props}
		/>
	);
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
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-sm py-1 pr-8 pl-2 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<BaseCombobox.ItemIndicator
				data-slot="combobox-item-indicator"
				className="pointer-events-none absolute right-2 flex size-4 items-center justify-center"
			>
				<CheckIcon />
			</BaseCombobox.ItemIndicator>
		</BaseCombobox.Item>
	);
}

function ComboboxEmpty({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Empty>) {
	return (
		<BaseCombobox.Empty
			data-slot="combobox-empty"
			className={cn(
				"text-muted-foreground text-center text-sm wrap-break-word not-empty:p-2 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function ComboboxStatus({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Status>) {
	return (
		<BaseCombobox.Status
			data-slot="combobox-status"
			className={cn(
				"text-muted-foreground text-sm wrap-break-word not-empty:px-3 not-empty:py-2 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function ComboboxGroup({
	...props
}: React.ComponentProps<typeof BaseCombobox.Group>) {
	return <BaseCombobox.Group data-slot="combobox-group" {...props} />;
}

function ComboboxGroupLabel({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.GroupLabel>) {
	return (
		<BaseCombobox.GroupLabel
			data-slot="combobox-group-label"
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function ComboboxSeparator({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Separator>) {
	return (
		<BaseCombobox.Separator
			data-slot="combobox-separator"
			className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ComboboxCollection({
	...props
}: React.ComponentProps<typeof BaseCombobox.Collection>) {
	return <BaseCombobox.Collection {...props} />;
}

function ComboboxRow({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Row>) {
	return (
		<BaseCombobox.Row
			data-slot="combobox-row"
			className={cn("grid w-full scroll-my-1 gap-1", className)}
			{...props}
		/>
	);
}

function ComboboxChips({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseCombobox.InputGroup>) {
	return (
		<BaseCombobox.InputGroup
			data-slot="combobox-chips"
			className={cn(
				"group/combobox-chips border-border bg-input relative flex min-h-8 w-full min-w-0 cursor-text rounded-lg border px-2.5 py-1 text-sm shadow-xs transition-[color,border-color,box-shadow] duration-150 ease-out outline-none not-dark:bg-clip-padding dark:bg-clip-border any-pointer-coarse:min-h-9",
				"before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				"has-data-[slot=combobox-chip]:px-1",
				"focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-3 focus-within:before:shadow-none",
				"has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/30 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:shadow-none has-aria-invalid:ring-3 has-aria-invalid:before:shadow-none",
				"data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:shadow-none data-disabled:before:shadow-none",
				className,
			)}
			{...props}
		>
			<BaseCombobox.Chips
				data-slot="combobox-chips-list"
				className="flex min-w-0 flex-1 flex-wrap items-center gap-1"
			>
				{children}
			</BaseCombobox.Chips>
		</BaseCombobox.InputGroup>
	);
}

function ComboboxChipsInput({
	className,
	...props
}: React.ComponentProps<typeof BaseCombobox.Input>) {
	return (
		<BaseCombobox.Input
			data-slot="combobox-chips-input"
			className={cn(
				"placeholder:text-muted-foreground h-5.5 min-w-16 flex-1 bg-transparent outline-none group-has-data-[slot=combobox-chip]/combobox-chips:px-1.5 disabled:cursor-not-allowed any-pointer-coarse:h-6.5 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function ComboboxChip({
	className,
	children,
	showRemove = true,
	...props
}: React.ComponentProps<typeof BaseCombobox.Chip> & {
	showRemove?: boolean;
}) {
	const label =
		props["aria-label"] ?? (typeof children === "string" ? children : null);
	const removeLabel = label ? `Remove ${label}` : "Remove";

	return (
		<BaseCombobox.Chip
			data-slot="combobox-chip"
			className={cn(
				"bg-muted text-foreground focus-visible:ring-ring/50 flex h-5.5 w-fit cursor-default items-center rounded-sm px-1.5 text-xs font-medium whitespace-nowrap outline-none select-none focus-visible:ring-2 has-data-[slot=combobox-chip-remove]:pr-0 any-pointer-coarse:h-6.5 any-pointer-coarse:text-sm",
				className,
			)}
			{...props}
		>
			{children}
			{showRemove && (
				<BaseCombobox.ChipRemove
					data-slot="combobox-chip-remove"
					aria-label={removeLabel}
					className="text-muted-foreground hover:text-foreground flex h-full w-5 items-center justify-center outline-none any-pointer-coarse:w-6.5 [&_svg]:pointer-events-none [&_svg]:size-3"
				>
					<XIcon />
				</BaseCombobox.ChipRemove>
			)}
		</BaseCombobox.Chip>
	);
}

export {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxClear,
	ComboboxCollection,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxInput,
	ComboboxInputGroup,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList,
	ComboboxPopup,
	ComboboxRow,
	ComboboxSeparator,
	ComboboxStatus,
	ComboboxTrigger,
	ComboboxValue,
	createComboboxItems,
	useFilter,
	useFilteredItems,
};
