"use client";

import type * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

function Dialog(props: React.ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof BaseDialog.Trigger>) {
	return <BaseDialog.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose(props: React.ComponentProps<typeof BaseDialog.Close>) {
	return <BaseDialog.Close data-slot="dialog-close" {...props} />;
}

function DialogPopup({
	className,
	children,
	...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
	return (
		<BaseDialog.Portal data-slot="dialog-portal">
			<BaseDialog.Backdrop
				data-slot="dialog-backdrop"
				className="skin-dialog-backdrop fixed inset-0 z-50 min-h-dvh"
			/>
			<BaseDialog.Viewport
				data-slot="dialog-viewport"
				className="fixed inset-0 z-50 flex items-center justify-center p-4"
			>
				<BaseDialog.Popup
					data-slot="dialog-popup"
					className={cn(
						"group/dialog-popup skin-dialog-popup relative grid max-h-full w-full max-w-sm gap-(--dialog-spacing) p-(--dialog-spacing) outline-none",
						className,
					)}
					{...props}
				>
					{children}
				</BaseDialog.Popup>
			</BaseDialog.Viewport>
		</BaseDialog.Portal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("skin-dialog-header flex flex-col", className)}
			{...props}
		/>
	);
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn("skin-dialog-footer flex justify-end", className)}
			{...props}
		/>
	);
}

function DialogTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
	return (
		<BaseDialog.Title
			data-slot="dialog-title"
			className={cn("skin-dialog-title", className)}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
	return (
		<BaseDialog.Description
			data-slot="dialog-description"
			className={cn("skin-dialog-description", className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
};
