import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";

import { cn } from "@/lib/utils";

function Toolbar({
	className,
	...props
}: Omit<BaseToolbar.Root.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseToolbar.Root
			data-slot="toolbar"
			className={cn(
				"bg-card text-card-foreground relative flex items-center gap-1.5 rounded-xl border p-1 shadow-xs not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] data-[orientation=vertical]:flex-col dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				className,
			)}
			{...props}
		/>
	);
}

function ToolbarGroup({
	className,
	...props
}: Omit<BaseToolbar.Group.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseToolbar.Group
			data-slot="toolbar-group"
			className={cn(
				"flex items-center gap-1 data-[orientation=vertical]:flex-col",
				className,
			)}
			{...props}
		/>
	);
}

function ToolbarSeparator({
	className,
	...props
}: Omit<BaseToolbar.Separator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseToolbar.Separator
			data-slot="toolbar-separator"
			className={cn(
				"bg-border shrink-0 self-stretch data-[orientation=horizontal]:mx-1.5 data-[orientation=horizontal]:h-px data-[orientation=vertical]:my-1.5 data-[orientation=vertical]:w-px",
				className,
			)}
			{...props}
		/>
	);
}

function ToolbarButton(props: BaseToolbar.Button.Props) {
	return <BaseToolbar.Button {...props} />;
}

function ToolbarInput(props: BaseToolbar.Input.Props) {
	return <BaseToolbar.Input {...props} />;
}

function ToolbarLink({
	className,
	...props
}: Omit<BaseToolbar.Link.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseToolbar.Link
			data-slot="toolbar-link"
			className={cn(
				"text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] duration-150 ease-out outline-none focus-visible:ring-3 any-pointer-coarse:h-9 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarInput,
	ToolbarLink,
	ToolbarSeparator,
};
