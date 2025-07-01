import * as React from "react"
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog"

import { cn } from "@/lib/utils"

function AlertDialog({
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Root>) {
	return <BaseAlertDialog.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
	return <BaseAlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Portal>) {
	return <BaseAlertDialog.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogClose({
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Close>) {
	return <BaseAlertDialog.Close data-slot="alert-dialog-close" {...props} />
}

function AlertDialogOverlay({
	className,
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Backdrop>) {
	return (
		<BaseAlertDialog.Backdrop
			data-slot="alert-dialog-overlay"
			className={cn(
				"fixed inset-0 bg-black/50 transition-all duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
				className
			)}
			{...props}
		/>
	)
}

function AlertDialogContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<BaseAlertDialog.Popup
				data-slot="alert-dialog-content"
				className={cn(
					"bg-popover text-popover-foreground fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 sm:max-w-lg",
					className
				)}
				{...props}
			>
				{children}
			</BaseAlertDialog.Popup>
		</AlertDialogPortal>
	)
}

function AlertDialogHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	)
}

function AlertDialogFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className
			)}
			{...props}
		/>
	)
}

function AlertDialogTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Title>) {
	return (
		<BaseAlertDialog.Title
			data-slot="alert-dialog-title"
			className={cn("text-lg font-semibold", className)}
			{...props}
		/>
	)
}

function AlertDialogDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseAlertDialog.Description>) {
	return (
		<BaseAlertDialog.Description
			data-slot="alert-dialog-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	)
}

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogClose,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
}
