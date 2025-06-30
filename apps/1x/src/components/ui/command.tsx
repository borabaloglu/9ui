"use client"

import * as React from "react"
import { Command as CommandBase } from "cmdk-base"
import { Search } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

const Command = React.forwardRef<
	React.ElementRef<typeof CommandBase>,
	React.ComponentPropsWithoutRef<typeof CommandBase>
>(({ className, ...props }, ref) => (
	<CommandBase
		ref={ref}
		className={cn(
			"flex size-full flex-col overflow-hidden rounded-lg border bg-popover text-popover-foreground outline-none",
			className
		)}
		{...props}
	/>
))
Command.displayName = "Command"

const CommandDialog = ({
	children,
	...props
}: React.ComponentProps<typeof Dialog>) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden border-none p-0 sm:max-w-[600px] [&_[data-dialog-close]]:hidden">
				<Command>{children}</Command>
			</DialogContent>
		</Dialog>
	)
}
CommandDialog.displayName = "CommandDialog"

const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandBase.Input>,
	React.ComponentPropsWithoutRef<typeof CommandBase.Input>
>(({ className, ...props }, ref) => (
	<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
		<Search className="mr-2 size-4 shrink-0 opacity-50" />
		<CommandBase.Input
			ref={ref}
			className={cn(
				"flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		/>
	</div>
))
CommandInput.displayName = "CommandInput"

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandBase.List>,
	React.ComponentPropsWithoutRef<typeof CommandBase.List>
>(({ className, ...props }, ref) => (
	<CommandBase.List
		ref={ref}
		className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
		{...props}
	/>
))
CommandList.displayName = "CommandList"

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandBase.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandBase.Empty>
>((props, ref) => (
	<CommandBase.Empty
		ref={ref}
		className="py-6 text-center text-sm"
		{...props}
	/>
))

CommandEmpty.displayName = "CommandEmpty"

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandBase.Group>,
	React.ComponentPropsWithoutRef<typeof CommandBase.Group>
>(({ className, ...props }, ref) => (
	<CommandBase.Group
		ref={ref}
		className={cn(
			"overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
			className
		)}
		{...props}
	/>
))
CommandGroup.displayName = "CommandGroup"

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandBase.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandBase.Separator>
>(({ className, ...props }, ref) => (
	<CommandBase.Separator
		ref={ref}
		className={cn("-mx-1 h-px bg-border", className)}
		{...props}
	/>
))
CommandSeparator.displayName = "CommandSeparator"

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandBase.Item>,
	React.ComponentPropsWithoutRef<typeof CommandBase.Item>
>(({ className, ...props }, ref) => (
	<CommandBase.Item
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
			className
		)}
		{...props}
	/>
))
CommandItem.displayName = "CommandItem"

const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				"ml-auto flex items-center gap-1 text-xs tracking-widest text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
}
CommandShortcut.displayName = "CommandShortcut"

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
}
