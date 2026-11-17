"use client";

import type * as React from "react";
import { Toast as BaseToast } from "@base-ui/react/toast";
import {
	CircleAlertIcon,
	CircleCheckIcon,
	InfoIcon,
	TriangleAlertIcon,
	XIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { anchoredToastManager, toastManager } from "@/hooks/use-toast";

import { cn } from "@/lib/utils";

type ToastPosition =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right";

type ToastSwipeDirection = "up" | "down" | "left" | "right";

type ToastObject = ReturnType<
	typeof BaseToast.useToastManager
>["toasts"][number];

const TOAST_ICONS: Partial<Record<string, React.ComponentType>> = {
	success: CircleCheckIcon,
	error: CircleAlertIcon,
	info: InfoIcon,
	warning: TriangleAlertIcon,
	loading: Spinner,
};

function getSwipeDirection(position: ToastPosition): ToastSwipeDirection[] {
	const vertical = position.startsWith("top") ? "up" : "down";

	if (position.endsWith("center")) {
		return [vertical];
	}

	return [position.endsWith("left") ? "left" : "right", vertical];
}

function ToastContent({
	toast,
	className,
}: {
	toast: ToastObject;
	className?: string;
}) {
	const Icon =
		toast.type && Object.hasOwn(TOAST_ICONS, toast.type)
			? TOAST_ICONS[toast.type]
			: undefined;

	return (
		<BaseToast.Content
			data-slot="toast-content"
			className={cn(
				"flex items-center gap-2 overflow-hidden px-3.5 py-3",
				className,
			)}
		>
			{Icon && (
				<div
					data-slot="toast-icon"
					className="in-data-[type=error]:text-destructive in-data-[type=info]:text-info in-data-[type=success]:text-success in-data-[type=warning]:text-warning flex h-lh w-4 shrink-0 items-center self-start in-data-[type=loading]:opacity-80 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
				>
					<Icon />
				</div>
			)}
			<div
				data-slot="toast-text"
				className="flex min-w-0 flex-1 flex-col gap-0.5"
			>
				<BaseToast.Title
					data-slot="toast-title"
					className="font-medium wrap-break-word"
				/>
				<BaseToast.Description
					data-slot="toast-description"
					className="text-muted-foreground wrap-break-word"
				/>
			</div>
			{toast.actionProps && (
				<BaseToast.Action
					data-slot="toast-action"
					render={<Button size="xs" />}
				/>
			)}
		</BaseToast.Content>
	);
}

function ToastViewport({
	position,
	showCloseButton,
	portalProps,
}: {
	position: ToastPosition;
	showCloseButton: boolean;
	portalProps?: BaseToast.Portal.Props;
}) {
	const { toasts } = BaseToast.useToastManager();
	const swipeDirection = getSwipeDirection(position);

	return (
		<BaseToast.Portal data-slot="toast-portal" {...portalProps}>
			<BaseToast.Viewport
				data-slot="toast-viewport"
				data-position={position}
				className="fixed z-60 w-[calc(100%-var(--toast-inset)*2)] max-w-90 outline-none [--toast-inset:--spacing(4)] data-[position*=bottom]:bottom-(--toast-inset) data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2 data-[position*=left]:left-(--toast-inset) data-[position*=right]:right-(--toast-inset) data-[position*=top]:top-(--toast-inset) sm:[--toast-inset:--spacing(8)]"
			>
				{toasts.map((toast) => (
					<BaseToast.Root
						key={toast.id}
						toast={toast}
						swipeDirection={swipeDirection}
						data-slot="toast"
						data-position={position}
						className={cn(
							"data-expanded:bg-popover dark:data-expanded:bg-popover text-popover-foreground dark:edge-highlight-lg focus-visible:border-ring focus-visible:ring-ring/50 absolute z-[calc(9999-var(--toast-index))] h-(--toast-calc-height) w-full rounded-lg border bg-[color-mix(in_srgb,var(--popover),black_calc(1%*var(--toast-index,0)))] text-sm shadow-lg outline-none select-none [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)] not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] focus-visible:ring-3 dark:bg-[color-mix(in_srgb,var(--popover),black_calc(6%*var(--toast-index,0)))]",
							"[--toast-calc-height:var(--toast-frontmost-height,var(--toast-height))] [--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*0.05)))] [--toast-shrink:calc(1-var(--toast-scale))]",
							"[transition:transform_0.4s_--theme(--ease-out-quint),opacity_0.4s_--theme(--ease-out-quint),height_0.15s_--theme(--ease-out-quint),background-color_0.4s_--theme(--ease-out-quint)] motion-reduce:[transition:opacity_0.4s_--theme(--ease-out-quint),height_0.15s_--theme(--ease-out-quint),background-color_0.4s_--theme(--ease-out-quint)]",
							"data-[position*=center]:left-0 data-[position*=left]:left-0 data-[position*=right]:right-0",
							"data-[position*=top]:top-0 data-[position*=top]:origin-top",
							"data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-bottom",
							"after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full data-[position*=bottom]:after:bottom-full data-[position*=top]:after:top-full",
							"data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-swipe-movement-y))]",
							"data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-swipe-movement-y))]",
							"data-[position*=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
							"data-[position*=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
							"data-limited:opacity-0",
							"data-expanded:h-(--toast-height) data-position:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-calc-offset-y))]",
							"data-starting-style:opacity-0 motion-safe:data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))] motion-safe:data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]",
							"data-ending-style:opacity-0",
							"motion-safe:data-[position*=top]:data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(-100%-var(--toast-inset)))]",
							"motion-safe:data-[position*=bottom]:data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]",
							"data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
							"data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
							"data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]",
							"data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]",
						)}
					>
						<ToastContent
							toast={toast}
							className="transition-opacity duration-250 ease-out data-behind:opacity-0 data-behind:not-data-expanded:pointer-events-none data-expanded:opacity-100"
						/>
						{showCloseButton && (
							<BaseToast.Close
								data-slot="toast-close"
								aria-label="Close toast"
								className="bg-popover text-muted-foreground hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute -start-2 -top-2 z-1 flex size-5 cursor-pointer items-center justify-center rounded-full border opacity-[calc(1-min(var(--toast-index),1))] transition-[color,opacity,scale] duration-150 ease-out outline-none focus-visible:ring-3 in-data-expanded:opacity-100 motion-safe:active:scale-95 any-pointer-coarse:after:absolute any-pointer-coarse:after:-inset-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3 [[data-behind]:not([data-expanded])~&]:pointer-events-none"
							>
								<XIcon />
							</BaseToast.Close>
						)}
					</BaseToast.Root>
				))}
			</BaseToast.Viewport>
		</BaseToast.Portal>
	);
}

function AnchoredToastViewport({
	portalProps,
}: {
	portalProps?: BaseToast.Portal.Props;
}) {
	const { toasts } = BaseToast.useToastManager();

	return (
		<BaseToast.Portal data-slot="toast-portal" {...portalProps}>
			<BaseToast.Viewport data-slot="toast-viewport" className="outline-none">
				{toasts.map((toast) => {
					if (!toast.positionerProps?.anchor) {
						return null;
					}

					return (
						<BaseToast.Positioner
							key={toast.id}
							toast={toast}
							data-slot="toast-positioner"
							sideOffset={toast.positionerProps.sideOffset ?? 4}
							className="z-60 max-w-[min(--spacing(90),var(--available-width))]"
						>
							<BaseToast.Root
								toast={toast}
								data-slot="toast"
								className="bg-popover text-popover-foreground ease-out-quint dark:edge-highlight-lg focus-visible:border-ring focus-visible:ring-ring/50 relative origin-(--transform-origin) rounded-lg border text-sm shadow-lg transition-[scale,opacity] duration-150 outline-none not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] focus-visible:ring-3 data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-100 data-limited:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-opacity motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100"
							>
								<ToastContent toast={toast} />
							</BaseToast.Root>
						</BaseToast.Positioner>
					);
				})}
			</BaseToast.Viewport>
		</BaseToast.Portal>
	);
}

function ToastProvider({
	children,
	position = "bottom-right",
	showCloseButton = false,
	portalProps,
	...props
}: BaseToast.Provider.Props & {
	position?: ToastPosition;
	showCloseButton?: boolean;
	portalProps?: BaseToast.Portal.Props;
}) {
	return (
		<BaseToast.Provider toastManager={toastManager} {...props}>
			{children}
			<ToastViewport
				position={position}
				showCloseButton={showCloseButton}
				portalProps={portalProps}
			/>
		</BaseToast.Provider>
	);
}

function AnchoredToastProvider({
	children,
	portalProps,
	...props
}: BaseToast.Provider.Props & {
	portalProps?: BaseToast.Portal.Props;
}) {
	return (
		<BaseToast.Provider toastManager={anchoredToastManager} {...props}>
			{children}
			<AnchoredToastViewport portalProps={portalProps} />
		</BaseToast.Provider>
	);
}

export type { ToastPosition };
export { AnchoredToastProvider, ToastProvider };
