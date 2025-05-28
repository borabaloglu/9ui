import * as React from "react"
import { Slider as BaseSlider } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

const Slider = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof BaseSlider.Root>) => {
	const isRange =
		(Array.isArray(props.defaultValue) && props.defaultValue.length > 1) ||
		(Array.isArray(props.value) && props.value.length > 1)

	return (
		<BaseSlider.Root
			className={cn(
				"relative touch-none select-none",
				props.disabled && "pointer-events-none opacity-50",
				className
			)}
			{...props}
		>
			<BaseSlider.Control className="flex w-56 items-center">
				<BaseSlider.Track className="h-1 w-full rounded-full bg-muted">
					<BaseSlider.Indicator className="relative rounded-full bg-primary" />
					<BaseSlider.Thumb
						className="size-4 rounded-full bg-primary shadow-sm dark:shadow-none"
						inputId="1"
					/>
					{isRange && (
						<BaseSlider.Thumb
							className="size-4 rounded-full bg-primary shadow-sm dark:shadow-none"
							inputId="2"
						/>
					)}
				</BaseSlider.Track>
			</BaseSlider.Control>
			{children}
		</BaseSlider.Root>
	)
}
Slider.displayName = "Slider"

const SliderValue = React.forwardRef<
	HTMLOutputElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
	<BaseSlider.Value
		ref={ref}
		className={cn(
			"mt-3 flex justify-end text-xs font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
SliderValue.displayName = "SliderValue"

export { Slider, SliderValue }
