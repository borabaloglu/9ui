"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select<Value, Multiple extends boolean | undefined = false>(
	props: BaseSelect.Root.Props<Value, Multiple>,
) {
	return <BaseSelect.Root {...props} />;
}

function SelectTrigger({
	className,
	children,
	...props
}: Omit<BaseSelect.Trigger.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Trigger
			data-slot="select-trigger"
			className={cn(
				"skin-select-trigger relative flex w-fit min-w-0 items-center justify-between whitespace-nowrap outline-none select-none data-disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			{children}
			<BaseSelect.Icon
				data-slot="select-icon"
				className="skin-select-icon flex"
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
				"skin-select-value min-w-0 flex-1 truncate text-left",
				className,
			)}
			{...props}
		/>
	);
}

function SelectPopup({
	className,
	children,
	...props
}: Omit<BaseSelect.Popup.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSelect.Portal data-slot="select-portal">
			<BaseSelect.Positioner
				data-slot="select-positioner"
				className="z-50 outline-none"
				sideOffset={6}
				alignItemWithTrigger={false}
			>
				<BaseSelect.Popup
					data-slot="select-popup"
					className={cn(
						"skin-select-popup relative min-w-(--anchor-width) origin-(--transform-origin) outline-none",
						className,
					)}
					{...props}
				>
					<BaseSelect.List
						data-slot="select-list"
						className="skin-select-list max-h-(--available-height) overflow-y-auto outline-none"
					>
						{children}
					</BaseSelect.List>
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
				"skin-select-item relative flex w-full cursor-default items-center outline-none select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			<BaseSelect.ItemText
				data-slot="select-item-text"
				className="flex min-w-0 flex-1 items-center whitespace-nowrap"
			>
				{children}
			</BaseSelect.ItemText>
			<BaseSelect.ItemIndicator
				data-slot="select-item-indicator"
				className="skin-select-item-indicator pointer-events-none flex items-center justify-center"
			>
				<CheckIcon />
			</BaseSelect.ItemIndicator>
		</BaseSelect.Item>
	);
}

export { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue };
