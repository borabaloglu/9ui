"use client"

import * as React from "react"
import { Dialog as BaseDialog } from "@base-ui-components/react"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = BaseDialog.Root

const DialogPortal = BaseDialog.Portal

const DialogClose = BaseDialog.Close

const DialogTrigger = BaseDialog.Trigger

const DialogBackdrop = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseDialog.Backdrop
		ref={ref}
		className={cn(
			"fixed inset-0 h-dvh bg-black/70 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
			className
		)}
		{...props}
	/>
))

DialogBackdrop.displayName = BaseDialog.Backdrop.displayName

const DialogContent = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogBackdrop />
		<BaseDialog.Popup
			ref={ref}
			className={cn(
				"fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:max-w-96",
				className
			)}
			{...props}
		>
			{children}
			<DialogClose
				data-dialog-close
				className="absolute right-4 top-4 rounded-sm text-muted-foreground opacity-50 transition-opacity hover:opacity-100 focus:outline-none"
			>
				<XIcon className="size-4 text-current" />
				<span className="sr-only">Close</span>
			</DialogClose>
		</BaseDialog.Popup>
	</DialogPortal>
))

DialogContent.displayName = "DialogContent"

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col gap-2", className)} {...props} />
)

DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
			className
		)}
		{...props}
	/>
)

DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseDialog.Title
		ref={ref}
		className={cn("text-lg font-semibold text-foreground", className)}
		{...props}
	/>
))

DialogTitle.displayName = BaseDialog.Title.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseDialog.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
))

DialogDescription.displayName = BaseDialog.Description.displayName

export {
	Dialog,
	DialogPortal,
	DialogBackdrop,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}
