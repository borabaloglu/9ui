"use client";

import type * as React from "react";
import {
	CircleAlertIcon,
	CircleCheckIcon,
	InfoIcon,
	TriangleAlertIcon,
	XIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

function Toaster({ className, style, toastOptions, ...props }: ToasterProps) {
	return (
		<Sonner
			className={className}
			gap={12}
			offset={32}
			mobileOffset={16}
			icons={{
				success: <CircleCheckIcon />,
				error: <CircleAlertIcon />,
				info: <InfoIcon />,
				warning: <TriangleAlertIcon />,
				loading: <Spinner />,
				close: <XIcon />,
			}}
			style={
				{
					"--width": "calc(var(--spacing) * 90)",
					"--success-bg":
						"color-mix(in oklab, var(--success) 5%, var(--popover))",
					"--success-border":
						"color-mix(in oklab, var(--success) 20%, transparent)",
					"--success-text": "var(--popover-foreground)",
					"--error-bg":
						"color-mix(in oklab, var(--destructive) 5%, var(--popover))",
					"--error-border":
						"color-mix(in oklab, var(--destructive) 20%, transparent)",
					"--error-text": "var(--popover-foreground)",
					"--info-bg": "color-mix(in oklab, var(--info) 5%, var(--popover))",
					"--info-border": "color-mix(in oklab, var(--info) 20%, transparent)",
					"--info-text": "var(--popover-foreground)",
					"--warning-bg":
						"color-mix(in oklab, var(--warning) 5%, var(--popover))",
					"--warning-border":
						"color-mix(in oklab, var(--warning) 20%, transparent)",
					"--warning-text": "var(--popover-foreground)",
					fontFamily: "inherit",
					...style,
				} as React.CSSProperties
			}
			toastOptions={{
				unstyled: true,
				...toastOptions,
				classNames: {
					toast:
						"flex w-(--width) items-center gap-2 rounded-lg border [--surface-accent:var(--accent-elevated)] [--surface-muted:var(--muted-elevated)] [--surface-secondary:var(--secondary-elevated)] dark:edge-highlight-lg bg-[color-mix(in_srgb,var(--popover),black_calc(1%*var(--toasts-before,0)))] data-[expanded=true]:bg-popover dark:bg-[color-mix(in_srgb,var(--popover),black_calc(6%*var(--toasts-before,0)))] dark:data-[expanded=true]:bg-popover px-3.5 py-3 text-sm text-popover-foreground shadow-lg select-none not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] data-[expanded=false]:data-[front=false]:*:opacity-0",
					content: "flex min-w-0 flex-1 flex-col gap-0.5",
					title: "font-medium",
					description: "text-muted-foreground",
					icon: "relative flex h-lh w-4 shrink-0 items-center self-start in-data-[type=error]:text-destructive in-data-[type=info]:text-info in-data-[type=loading]:opacity-80 in-data-[type=success]:text-success in-data-[type=warning]:text-warning [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					actionButton: buttonVariants({ size: "xs" }),
					cancelButton: buttonVariants({ variant: "outline", size: "xs" }),
					closeButton:
						"absolute -top-2 -start-2 z-1 flex size-5 cursor-pointer items-center justify-center rounded-full border bg-popover text-muted-foreground outline-none hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 motion-safe:active:scale-95 any-pointer-coarse:after:absolute any-pointer-coarse:after:-inset-3 [[data-expanded=false][data-front=false]>&]:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
					...toastOptions?.classNames,
				},
			}}
			{...props}
		/>
	);
}

export { Toaster };
