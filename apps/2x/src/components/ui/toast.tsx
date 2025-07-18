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
							"bg-popover absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 flex w-full items-center justify-between gap-1.5 rounded-lg border bg-clip-padding p-4 shadow-lg transition-all [transition-property:opacity,transform] duration-200 ease-out select-none",
							"after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']", // Fill the gap between toasts
							"[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*-1*var(--gap))))_scale(calc(max(0,1-(var(--toast-index)*0.1))))]", // Initial position and scale
							"data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))]", // Expanded state animation
							"data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] data-[starting-style]:opacity-0 data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
							"data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", // Right swipe animation
							"data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", // Down swipe animation
							toast.type === "success" &&
								"bg-success border-success-border text-success-foreground",
							toast.type === "error" &&
								"bg-danger border-danger-border text-danger-foreground",
							toast.type === "info" &&
								"bg-info border-info-border text-info-foreground",
							toast.type === "warning" &&
								"bg-warning border-warning-border text-warning-foreground"
						)}
						style={{
							["--gap" as string]: "0.8rem",
							["--offset-y" as string]:
								"calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))",
						}}
					>
						<div className="flex items-center gap-2">
							<div
								className="shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
								data-slot="toast-icon"
							>
								{toast.type === "loading" && (
									<Loader className="size-3.5 animate-spin" />
								)}
								{toast.type === "success" && (
									<CircleCheck className="size-3.5" />
								)}
								{toast.type === "error" && <CircleAlert className="size-3.5" />}
								{toast.type === "info" && <Info className="size-3.5" />}
								{toast.type === "warning" && (
									<TriangleAlert className="size-3.5" />
								)}
							</div>

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
					</Toast.Root>
				))}
			</Toast.Viewport>
		</Toast.Portal>
	)
}

export { ToastProvider }
