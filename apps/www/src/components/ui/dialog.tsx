import type * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root {...props} />;
}

function DialogTrigger({ ...props }: BaseDialog.Trigger.Props) {
	return <BaseDialog.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose({ ...props }: BaseDialog.Close.Props) {
	return <BaseDialog.Close data-slot="dialog-close" {...props} />;
}

function DialogBackdrop({
	className,
	...props
}: Omit<BaseDialog.Backdrop.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseDialog.Backdrop
			data-slot="dialog-backdrop"
			className={cn(
				"ease-out-quint fixed inset-0 z-50 min-h-dvh bg-black/30 transition-opacity duration-200 has-[+*>.transition-none]:transition-none data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute dark:bg-black/50",
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
}: Omit<BaseDialog.Popup.Props, "className"> & {
	className?: string;
	size?: "default" | "sm";
	showAtBottomOnMobile?: boolean;
	showCloseButton?: boolean;
}) {
	return (
		<BaseDialog.Portal data-slot="dialog-portal">
			<DialogBackdrop
				className={cn(
					showAtBottomOnMobile &&
						"motion-safe:max-sm:ease-drawer motion-safe:max-sm:duration-400 motion-safe:max-sm:data-ending-style:duration-250",
				)}
			/>
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
						"group/dialog-popup bg-popover text-popover-foreground ease-out-quint dark:edge-highlight-(--dialog-radius) relative grid max-h-full w-full scale-[calc(1-0.1*var(--nested-dialogs))] grid-cols-1 gap-(--dialog-spacing) overflow-y-auto overscroll-contain rounded-(--dialog-radius) border p-(--dialog-spacing) pb-(--dialog-bottom) text-sm shadow-lg transition-[scale,opacity,translate,filter] duration-200 outline-none [--dialog-bottom:var(--dialog-spacing)] [--dialog-radius:var(--radius-xl)] [--dialog-spacing:--spacing(4)] not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-150 data-nested-dialog-open:brightness-90 data-starting-style:scale-96 data-starting-style:opacity-0 data-[size=sm]:[--dialog-spacing:--spacing(3)] motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:data-nested-dialog-open:brightness-75",
						size === "sm" ? "max-w-xs" : "max-w-sm",
						showAtBottomOnMobile &&
							"motion-safe:max-sm:ease-drawer max-sm:max-w-none max-sm:scale-100 max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:[--dialog-bottom:calc(var(--dialog-spacing)+env(safe-area-inset-bottom))] max-sm:data-ending-style:scale-100 max-sm:data-nested-dialog-open:opacity-0 max-sm:data-starting-style:scale-100 motion-safe:max-sm:duration-400 motion-safe:max-sm:data-ending-style:translate-y-full motion-safe:max-sm:data-ending-style:opacity-100 motion-safe:max-sm:data-ending-style:duration-250 motion-safe:max-sm:data-starting-style:translate-y-full motion-safe:max-sm:data-starting-style:opacity-100",
						className,
					)}
					{...props}
				>
					{children}
					{showCloseButton && (
						<BaseDialog.Close
							data-slot="dialog-close-button"
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
				"flex flex-col gap-1.5 group-has-[>[data-slot=dialog-close-button]]/dialog-popup:pe-8",
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
}: Omit<BaseDialog.Title.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseDialog.Title
			data-slot="dialog-title"
			className={cn(
				"text-base leading-snug font-medium wrap-break-word",
				className,
			)}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: Omit<BaseDialog.Description.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseDialog.Description
			data-slot="dialog-description"
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground text-sm text-pretty wrap-break-word *:[a]:underline *:[a]:underline-offset-3",
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
