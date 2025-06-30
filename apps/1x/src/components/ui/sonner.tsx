"use client"

import * as React from "react"
import { Toaster as Sonner, toast } from "sonner"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => (
	<Sonner
		className="text-xs text-popover-foreground"
		theme="system"
		toastOptions={{
			unstyled: true,
			classNames: {
				toast:
					"group max-w-96 w-full bg-popover rounded-md p-4 border flex gap-2 right-0 shadow-md dark:shadow-none",
				title: "font-medium",
				success:
					"data-[rich-colors]:!bg-success data-[rich-colors]:!text-success-foreground data-[rich-colors]:!border-success-foreground",
				error:
					"data-[rich-colors]:!bg-danger data-[rich-colors]:!text-danger-foreground data-[rich-colors]:!border-danger-foreground",
				warning:
					"data-[rich-colors]:!bg-warning data-[rich-colors]:!text-warning-foreground data-[rich-colors]:!border-warning-foreground",
				info: "data-[rich-colors]:!bg-info data-[rich-colors]:!text-info-foreground data-[rich-colors]:!border-info-foreground",
				description:
					"text-muted-foreground group-data-[rich-colors]:text-foreground",
				actionButton: cn(
					buttonVariants({ variant: "ghost", size: "sm" }),
					"my-auto"
				),
				cancelButton: cn(
					buttonVariants({ variant: "destructive", size: "sm" }),
					"my-auto"
				),
				closeButton: "!bg-popover text-popover-foreground transition-colors",
				icon: "my-auto",
			},
		}}
		{...props}
	/>
)

export { Toaster, toast }
