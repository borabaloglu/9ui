import * as React from "react"
import { EmojiPicker as BaseEmojiPicker } from "frimousse"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"

const EmojiPicker = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Root>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.Root
			ref={ref}
			className={cn(
				"bg-popover isolate flex h-80 w-fit flex-col rounded-md border shadow-md",
				className
			)}
			{...props}
		/>
	)
})
EmojiPicker.displayName = "EmojiPicker"

const EmojiPickerSearch = React.forwardRef<
	HTMLInputElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Search>
>(({ className, ...props }, ref) => {
	return (
		<div className="relative z-10 m-2">
			<Search className="size-4" />
			<BaseEmojiPicker.Search
				ref={ref}
				className={cn(
					"bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:placeholder:text-destructive aria-[invalid=true]:focus:ring-destructive/50 h-9 w-full appearance-none rounded-md border pr-3 pl-10 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className
				)}
				{...props}
			/>
		</div>
	)
})
EmojiPickerSearch.displayName = "EmojiPickerSearch"

const EmojiPickerContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Viewport>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.Viewport
			ref={ref}
			className={cn("relative flex-1 outline-none", className)}
			{...props}
		/>
	)
})
EmojiPickerContent.displayName = "EmojiPickerContent"

const EmojiPickerLoading = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Loading>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.Loading
			ref={ref}
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center text-sm",
				className
			)}
			{...props}
		/>
	)
})
EmojiPickerLoading.displayName = "EmojiPickerLoading"

const EmojiPickerEmpty = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Empty>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.Empty
			ref={ref}
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center text-sm",
				className
			)}
			{...props}
		/>
	)
})
EmojiPickerEmpty.displayName = "EmojiPickerEmpty"

const EmojiPickerList = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.List>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.List
			ref={ref}
			className={cn("pb-2 select-none", className)}
			components={{
				CategoryHeader: ({ category, ...props }) => (
					<div
						className="bg-popover text-muted-foreground px-3 py-2 text-xs font-medium"
						{...props}
					>
						{category.label}
					</div>
				),
				Row: ({ children, ...props }) => (
					<div className="scroll-my-1.5 px-2" {...props}>
						{children}
					</div>
				),
				Emoji: ({ emoji, ...props }) => (
					<button
						className="data-[active]:bg-accent flex size-8 items-center justify-center rounded-md text-lg"
						{...props}
					>
						{emoji.emoji}
					</button>
				),
			}}
			{...props}
		/>
	)
})
EmojiPickerList.displayName = "EmojiPickerList"

const EmojiPickerSkinToneSelector = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.SkinToneSelector>) => {
	return (
		<BaseEmojiPicker.SkinToneSelector
			className={cn(
				"bg-popover text-muted-foreground hover:bg-accent m-2 size-8 rounded-lg text-lg font-medium",
				className
			)}
			{...props}
		/>
	)
}
EmojiPickerSkinToneSelector.displayName = "EmojiPickerSkinToneSelector"

export {
	EmojiPicker,
	EmojiPickerSearch,
	EmojiPickerContent,
	EmojiPickerLoading,
	EmojiPickerEmpty,
	EmojiPickerList,
	EmojiPickerSkinToneSelector,
}
