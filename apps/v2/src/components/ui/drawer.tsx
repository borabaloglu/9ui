"use client"

import * as React from "react"
import { Drawer as BaseDrawer } from "vaul-base"

import { cn } from "@/lib/utils"

const DrawerTrigger = BaseDrawer.Trigger

const DrawerPortal = BaseDrawer.Portal

const DrawerClose = BaseDrawer.Close

const Drawer = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof BaseDrawer.Root>) => (
	<BaseDrawer.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

const DrawerBackdrop = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Overlay>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Overlay>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Overlay
		ref={ref}
		className={cn("fixed inset-0 z-50 bg-black/70", className)}
		{...props}
	/>
))
DrawerBackdrop.displayName = "DrawerBackdrop"

const DrawerContent = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Content>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Content>
>(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerBackdrop />
		<BaseDrawer.Content
			ref={ref}
			className={cn(
				"fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col rounded-t-lg border bg-popover text-popover-foreground outline-none",
				className
			)}
			{...props}
		>
			<div className="mx-auto mt-4 h-2 w-20 rounded-full bg-muted" />
			{children}
		</BaseDrawer.Content>
	</DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("grid gap-1.5 p-4", className)} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn("mt-auto flex flex-col gap-2 p-4", className)}
		{...props}
	/>
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Title>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Title
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Description>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Description>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
))
DrawerDescription.displayName = "DrawerDescription"

export {
	Drawer,
	DrawerPortal,
	DrawerBackdrop,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
}
