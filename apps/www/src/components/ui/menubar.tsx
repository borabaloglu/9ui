import type * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Menubar({
	className,
	...props
}: Omit<BaseMenubar.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenubar
			data-slot="menubar"
			className={cn(
				"group/menubar bg-card text-card-foreground relative flex w-fit items-center gap-0.5 rounded-xl border p-1 shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarMenu<Payload>({ ...props }: BaseMenu.Root.Props<Payload>) {
	return <BaseMenu.Root {...props} />;
}

function MenubarTrigger<Payload>({
	className,
	...props
}: Omit<BaseMenu.Trigger.Props<Payload>, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.Trigger
			data-slot="menubar-trigger"
			className={cn(
				"text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 data-popup-open:bg-accent data-popup-open:text-accent-foreground dark:hover:bg-accent/50 dark:data-popup-open:bg-accent/50 relative inline-flex h-7 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-sm font-medium whitespace-nowrap outline-none select-none focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:h-9 any-pointer-coarse:text-base any-pointer-coarse:after:absolute any-pointer-coarse:after:inset-x-0 any-pointer-coarse:after:-inset-y-1 any-pointer-coarse:group-data-[orientation=vertical]/menubar:after:inset-y-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarPopup({
	className,
	align = "start",
	alignOffset = -5,
	side,
	sideOffset = 9,
	anchor,
	dir,
	portalProps,
	...props
}: Omit<BaseMenu.Popup.Props, "className"> &
	Pick<
		BaseMenu.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset" | "anchor"
	> & {
		className?: string;
		portalProps?: BaseMenu.Portal.Props;
	}) {
	return (
		<BaseMenu.Portal data-slot="menubar-portal" {...portalProps}>
			<BaseMenu.Positioner
				data-slot="menubar-positioner"
				className="z-50"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				anchor={anchor}
				dir={dir}
			>
				<BaseMenu.Popup
					data-slot="menubar-popup"
					className={cn(
						"bg-popover text-popover-foreground ease-out-quint dark:edge-highlight-lg max-h-(--available-height) min-w-32 overflow-x-hidden overflow-y-auto overscroll-contain rounded-lg border p-1 shadow-md transition-opacity duration-100 outline-none not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-md)] data-ending-style:opacity-0 data-instant:transition-none",
						className,
					)}
					{...props}
				/>
			</BaseMenu.Positioner>
		</BaseMenu.Portal>
	);
}

function MenubarGroup({ ...props }: BaseMenu.Group.Props) {
	return <BaseMenu.Group data-slot="menubar-group" {...props} />;
}

function MenubarGroupLabel({
	className,
	inset,
	...props
}: Omit<BaseMenu.GroupLabel.Props, "className"> & {
	className?: string;
	inset?: boolean;
}) {
	return (
		<BaseMenu.GroupLabel
			data-slot="menubar-group-label"
			data-inset={inset ? "" : undefined}
			className={cn(
				"text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:ps-8",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarItem({
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
			data-slot="menubar-item"
			data-inset={inset ? "" : undefined}
			data-variant={variant}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm wrap-anywhere outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarLinkItem({
	className,
	inset,
	...props
}: Omit<BaseMenu.LinkItem.Props, "className"> & {
	className?: string;
	inset?: boolean;
}) {
	return (
		<BaseMenu.LinkItem
			data-slot="menubar-link-item"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm wrap-anywhere outline-none select-none data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarCheckboxItem({
	className,
	children,
	...props
}: Omit<BaseMenu.CheckboxItem.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 ps-8 pe-2 text-sm wrap-anywhere outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span
				data-slot="menubar-checkbox-item-indicator-wrapper"
				className="pointer-events-none absolute start-2 flex size-4 items-center justify-center"
			>
				<BaseMenu.CheckboxItemIndicator data-slot="menubar-checkbox-item-indicator">
					<CheckIcon />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	);
}

function MenubarRadioGroup({ ...props }: BaseMenu.RadioGroup.Props) {
	return <BaseMenu.RadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarRadioItem({
	className,
	children,
	...props
}: Omit<BaseMenu.RadioItem.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm py-1 ps-8 pe-2 text-sm wrap-anywhere outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			<span
				data-slot="menubar-radio-item-indicator-wrapper"
				className="pointer-events-none absolute start-2 flex size-4 items-center justify-center"
			>
				<BaseMenu.RadioItemIndicator data-slot="menubar-radio-item-indicator">
					<CheckIcon />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	);
}

function MenubarSeparator({
	className,
	...props
}: Omit<BaseMenu.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMenu.Separator
			data-slot="menubar-separator"
			className={cn("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="menubar-shortcut"
			className={cn(
				"text-muted-foreground in-data-highlighted:text-accent-foreground ms-auto ps-4 font-sans text-xs tracking-widest [unicode-bidi:plaintext]",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarSub({ ...props }: BaseMenu.SubmenuRoot.Props) {
	return <BaseMenu.SubmenuRoot {...props} />;
}

function MenubarSubTrigger({
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
			data-slot="menubar-sub-trigger"
			data-inset={inset ? "" : undefined}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground relative flex min-h-7 cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm wrap-anywhere outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:ps-8 any-pointer-coarse:min-h-9 any-pointer-coarse:text-base [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ms-auto -me-0.5 rtl:rotate-180" />
		</BaseMenu.SubmenuTrigger>
	);
}

function MenubarSubPopup({
	className,
	align = "start",
	alignOffset = -5,
	side = "inline-end",
	sideOffset = 0,
	...props
}: React.ComponentProps<typeof MenubarPopup>) {
	return (
		<MenubarPopup
			className={cn("data-starting-style:opacity-0", className)}
			align={align}
			alignOffset={alignOffset}
			side={side}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export {
	Menubar,
	MenubarCheckboxItem,
	MenubarGroup,
	MenubarGroupLabel,
	MenubarItem,
	MenubarLinkItem,
	MenubarMenu,
	MenubarPopup,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubPopup,
	MenubarSubTrigger,
	MenubarTrigger,
};
