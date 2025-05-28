import * as React from "react"
import { EmojiPicker as BaseEmojiPicker } from "frimousse"
import { Search } from "lucide-react"

import { InputIcon } from "@/components/ui/input"

import { cn } from "@/lib/utils"

const EmojiPicker = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseEmojiPicker.Root>
>(({ className, ...props }, ref) => {
	return (
		<BaseEmojiPicker.Root
			ref={ref}
			className={cn(
				"isolate flex h-80 w-fit flex-col rounded-md border bg-popover shadow-md",
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
			<InputIcon side="leading">
				<Search className="size-4" />
			</InputIcon>
			<BaseEmojiPicker.Search
				ref={ref}
				className={cn(
					"h-9 w-full appearance-none rounded-md border bg-input pl-10 pr-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:placeholder:text-destructive aria-[invalid=true]:focus:ring-destructive/50 md:text-sm",
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
				"absolute inset-0 flex items-center justify-center text-sm text-muted-foreground",
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
				"absolute inset-0 flex items-center justify-center text-sm text-muted-foreground",
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
			className={cn("select-none pb-2", className)}
			components={{
				CategoryHeader: ({ category, ...props }) => (
					<div
						className="bg-popover px-3 py-2 text-xs font-medium text-muted-foreground"
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
						className="flex size-8 items-center justify-center rounded-md text-lg data-[active]:bg-accent"
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
				"m-2 size-8 rounded-lg bg-popover text-lg font-medium text-muted-foreground hover:bg-accent",
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
