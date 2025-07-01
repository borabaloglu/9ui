"use client"

import * as React from "react"
import { Dialog as BaseDialog } from "@base-ui-components/react"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root data-slot="dialog" {...props} />
}

function DialogPortal({
	...props
}: React.ComponentProps<typeof BaseDialog.Portal>) {
	return <BaseDialog.Portal data-slot="dialog-portal" {...props} />
}

function DialogTrigger({
	...props
}: React.ComponentProps<typeof BaseDialog.Trigger>) {
	return <BaseDialog.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogClose({
	...props
}: React.ComponentProps<typeof BaseDialog.Close>) {
	return <BaseDialog.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Backdrop>) {
	return (
		<BaseDialog.Backdrop
			data-slot="dialog-overlay"
			className={cn(
				"fixed inset-0 bg-black/50 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
				className
			)}
			{...props}
		/>
	)
}

function DialogContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<BaseDialog.Popup
				data-slot="dialog-content"
				className={cn(
          'bg-popover text-popover-foreground fixed z-50 grid w-full sm:max-w-[calc(100%-2rem)]',
          'gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg sm:scale-[calc(1-0.1*var(--nested-dialogs))]',
          'fixed bottom-0 w-full sm:top-[50%] sm:bottom-auto sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]',
          'duration-200',
          'data-[starting-style]:translate-y-full data-[starting-style]:opacity-0',
          'data-[ending-style]:translate-y-full data-[ending-style]:opacity-0',
          'data-[starting-style]:sm:translate-y-[-50%] data-[starting-style]:sm:scale-95',
          'data-[ending-style]:sm:translate-y-[-50%] data-[ending-style]:sm:scale-95',
          className,
				)}
				{...props}
			>
				{children}
				<BaseDialog.Close className="ring-offset-popover focus:ring-ring text-muted-foreground absolute top-4 right-4 rounded-xs opacity-50 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
					<XIcon />
					<span className="sr-only">Close</span>
				</BaseDialog.Close>
			</BaseDialog.Popup>
		</DialogPortal>
	)
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	)
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className
			)}
			{...props}
		/>
	)
}

function DialogTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
	return (
		<BaseDialog.Title
			data-slot="dialog-title"
			className={cn("text-lg leading-none font-semibold", className)}
			{...props}
		/>
	)
}

function DialogDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
	return (
		<BaseDialog.Description
			data-slot="dialog-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	)
}

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}
