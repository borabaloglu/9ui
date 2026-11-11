import { Select as BaseSelect } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select<Value, Multiple extends boolean | undefined = false>(
	props: BaseSelect.Root.Props<Value, Multiple>,
) {
	return <BaseSelect.Root {...props} />;
}

function SelectLabel({
	className,
	...props
}: Omit<BaseSelect.Label.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Label
			data-slot="select-label"
			className={cn(
				"data-disabled:text-foreground/50 data-invalid:text-destructive w-fit cursor-default text-sm leading-snug font-medium select-none",
				className,
			)}
			{...props}
		/>
	);
}

function SelectTrigger({
	className,
	size = "default",
	children,
	...props
}: Omit<BaseSelect.Trigger.Props, "className"> & {
	className?: string;
	size?: "sm" | "default";
}) {
	return (
		<BaseSelect.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cn(
				"border-border bg-input text-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 relative flex h-8 w-fit min-w-0 items-center justify-between gap-2 rounded-lg border py-1 pr-2 pl-2.5 text-sm whitespace-nowrap shadow-xs transition-[color,border-color,box-shadow] duration-150 ease-out outline-none select-none not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/6%)] focus-visible:ring-3 aria-invalid:ring-3 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),0.75rem)] data-[size=sm]:before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] dark:bg-clip-border dark:not-data-disabled:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:h-9 any-pointer-coarse:text-base any-pointer-coarse:after:absolute any-pointer-coarse:after:inset-x-0 any-pointer-coarse:after:inset-y-[calc(50%-22px)] any-pointer-coarse:data-[size=sm]:h-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&:is([data-disabled],[aria-invalid])]:shadow-none",
				className,
			)}
			{...props}
		>
			{children}
			<BaseSelect.Icon
				data-slot="select-icon"
				className="text-muted-foreground flex"
			>
				<ChevronDownIcon />
			</BaseSelect.Icon>
		</BaseSelect.Trigger>
	);
}

function SelectValue({
	className,
	...props
}: Omit<BaseSelect.Value.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Value
			data-slot="select-value"
			className={cn(
				"data-placeholder:text-muted-foreground min-w-0 flex-1 truncate text-left",
				className,
			)}
			{...props}
		/>
	);
}

function SelectPopup({
	className,
	children,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	alignItemWithTrigger = true,
	anchor,
	...props
}: Omit<BaseSelect.Popup.Props, "className"> &
	Pick<
		BaseSelect.Positioner.Props,
		| "align"
		| "alignOffset"
		| "side"
		| "sideOffset"
		| "alignItemWithTrigger"
		| "anchor"
	> & {
		className?: string;
	}) {
	return (
		<BaseSelect.Portal data-slot="select-portal">
			<BaseSelect.Positioner
				data-slot="select-positioner"
				className="z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				alignItemWithTrigger={alignItemWithTrigger}
				anchor={anchor}
			>
				<BaseSelect.Popup
					data-slot="select-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint ring-border relative min-w-(--anchor-width) origin-(--transform-origin) rounded-lg shadow-md ring-1 transition-[scale,opacity] duration-150 outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+2px)] data-[side=none]:transition-none motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				>
					<BaseSelect.ScrollUpArrow
						data-slot="select-scroll-up-arrow"
						className="bg-popover text-muted-foreground top-0 z-10 flex h-6 w-full cursor-default items-center justify-center rounded-t-lg before:absolute before:left-0 before:h-full before:w-full data-[side=none]:before:-top-full [&_svg]:size-4"
					>
						<ChevronUpIcon />
					</BaseSelect.ScrollUpArrow>
					<BaseSelect.List
						data-slot="select-list"
						className="max-h-(--available-height) scroll-py-6 overflow-y-auto p-1 outline-none"
					>
						{children}
					</BaseSelect.List>
					<BaseSelect.ScrollDownArrow
						data-slot="select-scroll-down-arrow"
						className="bg-popover text-muted-foreground bottom-0 z-10 flex h-6 w-full cursor-default items-center justify-center rounded-b-lg before:absolute before:left-0 before:h-full before:w-full data-[side=none]:before:-bottom-full [&_svg]:size-4"
					>
						<ChevronDownIcon />
					</BaseSelect.ScrollDownArrow>
				</BaseSelect.Popup>
			</BaseSelect.Positioner>
		</BaseSelect.Portal>
	);
}

function SelectItem({
	className,
	children,
	...props
}: Omit<BaseSelect.Item.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Item
			data-slot="select-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-sm py-1 pr-8 pl-2 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<BaseSelect.ItemText
				data-slot="select-item-text"
				className="flex min-w-0 flex-1 items-center gap-2 whitespace-nowrap"
			>
				{children}
			</BaseSelect.ItemText>
			<BaseSelect.ItemIndicator
				data-slot="select-item-indicator"
				className="pointer-events-none absolute right-2 flex size-4 items-center justify-center"
			>
				<CheckIcon />
			</BaseSelect.ItemIndicator>
		</BaseSelect.Item>
	);
}

function SelectGroup(props: BaseSelect.Group.Props) {
	return <BaseSelect.Group data-slot="select-group" {...props} />;
}

function SelectGroupLabel({
	className,
	...props
}: Omit<BaseSelect.GroupLabel.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.GroupLabel
			data-slot="select-group-label"
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function SelectSeparator({
	className,
	...props
}: Omit<BaseSelect.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Separator
			data-slot="select-separator"
			className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

export {
	Select,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectLabel,
	SelectPopup,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
