import * as React from "react"
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog"

import { cn } from "@/lib/utils"

const AlertDialog = BaseAlertDialog.Root

const AlertDialogTrigger = BaseAlertDialog.Trigger

const AlertDialogClose = BaseAlertDialog.Close

const AlertDialogBackdrop = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Backdrop
		ref={ref}
		className={cn(
			"fixed inset-0 h-dvh bg-black/70 transition-all [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
			className
		)}
		{...props}
	/>
))
AlertDialogBackdrop.displayName = "AlertDialogBackdrop"

const AlertDialogContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<BaseAlertDialog.Portal>
		<AlertDialogBackdrop />
		<BaseAlertDialog.Popup
			ref={ref}
			className={cn(
				"fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-md border bg-popover p-4 text-popover-foreground shadow-sm duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:max-w-96",
				className
			)}
			{...props}
		>
			{children}
		</BaseAlertDialog.Popup>
	</BaseAlertDialog.Portal>
))
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col space-y-2", className)} {...props} />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Title
		ref={ref}
		className={cn("text-lg font-semibold text-foreground", className)}
		{...props}
	/>
))
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
))
AlertDialogDescription.displayName = "AlertDialogDescription"

export {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogClose,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
}
