import type * as React from "react";

import {
	Autocomplete,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteSeparator,
} from "@/components/ui/autocomplete";
import {
	Dialog,
	DialogDescription,
	DialogHeader,
	DialogPopup,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

function Command({
	className,
	children,
	...props
}: React.ComponentProps<typeof Autocomplete> & {
	className?: string;
}) {
	return (
		<Autocomplete
			autoHighlight="always"
			keepHighlight
			loopFocus={false}
			open
			inline
			{...props}
		>
			<div
				data-slot="command"
				className={cn(
					"bg-popover text-popover-foreground flex min-h-0 w-full flex-col overflow-hidden rounded-xl border shadow-md",
					className,
				)}
			>
				{children}
			</div>
		</Autocomplete>
	);
}

function CommandDialog({
	title = "Command Palette",
	description = "Search for a command to run...",
	className,
	showAtBottomOnMobile = false,
	showCloseButton = false,
	children,
	...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> &
	Pick<
		React.ComponentProps<typeof DialogPopup>,
		"showAtBottomOnMobile" | "showCloseButton"
	> & {
		title?: string;
		description?: string;
		className?: string;
		children?: React.ReactNode;
	}) {
	return (
		<Dialog {...props}>
			<DialogPopup
				className={cn(
					"flex max-w-lg flex-col gap-0 overflow-hidden p-0 *:data-[slot=command]:rounded-none *:data-[slot=command]:border-0 *:data-[slot=command]:bg-transparent *:data-[slot=command]:shadow-none sm:mt-[10vh] sm:max-h-[calc(100%-10vh)]",
					"transition-none",
					showAtBottomOnMobile ? "sm:self-start" : "self-start",
					className,
				)}
				showAtBottomOnMobile={showAtBottomOnMobile}
				showCloseButton={showCloseButton}
			>
				<DialogHeader className="sr-only">
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogPopup>
		</Dialog>
	);
}

function CommandInput({
	...props
}: React.ComponentProps<typeof AutocompleteInput>) {
	return <AutocompleteInput data-slot="command-input" {...props} />;
}

function CommandList({
	className,
	scrollbarGutter = false,
	...props
}: React.ComponentProps<typeof AutocompleteList> & {
	scrollbarGutter?: boolean;
}) {
	return (
		<ScrollArea
			scrollbarGutter={scrollbarGutter}
			className={cn("max-h-75 min-h-0", className)}
		>
			<AutocompleteList
				data-slot="command-list"
				className={cn(
					"flex-none overflow-y-visible",
					scrollbarGutter && "not-empty:in-data-has-overflow-y:pe-0",
				)}
				{...props}
			/>
		</ScrollArea>
	);
}

function CommandEmpty({
	className,
	...props
}: React.ComponentProps<typeof AutocompleteEmpty>) {
	return (
		<AutocompleteEmpty
			data-slot="command-empty"
			className={cn("not-empty:py-6", className)}
			{...props}
		/>
	);
}

function CommandGroup({
	...props
}: React.ComponentProps<typeof AutocompleteGroup>) {
	return <AutocompleteGroup data-slot="command-group" {...props} />;
}

function CommandGroupLabel({
	...props
}: React.ComponentProps<typeof AutocompleteGroupLabel>) {
	return <AutocompleteGroupLabel data-slot="command-group-label" {...props} />;
}

function CommandCollection({
	...props
}: React.ComponentProps<typeof AutocompleteCollection>) {
	return <AutocompleteCollection {...props} />;
}

function CommandItem({
	className,
	...props
}: React.ComponentProps<typeof AutocompleteItem>) {
	return (
		<AutocompleteItem
			data-slot="command-item"
			className={cn(
				"data-highlighted:**:data-[slot=kbd]:bg-background min-h-8 scroll-my-1 [&>svg:not([class*='opacity-'])]:opacity-80",
				className,
			)}
			{...props}
		/>
	);
}

function CommandSeparator({
	...props
}: React.ComponentProps<typeof AutocompleteSeparator>) {
	return <AutocompleteSeparator data-slot="command-separator" {...props} />;
}

function CommandShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="command-shortcut"
			className={cn(
				"text-muted-foreground ml-auto inline-flex items-center gap-1 pl-4 font-sans text-xs tracking-widest",
				className,
			)}
			{...props}
		/>
	);
}

function CommandFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="command-footer"
			className={cn(
				"bg-muted/50 text-muted-foreground flex items-center gap-2 border-t px-3 py-2 text-xs",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Command,
	CommandCollection,
	CommandDialog,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandGroupLabel,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
};
