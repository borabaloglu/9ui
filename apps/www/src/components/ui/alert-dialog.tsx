import type * as React from "react";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";

import { cn } from "@/lib/utils";

function AlertDialog<Payload>({
	...props
}: BaseAlertDialog.Root.Props<Payload>) {
	return <BaseAlertDialog.Root {...props} />;
}

function AlertDialogTrigger<Payload>({
	...props
}: BaseAlertDialog.Trigger.Props<Payload>) {
	return (
		<BaseAlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />
	);
}

function AlertDialogClose({ ...props }: BaseAlertDialog.Close.Props) {
	return <BaseAlertDialog.Close data-slot="alert-dialog-close" {...props} />;
}

function AlertDialogBackdrop({
	className,
	...props
}: Omit<BaseAlertDialog.Backdrop.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseAlertDialog.Backdrop
			data-slot="alert-dialog-backdrop"
			className={cn(
				"ease-out-quint fixed inset-0 z-50 min-h-dvh bg-black/30 transition-opacity duration-200 has-[+*>.transition-none]:transition-none data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute dark:bg-black/50",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogPopup({
	className,
	size = "default",
	showAtBottomOnMobile = true,
	portalProps,
	...props
}: Omit<BaseAlertDialog.Popup.Props, "className"> & {
	className?: string;
	portalProps?: BaseAlertDialog.Portal.Props;
	size?: "sm" | "default";
	showAtBottomOnMobile?: boolean;
}) {
	return (
		<BaseAlertDialog.Portal data-slot="alert-dialog-portal" {...portalProps}>
			<AlertDialogBackdrop
				className={cn(
					showAtBottomOnMobile &&
						"motion-safe:max-sm:ease-drawer motion-safe:max-sm:duration-400 motion-safe:max-sm:data-ending-style:duration-250",
				)}
			/>
			<BaseAlertDialog.Viewport
				data-slot="alert-dialog-viewport"
				className={cn(
					"fixed inset-0 z-50 flex items-center justify-center p-4",
					showAtBottomOnMobile && "max-sm:items-end max-sm:p-0 max-sm:pt-12",
				)}
			>
				<BaseAlertDialog.Popup
					data-slot="alert-dialog-popup"
					data-size={size}
					className={cn(
						"group/alert-dialog-popup bg-popover text-popover-foreground ease-out-quint dark:edge-highlight-(--alert-dialog-radius) relative grid max-h-full w-full scale-[calc(1-0.1*var(--nested-dialogs))] grid-cols-1 gap-(--alert-dialog-spacing) overflow-y-auto overscroll-contain rounded-(--alert-dialog-radius) border p-(--alert-dialog-spacing) pb-(--alert-dialog-bottom) text-sm shadow-lg transition-[scale,opacity,translate,filter] duration-200 outline-none [--alert-dialog-bottom:var(--alert-dialog-spacing)] [--alert-dialog-radius:var(--radius-xl)] [--alert-dialog-spacing:--spacing(4)] not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-150 data-nested-dialog-open:brightness-90 data-starting-style:scale-96 data-starting-style:opacity-0 data-[size=sm]:[--alert-dialog-spacing:--spacing(3)] motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:data-nested-dialog-open:brightness-75",
						size === "sm" ? "max-w-xs" : "max-w-sm",
						showAtBottomOnMobile &&
							"motion-safe:max-sm:ease-drawer max-sm:max-w-none max-sm:scale-100 max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:[--alert-dialog-bottom:calc(var(--alert-dialog-spacing)+env(safe-area-inset-bottom))] max-sm:data-ending-style:scale-100 max-sm:data-nested-dialog-open:opacity-0 max-sm:data-starting-style:scale-100 motion-safe:max-sm:duration-400 motion-safe:max-sm:data-ending-style:translate-y-full motion-safe:max-sm:data-ending-style:opacity-100 motion-safe:max-sm:data-ending-style:duration-250 motion-safe:max-sm:data-starting-style:translate-y-full motion-safe:max-sm:data-starting-style:opacity-100",
						className,
					)}
					{...props}
				/>
			</BaseAlertDialog.Viewport>
		</BaseAlertDialog.Portal>
	);
}

function AlertDialogHeader({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn(
				"flex flex-col items-start gap-1.5 group-data-[size=sm]/alert-dialog-popup:items-center group-data-[size=sm]/alert-dialog-popup:text-center",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogMedia({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-media"
			className={cn(
				"bg-muted mb-1.5 flex size-10 shrink-0 items-center justify-center rounded-xl *:[svg:not([class*='size-'])]:size-5",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogFooter({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	variant?: "default" | "bare";
}) {
	return (
		<div
			data-slot="alert-dialog-footer"
			data-variant={variant}
			className={cn(
				"flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-popup:grid group-data-[size=sm]/alert-dialog-popup:auto-cols-fr group-data-[size=sm]/alert-dialog-popup:grid-flow-col sm:flex-row sm:justify-end",
				variant === "default" &&
					"bg-muted/50 -mx-(--alert-dialog-spacing) -mb-(--alert-dialog-bottom) border-t p-(--alert-dialog-spacing) pb-(--alert-dialog-bottom)",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogTitle({
	className,
	...props
}: Omit<BaseAlertDialog.Title.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseAlertDialog.Title
			data-slot="alert-dialog-title"
			className={cn(
				"max-w-full text-base leading-snug font-medium wrap-break-word",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogDescription({
	className,
	...props
}: Omit<BaseAlertDialog.Description.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseAlertDialog.Description
			data-slot="alert-dialog-description"
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground max-w-full text-sm text-pretty wrap-break-word *:[a]:underline *:[a]:underline-offset-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	AlertDialog,
	AlertDialogBackdrop,
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogTrigger,
};
