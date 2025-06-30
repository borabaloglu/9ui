import * as React from "react"
import { Slider as BaseSlider } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

function Slider({
	className,
	children,
	defaultValue,
	value,
	min = 0,
	max = 100,
	...props
}: React.ComponentProps<typeof BaseSlider.Root>) {
	const _values = React.useMemo(
		() =>
			Array.isArray(value)
				? value
				: Array.isArray(defaultValue)
					? defaultValue
					: [min, max],
		[value, defaultValue, min, max]
	)

	return (
		<BaseSlider.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={cn(
				"relative w-full touch-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
				className
			)}
			{...props}
		>
			<BaseSlider.Control
				data-slot="slider-control"
				className="flex w-full items-center"
			>
				<BaseSlider.Track
					data-slot="slider-track"
					className="bg-muted relative grow rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
				>
					<BaseSlider.Indicator
						data-slot="slider-indicator"
						className="bg-primary absolute rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
					/>
					{Array.from({ length: _values.length }, (_, index) => (
						<BaseSlider.Thumb
							data-slot="slider-thumb"
							key={index}
							className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden"
						/>
					))}
				</BaseSlider.Track>
			</BaseSlider.Control>
			{children}
		</BaseSlider.Root>
	)
}

function SliderValue({
	className,
	...props
}: React.ComponentProps<typeof BaseSlider.Value>) {
	return (
		<BaseSlider.Value
			data-slot="slider-value"
			className={cn(
				"text-foreground mt-2 flex justify-end text-sm font-medium",
				className
			)}
			{...props}
		/>
	)
}

export { Slider, SliderValue }
