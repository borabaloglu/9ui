import * as React from "react"
import { Avatar as AvatarBase } from "@base-ui-components/react/avatar"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
	"relative flex shrink-0 overflow-hidden rounded-full",
	{
		variants: {
			size: {
				sm: "size-8 text-sm",
				md: "size-10 text-base",
				lg: "size-12 text-lg",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
)

export interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof AvatarBase.Root>,
		VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
	({ className, size, ...props }, ref) => {
		return (
			<AvatarBase.Root
				ref={ref}
				className={cn(avatarVariants({ size }), className)}
				{...props}
			/>
		)
	}
)
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
	HTMLImageElement,
	React.ComponentPropsWithoutRef<typeof AvatarBase.Image>
>(({ className, alt = "", ...props }, ref) => {
	return (
		<AvatarBase.Image
			ref={ref}
			className={cn("size-full object-cover", className)}
			alt={alt}
			{...props}
		/>
	)
})
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<typeof AvatarBase.Fallback>
>(({ className, ...props }, ref) => {
	return (
		<AvatarBase.Fallback
			ref={ref}
			className={cn(
				"flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
})
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
