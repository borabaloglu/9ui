import * as React from "react"
import { EmojiPicker as BaseEmojiPicker } from "frimousse"

import { cn } from "@/lib/utils"

function EmojiPicker({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Root>) {
	return (
		<BaseEmojiPicker.Root
			data-slot="emoji-picker"
			className={cn(
				"bg-popover isolate flex h-80 w-fit flex-col rounded-md border shadow-md",
				className
			)}
			{...props}
		/>
	)
}

function EmojiPickerSearch({
	className,
	wrapperClassName,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Search> & {
	wrapperClassName?: string
}) {
	return (
		<div
			data-slot="emoji-picker-search-wrapper"
			className={cn("p-2", wrapperClassName)}
		>
			<BaseEmojiPicker.Search
				className={cn(
					"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input hover:border-ring/70 z-50 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-destructive/50 aria-invalid:border-destructive",
					className
				)}
				{...props}
			/>
		</div>
	)
}

function EmojiPickerContent({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Viewport>) {
	return (
		<BaseEmojiPicker.Viewport
			data-slot="emoji-picker-content"
			className={cn("relative flex-1 outline-hidden", className)}
			{...props}
		/>
	)
}

function EmojiPickerLoading({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Loading>) {
	return (
		<BaseEmojiPicker.Loading
			data-slot="emoji-picker-loading"
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center text-sm",
				className
			)}
			{...props}
		/>
	)
}

function EmojiPickerEmpty({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.Empty>) {
	return (
		<BaseEmojiPicker.Empty
			data-slot="emoji-picker-empty"
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center text-sm",
				className
			)}
			{...props}
		/>
	)
}

function EmojiPickerList({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.List>) {
	return (
		<BaseEmojiPicker.List
			data-slot="emoji-picker-list"
			className={cn("pb-2 select-none", className)}
			components={{
				CategoryHeader: ({ category, ...props }) => (
					<div
						data-slot="emoji-picker-list-category-header"
						className="bg-popover text-muted-foreground px-3 pb-1.5 text-xs font-medium"
						{...props}
					>
						{category.label}
					</div>
				),
				Row: ({ children, ...props }) => (
					<div
						data-slot="emoji-picker-list-row"
						className="scroll-my-1.5 px-1.5"
						{...props}
					>
						{children}
					</div>
				),
				Emoji: ({ emoji, ...props }) => (
					<button
						data-slot="emoji-picker-list-emoji"
						className="data-active:bg-accent flex size-8 items-center justify-center rounded-md text-lg"
						{...props}
					>
						{emoji.emoji}
					</button>
				),
			}}
			{...props}
		/>
	)
}

function EmojiPickerSkinToneSelector({
	className,
	...props
}: React.ComponentProps<typeof BaseEmojiPicker.SkinToneSelector>) {
	return (
		<BaseEmojiPicker.SkinToneSelector
			data-slot="emoji-picker-skin-tone-selector"
			className={cn(
				"bg-popover hover:bg-accent mx-2 mb-1.5 size-8 rounded-md text-lg",
				className
			)}
			{...props}
		/>
	)
}

export {
	EmojiPicker,
	EmojiPickerSearch,
	EmojiPickerContent,
	EmojiPickerLoading,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerSkinToneSelector,
}
