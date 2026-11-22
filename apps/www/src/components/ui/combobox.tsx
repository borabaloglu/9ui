import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { CheckIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Combobox = BaseCombobox.Root;
const useComboboxFilter = BaseCombobox.useFilter;
const useComboboxFilteredItems = BaseCombobox.useFilteredItems;
const createComboboxItems = BaseCombobox.createItems;

function ComboboxLabel({
	className,
	...props
}: Omit<BaseCombobox.Label.Props, "className"> & {
	className?: string;
}) {
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

function ComboboxInputGroup({ ...props }: BaseCombobox.InputGroup.Props) {
	return (
		<BaseCombobox.InputGroup data-slot="combobox-input-group" {...props} />
	);
}

function ComboboxInput({ ...props }: BaseCombobox.Input.Props) {
	return <BaseCombobox.Input data-slot="combobox-input" {...props} />;
}

function ComboboxTrigger({
	className,
	...props
}: Omit<BaseCombobox.Trigger.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCombobox.Trigger
			data-slot="combobox-trigger"
			className={cn("[--button-press-scale:1]", className)}
			{...props}
		/>
	);
}

function ComboboxClear({ ...props }: BaseCombobox.Clear.Props) {
	return <BaseCombobox.Clear data-slot="combobox-clear" {...props} />;
}

function ComboboxValue({ ...props }: BaseCombobox.Value.Props) {
	return <BaseCombobox.Value {...props} />;
}

function ComboboxPopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	anchor,
	dir,
	portalProps,
	...props
}: Omit<BaseCombobox.Popup.Props, "className"> &
	Pick<
		BaseCombobox.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		className?: string;
		portalProps?: BaseCombobox.Portal.Props;
	}) {
	return (
		<BaseCombobox.Portal data-slot="combobox-portal" {...portalProps}>
			<BaseCombobox.Positioner
				data-slot="combobox-positioner"
				className="z-50"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
				dir={dir}
			>
				<BaseCombobox.Popup
					data-slot="combobox-popup"
					className={cn(
						"bg-popover text-popover-foreground dark:edge-highlight-lg flex max-h-[min(var(--available-height),20rem)] max-w-(--available-width) min-w-(--anchor-width) flex-col rounded-lg border shadow-md outline-none not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-md)]",
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
}: Omit<BaseCombobox.List.Props, "className"> & {
	className?: string;
}) {
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
}: Omit<BaseCombobox.Item.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCombobox.Item
			data-slot="combobox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-sm py-1 ps-2 pe-8 text-sm wrap-anywhere outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<BaseCombobox.ItemIndicator
				data-slot="combobox-item-indicator"
				className="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
			>
				<CheckIcon />
			</BaseCombobox.ItemIndicator>
		</BaseCombobox.Item>
	);
}

function ComboboxEmpty({
	className,
	...props
}: Omit<BaseCombobox.Empty.Props, "className"> & {
	className?: string;
}) {
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
}: Omit<BaseCombobox.Status.Props, "className"> & {
	className?: string;
}) {
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

function ComboboxGroup({ ...props }: BaseCombobox.Group.Props) {
	return <BaseCombobox.Group data-slot="combobox-group" {...props} />;
}

function ComboboxGroupLabel({
	className,
	...props
}: Omit<BaseCombobox.GroupLabel.Props, "className"> & {
	className?: string;
}) {
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
}: Omit<BaseCombobox.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCombobox.Separator
			data-slot="combobox-separator"
			className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ComboboxCollection({ ...props }: BaseCombobox.Collection.Props) {
	return <BaseCombobox.Collection {...props} />;
}

function ComboboxRow({
	className,
	...props
}: Omit<BaseCombobox.Row.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCombobox.Row
			data-slot="combobox-row"
			className={cn("grid w-full scroll-my-1 gap-1", className)}
			{...props}
		/>
	);
}

const comboboxChipsSizes = {
	sm: "min-h-7 rounded-[min(var(--radius-md),0.75rem)] py-0.5 text-[0.8rem] before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] has-data-[slot=combobox-chip]:px-0.5 any-pointer-coarse:min-h-8",
	default:
		"min-h-8 rounded-lg py-1 text-sm before:rounded-[calc(var(--radius-lg)-1px)] has-data-[slot=combobox-chip]:px-1 any-pointer-coarse:min-h-9",
	lg: "min-h-9 rounded-lg px-3 py-1.5 text-sm before:rounded-[calc(var(--radius-lg)-1px)] has-data-[slot=combobox-chip]:px-1.5 any-pointer-coarse:min-h-10",
};

function ComboboxChips({
	className,
	children,
	size = "default",
	...props
}: Omit<BaseCombobox.InputGroup.Props, "className"> & {
	className?: string;
	size?: keyof typeof comboboxChipsSizes;
}) {
	return (
		<BaseCombobox.InputGroup
			data-slot="combobox-chips"
			data-size={size}
			className={cn(
				"group/combobox-chips border-border bg-input relative flex w-full min-w-0 cursor-text border px-2.5 shadow-xs transition-[border-color,box-shadow] duration-150 ease-out not-dark:bg-clip-padding any-pointer-coarse:text-base",
				comboboxChipsSizes[size],
				"before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/6%)] dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				"has-[[data-slot=combobox-chips-input]:focus-visible]:border-ring has-[[data-slot=combobox-chips-input]:focus-visible]:ring-ring/50 has-[[data-slot=combobox-chips-input]:focus-visible]:ring-3 has-[[data-slot=combobox-chips-input]:focus-visible]:before:shadow-none",
				"has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/30 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:shadow-none has-aria-invalid:before:shadow-none",
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
}: Omit<BaseCombobox.Input.Props, "className"> & {
	className?: string;
}) {
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
}: Omit<BaseCombobox.Chip.Props, "className"> & {
	className?: string;
	showRemove?: boolean;
}) {
	const label =
		props["aria-label"] ?? (typeof children === "string" ? children : null);
	const removeLabel = label ? `Remove ${label}` : "Remove";

	return (
		<BaseCombobox.Chip
			data-slot="combobox-chip"
			className={cn(
				"bg-muted text-foreground focus-visible:ring-ring/50 flex h-5.5 w-fit max-w-full min-w-0 cursor-default items-center rounded-sm px-1.5 text-xs font-medium whitespace-nowrap outline-none select-none focus-visible:ring-3 has-data-[slot=combobox-chip-remove]:pe-0 any-pointer-coarse:h-6.5 any-pointer-coarse:text-sm",
				className,
			)}
			{...props}
		>
			<span data-slot="combobox-chip-label" className="min-w-0 truncate">
				{children}
			</span>
			{showRemove && (
				<BaseCombobox.ChipRemove
					data-slot="combobox-chip-remove"
					aria-label={removeLabel}
					className="text-muted-foreground hover:text-foreground flex h-full w-5 shrink-0 items-center justify-center outline-none any-pointer-coarse:w-6.5 [&_svg]:pointer-events-none [&_svg]:size-3"
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
	useComboboxFilter,
	useComboboxFilteredItems,
};
