import type * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Menu<Payload>({ ...props }: BaseMenu.Root.Props<Payload>) {
	return <BaseMenu.Root {...props} />;
}

function MenuTrigger<Payload>({ ...props }: BaseMenu.Trigger.Props<Payload>) {
	return <BaseMenu.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuPopup({
	className,
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	anchor,
	dir,
	...props
}: Omit<BaseMenu.Popup.Props, "className"> &
	Pick<
		BaseMenu.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		className?: string;
	}) {
	return (
		<BaseMenu.Portal data-slot="menu-portal">
			<BaseMenu.Positioner
				data-slot="menu-positioner"
				className="z-50"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
				dir={dir}
			>
				<BaseMenu.Popup
					data-slot="menu-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint dark:edge-highlight-lg max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border p-1 shadow-md transition-[scale,opacity] duration-150 outline-none not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-md)] data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:transition-none data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
						className,
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</BaseMenu.Portal>
	);
}

function MenuGroup({ ...props }: BaseMenu.Group.Props) {
	return <BaseMenu.Group data-slot="menu-group" {...props} />;
}

function MenuGroupLabel({
	className,
	inset,
	...props
}: Omit<BaseMenu.GroupLabel.Props, "className"> & {
	className?: string;
	inset?: boolean;
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="menu-group-label"
			data-inset={inset ? "" : undefined}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:ps-8",
				className,
			)}
			{...props}
		/>
	);
}

function MenuItem({
	className,
	inset,
	variant = "default",
	...props
}: Omit<BaseMenu.Item.Props, "className"> & {
	className?: string;
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<BaseMenu.Item
			data-slot="menu-item"
			data-inset={inset ? "" : undefined}
			data-variant={variant}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenuLinkItem({
	className,
	inset,
	...props
}: Omit<BaseMenu.LinkItem.Props, "className"> & {
	className?: string;
	inset?: boolean;
}) {
	return (
		<BaseMenu.LinkItem
			data-slot="menu-link-item"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenuCheckboxItem({
	className,
	children,
	...props
}: Omit<BaseMenu.CheckboxItem.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="menu-checkbox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 ps-8 pe-2 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute start-2 flex size-4 items-center justify-center">
				<BaseMenu.CheckboxItemIndicator data-slot="menu-checkbox-item-indicator">
					<CheckIcon />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	);
}

function MenuRadioGroup({ ...props }: BaseMenu.RadioGroup.Props) {
	return <BaseMenu.RadioGroup data-slot="menu-radio-group" {...props} />;
}

function MenuRadioItem({
	className,
	children,
	...props
}: Omit<BaseMenu.RadioItem.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.RadioItem
			data-slot="menu-radio-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 ps-8 pe-2 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute start-2 flex size-4 items-center justify-center">
				<BaseMenu.RadioItemIndicator data-slot="menu-radio-item-indicator">
					<CheckIcon />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	);
}

function MenuSeparator({
	className,
	...props
}: Omit<BaseMenu.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.Separator
			data-slot="menu-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="menu-shortcut"
			className={cn(
				"text-muted-foreground in-data-highlighted:text-accent-foreground ms-auto ps-4 font-sans text-xs tracking-widest [unicode-bidi:plaintext]",
				className,
			)}
			{...props}
		/>
	);
}

function MenuSub({ ...props }: BaseMenu.SubmenuRoot.Props) {
	return <BaseMenu.SubmenuRoot {...props} />;
}

function MenuSubTrigger({
	className,
	inset,
	children,
	...props
}: Omit<BaseMenu.SubmenuTrigger.Props, "className"> & {
	className?: string;
	inset?: boolean;
}) {
	return (
		<BaseMenu.SubmenuTrigger
			data-slot="menu-sub-trigger"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ms-auto -me-0.5 rtl:rotate-180" />
		</BaseMenu.SubmenuTrigger>
	);
}

function MenuSubPopup({
	className,
	align = "start",
	alignOffset = -5,
	side = "inline-end",
	sideOffset = 0,
	...props
}: React.ComponentProps<typeof MenuPopup>) {
	return (
		<MenuPopup
			className={cn(
				"duration-100 data-ending-style:scale-100 data-starting-style:scale-100",
				className,
			)}
			align={align}
			alignOffset={alignOffset}
			side={side}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export {
	Menu,
	MenuCheckboxItem,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuLinkItem,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuShortcut,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
};
