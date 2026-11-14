"use client";

import type * as React from "react";
import {
	EmojiPicker as BaseEmojiPicker,
	type EmojiPickerListCategoryHeaderProps,
	type EmojiPickerListEmojiProps,
	type EmojiPickerListRowProps,
} from "frimousse";
import { SearchIcon } from "lucide-react";

import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

import { cn } from "@/lib/utils";

function EmojiPicker({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Root>) {
	return (
		<BaseEmojiPicker.Root
			data-slot="emoji-picker"
			className={cn(
				"bg-popover text-popover-foreground isolate flex h-84 w-fit max-w-full flex-col overflow-hidden rounded-xl border shadow-md in-data-[slot=popover-popup]:rounded-none in-data-[slot=popover-popup]:border-0 in-data-[slot=popover-popup]:bg-transparent in-data-[slot=popover-popup]:shadow-none",
				className,
			)}
			{...props}
		/>
	);
}

function EmojiPickerSearch({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Search>) {
	return (
		<InputGroup
			data-slot="emoji-picker-search"
			className={cn("z-1 m-1 mb-0 w-auto shrink-0", className)}
		>
			<InputGroupAddon>
				<SearchIcon />
			</InputGroupAddon>
			<BaseEmojiPicker.Search
				data-slot="input-group-control"
				aria-label="Search emoji"
				className="placeholder:text-muted-foreground h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none disabled:cursor-not-allowed any-pointer-coarse:text-base [&::-webkit-search-cancel-button]:appearance-none"
				{...props}
			/>
		</InputGroup>
	);
}

function EmojiPickerContent({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Viewport>) {
	return (
		<BaseEmojiPicker.Viewport
			data-slot="emoji-picker-content"
			className={cn(
				"relative min-h-0 flex-1 [scrollbar-width:thin] [scrollbar-color:--alpha(var(--color-foreground)/20%)_transparent] outline-none",
				className,
			)}
			{...props}
		/>
	);
}

function EmojiPickerLoading({
	className,
	children = <Spinner />,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Loading>) {
	return (
		<BaseEmojiPicker.Loading
			data-slot="emoji-picker-loading"
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center text-sm",
				className,
			)}
			{...props}
		>
			{children}
		</BaseEmojiPicker.Loading>
	);
}

function EmojiPickerEmpty({
	className,
	children = "No emoji found.",
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Empty>) {
	return (
		<BaseEmojiPicker.Empty
			data-slot="emoji-picker-empty"
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center p-2 text-center text-sm wrap-break-word any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		>
			{children}
		</BaseEmojiPicker.Empty>
	);
}

function EmojiPickerCategoryHeader({
	category,
	...props
}: EmojiPickerListCategoryHeaderProps) {
	return (
		<div
			data-slot="emoji-picker-category-header"
			className="bg-popover text-muted-foreground px-3 pt-2.5 pb-1.5 text-xs font-medium"
			{...props}
		>
			{category.label}
		</div>
	);
}

function EmojiPickerRow({ children, ...props }: EmojiPickerListRowProps) {
	return (
		<div data-slot="emoji-picker-row" className="scroll-my-1 px-1" {...props}>
			{children}
		</div>
	);
}

function EmojiPickerEmoji({ emoji, ...props }: EmojiPickerListEmojiProps) {
	return (
		<button
			type="button"
			data-slot="emoji-picker-emoji"
			className="data-active:bg-accent flex h-8 w-8 min-w-0 cursor-pointer items-center justify-center rounded-md text-lg transition-[scale] duration-100 ease-out outline-none motion-safe:active:scale-95 any-pointer-coarse:h-10 any-pointer-coarse:w-10 any-pointer-coarse:text-xl"
			{...props}
		>
			{emoji.emoji}
		</button>
	);
}

function EmojiPickerList({
	className,
	components,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.List>) {
	return (
		<BaseEmojiPicker.List
			data-slot="emoji-picker-list"
			className={cn("pb-1 select-none", className)}
			components={{
				CategoryHeader: EmojiPickerCategoryHeader,
				Row: EmojiPickerRow,
				Emoji: EmojiPickerEmoji,
				...components,
			}}
			{...props}
		/>
	);
}

function EmojiPickerFooter({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="emoji-picker-footer"
			className={cn(
				"bg-muted/50 text-muted-foreground flex w-full max-w-(--frimousse-viewport-width) min-w-0 shrink-0 items-center gap-1 border-t p-1 text-xs",
				className,
			)}
			{...props}
		/>
	);
}

function EmojiPickerPreview({
	className,
	children = "Select an emoji…",
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="emoji-picker-preview"
			className={cn("flex h-8 min-w-0 flex-1 items-center", className)}
			{...props}
		>
			<BaseEmojiPicker.ActiveEmoji>
				{({ emoji }) =>
					emoji ? (
						<>
							<span className="flex size-8 shrink-0 items-center justify-center font-(family-name:--frimousse-emoji-font) text-lg">
								{emoji.emoji}
							</span>
							<span className="text-foreground truncate ps-1 pe-2">
								{emoji.label}
							</span>
						</>
					) : (
						<span className="truncate px-2">{children}</span>
					)
				}
			</BaseEmojiPicker.ActiveEmoji>
		</div>
	);
}

function EmojiPickerSkinToneSelector({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.SkinToneSelector>) {
	return (
		<BaseEmojiPicker.SkinToneSelector
			data-slot="emoji-picker-skin-tone-selector"
			className={cn(
				"hover:bg-accent focus-visible:ring-ring/50 ms-auto flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md font-(family-name:--frimousse-emoji-font) text-lg transition-[scale] duration-100 ease-out outline-none focus-visible:ring-3 motion-safe:active:scale-95",
				className,
			)}
			{...props}
		/>
	);
}

export {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerEmpty,
	EmojiPickerFooter,
	EmojiPickerList,
	EmojiPickerLoading,
	EmojiPickerPreview,
	EmojiPickerSearch,
	EmojiPickerSkinToneSelector,
};
