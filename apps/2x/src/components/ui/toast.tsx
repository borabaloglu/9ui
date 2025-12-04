"use client"

import { toastManager, useToast } from "@/hooks/use-toast"
import { Toast } from "@base-ui-components/react/toast"
import {
	CircleAlert,
	CircleCheck,
	Info,
	Loader,
	TriangleAlert,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

const TOAST_ICONS: {
	[key: string]: React.ReactNode
} = {
	loading: <Loader className="animate-spin" />,
	success: <CircleCheck />,
	error: <CircleAlert />,
	info: <Info />,
	warning: <TriangleAlert />,
}

function ToastProvider({
	children,
	...props
}: React.ComponentProps<typeof Toast.Provider>) {
	return (
		<Toast.Provider toastManager={toastManager} {...props}>
			{children}
			<ToastList />
		</Toast.Provider>
	)
}

function ToastList() {
	const { toasts } = useToast()

	return (
		<Toast.Portal data-slot="toast-portal">
			<Toast.Viewport
				className="fixed top-auto right-4 bottom-4 mx-auto flex w-[calc(100%_-_2rem)] sm:right-8 sm:bottom-8 sm:w-[356px]"
				data-slot="toast-viewport"
			>
				{toasts.map((toast) => (
					<Toast.Root
						key={toast.id}
						toast={toast}
						swipeDirection={["right", "down"]}
						data-slot="toast"
						className={cn(
							// CSS variables for stacking calculations
							"[--gap:0.8rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
							// Base styles
							"bg-popover absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 flex w-full origin-bottom items-center justify-between gap-1.5 rounded-lg border bg-clip-padding p-4 shadow-lg select-none",
							// Height based on frontmost toast
							"h-[var(--height)]",
							// Transitions
							"transition-[opacity,transform,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
							// Fill the gap between toasts
							"after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
							// Initial position and scale with variable height stacking
							"[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
							// Expanded state animation
							"data-[expanded]:h-[var(--toast-height)] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
							// Starting/ending styles
							"data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] data-[starting-style]:opacity-0 data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
							// Right swipe animation
							"data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
							// Down swipe animation
							"data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
							// Type-specific styles
							toast.type === "success" &&
								"bg-success border-success-border text-success-foreground",
							toast.type === "error" &&
								"bg-danger border-danger-border text-danger-foreground",
							toast.type === "info" &&
								"bg-info border-info-border text-info-foreground",
							toast.type === "warning" &&
								"bg-warning border-warning-border text-warning-foreground"
						)}
					>
						<Toast.Content
							className="flex w-full items-center justify-between gap-1.5 overflow-hidden transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-[behind]:pointer-events-none data-[behind]:opacity-0 data-[expanded]:pointer-events-auto data-[expanded]:opacity-100"
							data-slot="toast-content"
						>
							<div className="flex items-center gap-2">
								{toast.type && TOAST_ICONS[toast.type] && (
									<div
										className="shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"
										data-slot="toast-icon"
									>
										{TOAST_ICONS[toast.type]}
									</div>
								)}

								<div className="flex flex-col">
									<Toast.Title
										className="text-[13px] leading-relaxed font-medium"
										data-slot="toast-title"
									/>
									<Toast.Description
										className="text-[13px] leading-normal"
										data-slot="toast-description"
									/>
								</div>
							</div>
							{toast.actionProps && (
								<Toast.Action
									className={cn(
										buttonVariants({ size: "sm" }),
										"h-6 px-2 text-xs font-medium"
									)}
									data-slot="toast-action"
								>
									{toast.actionProps.children}
								</Toast.Action>
							)}
						</Toast.Content>
					</Toast.Root>
				))}
			</Toast.Viewport>
		</Toast.Portal>
	)
}

export { ToastProvider }
