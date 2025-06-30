"use client"

import * as React from "react"
import { Dialog as BaseSheet } from "@base-ui-components/react/dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof BaseSheet.Root>) {
	return <BaseSheet.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
	...props
}: React.ComponentProps<typeof BaseSheet.Trigger>) {
	return <BaseSheet.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
	...props
}: React.ComponentProps<typeof BaseSheet.Close>) {
	return <BaseSheet.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
	...props
}: React.ComponentProps<typeof BaseSheet.Portal>) {
	return <BaseSheet.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Backdrop>) {
	return (
		<BaseSheet.Backdrop
			data-slot="sheet-overlay"
			className={cn(
				"fixed inset-0 z-50 bg-black/50 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
				className
			)}
			{...props}
		/>
	)
}

function SheetContent({
	className,
	children,
	side = "right",
	...props
}: React.ComponentProps<typeof BaseSheet.Popup> & {
	side?: "top" | "right" | "bottom" | "left"
}) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<BaseSheet.Popup
				data-slot="sheet-content"
				className={cn(
					"bg-popover text-popover-foreground fixed z-50 flex max-h-[calc(100vh-2rem)] flex-col gap-4 rounded-lg shadow-lg outline-hidden transition ease-in-out data-closed:duration-300 data-open:duration-500",
					side === "right" &&
						"inset-y-0 top-4 right-0 h-full w-3/4 origin-right -translate-x-4 border sm:max-w-sm [&[data-ending-style]]:translate-x-full [&[data-starting-style]]:translate-x-full",
					side === "left" &&
						"inset-y-0 top-4 left-0 h-full w-3/4 origin-left translate-x-4 border sm:max-w-sm [&[data-ending-style]]:-translate-x-full [&[data-starting-style]]:-translate-x-full",
					side === "top" &&
						"inset-x-0 top-0 mx-auto h-auto w-[calc(100vw-2rem)] origin-top translate-y-4 border [&[data-ending-style]]:-translate-y-full [&[data-starting-style]]:-translate-y-full",
					side === "bottom" &&
						"inset-x-0 bottom-0 mx-auto h-auto w-[calc(100vw-2rem)] origin-bottom -translate-y-4 border [&[data-ending-style]]:translate-y-full [&[data-starting-style]]:translate-y-full",
					className
				)}
				{...props}
			>
				{children}
				<SheetClose className="ring-offset-popover focus:ring-ring text-muted-foreground absolute top-4 right-4 rounded-xs opacity-50 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
					<XIcon className="size-4" />
					<span className="sr-only">Close</span>
				</SheetClose>
			</BaseSheet.Popup>
		</SheetPortal>
	)
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-header"
			className={cn("flex flex-col gap-1.5 p-4", className)}
			{...props}
		/>
	)
}

function SheetTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Title>) {
	return (
		<BaseSheet.Title
			data-slot="sheet-title"
			className={cn("text-foreground font-semibold", className)}
			{...props}
		/>
	)
}

function SheetDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Description>) {
	return (
		<BaseSheet.Description
			data-slot="sheet-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	)
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-footer"
			className={cn("mt-auto flex flex-col gap-2 p-4", className)}
			{...props}
		/>
	)
}

export {
	Sheet,
	SheetOverlay,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
}
