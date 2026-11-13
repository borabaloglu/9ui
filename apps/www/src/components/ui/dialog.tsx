import type * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root {...props} />;
}

function DialogTrigger({
	...props
}: React.ComponentProps<typeof BaseDialog.Trigger>) {
	return <BaseDialog.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose({
	...props
}: React.ComponentProps<typeof BaseDialog.Close>) {
	return <BaseDialog.Close data-slot="dialog-close" {...props} />;
}

function DialogBackdrop({
	className,
	...props
}: React.ComponentProps<typeof BaseDialog.Backdrop>) {
	return (
		<BaseDialog.Backdrop
			data-slot="dialog-backdrop"
			className={cn(
				"fixed inset-0 z-50 min-h-dvh bg-black/30 transition-opacity duration-200 has-[+*>.transition-none]:transition-none data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute",
				className,
			)}
			{...props}
		/>
	);
}

function DialogPopup({
	className,
	children,
	size = "default",
	showAtBottomOnMobile = true,
	showCloseButton = true,
	...props
}: React.ComponentProps<typeof BaseDialog.Popup> & {
	size?: "default" | "sm";
	showAtBottomOnMobile?: boolean;
	showCloseButton?: boolean;
}) {
	return (
		<BaseDialog.Portal data-slot="dialog-portal">
			<DialogBackdrop />
			<BaseDialog.Viewport
				data-slot="dialog-viewport"
				className={cn(
					"fixed inset-0 z-50 flex items-center justify-center p-4",
					showAtBottomOnMobile && "max-sm:items-end max-sm:p-0 max-sm:pt-12",
				)}
			>
				<BaseDialog.Popup
					data-slot="dialog-popup"
					data-size={size}
					className={cn(
						"group/dialog-popup bg-popover text-popover-foreground ease-out-quint relative grid max-h-full w-full scale-[calc(1-0.1*var(--nested-dialogs))] gap-(--dialog-spacing) overflow-y-auto overscroll-contain rounded-(--dialog-radius) border bg-size-[var(--dialog-radius)_var(--dialog-radius),var(--dialog-radius)_var(--dialog-radius),calc(100%-2*var(--dialog-radius))_1px] bg-position-[0_0,100%_0,50%_0] bg-no-repeat bg-origin-border p-(--dialog-spacing) pb-(--dialog-bottom) text-sm shadow-lg transition-[scale,opacity,translate,filter] duration-200 outline-none [--dialog-bottom:var(--dialog-spacing)] [--dialog-radius:var(--radius-xl)] [--dialog-spacing:--spacing(4)] not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-150 data-nested-dialog-open:brightness-90 data-starting-style:scale-96 data-starting-style:opacity-0 data-[size=sm]:[--dialog-spacing:--spacing(3)] motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:bg-[radial-gradient(circle_at_var(--dialog-radius)_calc(var(--dialog-radius)+1px),transparent_calc(var(--dialog-radius)-0.5px),--theme(--color-white/8%)_calc(var(--dialog-radius)+0.5px)),radial-gradient(circle_at_0_calc(var(--dialog-radius)+1px),transparent_calc(var(--dialog-radius)-0.5px),--theme(--color-white/8%)_calc(var(--dialog-radius)+0.5px)),linear-gradient(--theme(--color-white/8%),--theme(--color-white/8%))] dark:data-nested-dialog-open:brightness-75",
						size === "sm" ? "max-w-xs" : "max-w-sm",
						showAtBottomOnMobile &&
							"max-sm:max-w-none max-sm:scale-100 max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:duration-300 max-sm:[--dialog-bottom:calc(var(--dialog-spacing)+env(safe-area-inset-bottom))] max-sm:data-ending-style:scale-100 max-sm:data-ending-style:duration-200 max-sm:data-nested-dialog-open:opacity-0 max-sm:data-starting-style:scale-100 motion-safe:max-sm:data-ending-style:translate-y-full motion-safe:max-sm:data-ending-style:opacity-100 motion-safe:max-sm:data-starting-style:translate-y-full motion-safe:max-sm:data-starting-style:opacity-100",
						className,
					)}
					{...props}
				>
					{children}
					{showCloseButton && (
						<BaseDialog.Close
							data-slot="dialog-close"
							aria-label="Close"
							render={
								<Button
									variant="ghost"
									size="icon-sm"
									className="absolute end-2 top-2"
								/>
							}
						>
							<XIcon />
						</BaseDialog.Close>
					)}
				</BaseDialog.Popup>
			</BaseDialog.Viewport>
		</BaseDialog.Portal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn(
				"flex flex-col gap-1.5 group-has-[>[data-slot=dialog-close]]/dialog-popup:pe-8",
				className,
			)}
			{...props}
		/>
	);
}

function DialogFooter({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	variant?: "default" | "bare";
}) {
	return (
		<div
			data-slot="dialog-footer"
			data-variant={variant}
			className={cn(
				"flex flex-col-reverse gap-2 group-data-[size=sm]/dialog-popup:grid group-data-[size=sm]/dialog-popup:grid-cols-2 sm:flex-row sm:justify-end",
				variant === "default" &&
					"bg-muted/50 -mx-(--dialog-spacing) -mb-(--dialog-bottom) border-t p-(--dialog-spacing) pb-(--dialog-bottom)",
				className,
			)}
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
			className={cn("text-base leading-snug font-medium", className)}
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
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground text-sm text-pretty *:[a]:underline *:[a]:underline-offset-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogBackdrop,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
};
