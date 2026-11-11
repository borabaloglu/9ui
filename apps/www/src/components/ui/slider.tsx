import { Slider as BaseSlider } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider<Value extends number | readonly number[]>({
	className,
	children,
	defaultValue,
	value,
	"aria-label": ariaLabel,
	thumbLabels,
	...props
}: Omit<BaseSlider.Root.Props<Value>, "className"> & {
	className?: string;
	thumbLabels?: readonly string[];
}) {
	const values = value ?? defaultValue;
	const thumbCount = Array.isArray(values) ? values.length : 1;

	return (
		<BaseSlider.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			thumbAlignment="edge"
			className={cn(
				"grid grid-cols-[1fr_auto] gap-x-3 gap-y-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:flex data-[orientation=vertical]:h-full data-[orientation=vertical]:w-fit data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-center",
				className,
			)}
			{...props}
		>
			{children}
			<BaseSlider.Control
				data-slot="slider-control"
				className="relative flex touch-none items-center select-none before:absolute before:-inset-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[orientation=horizontal]:col-span-2 data-[orientation=horizontal]:h-4 data-[orientation=vertical]:order-2 data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-4 data-[orientation=vertical]:flex-1 data-[orientation=vertical]:flex-col any-pointer-coarse:before:-inset-3 any-pointer-coarse:data-[orientation=horizontal]:h-5 any-pointer-coarse:data-[orientation=vertical]:w-5"
			>
				<BaseSlider.Track
					data-slot="slider-track"
					className="bg-muted relative grow rounded-full data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
				>
					<BaseSlider.Indicator
						data-slot="slider-indicator"
						className="bg-primary rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
					/>
					{Array.from({ length: thumbCount }, (_, index) => (
						<BaseSlider.Thumb
							data-slot="slider-thumb"
							key={index}
							index={index}
							aria-label={thumbLabels?.[index] ?? ariaLabel}
							className="border-border has-focus-visible:border-ring has-focus-visible:ring-ring/50 data-invalid:border-destructive/60 data-invalid:ring-destructive/30 dark:border-background dark:data-invalid:border-destructive/60 dark:data-invalid:ring-destructive/40 ease-out-quint block size-4 shrink-0 rounded-full border bg-white shadow-xs transition-[border-color,box-shadow,scale] duration-150 outline-none select-none before:absolute before:inset-0 before:rounded-full before:shadow-[0_1px_--theme(--color-black/6%)] has-focus-visible:ring-3 data-invalid:ring-3 motion-safe:data-dragging:scale-110 dark:before:shadow-none any-pointer-coarse:size-5"
						/>
					))}
				</BaseSlider.Track>
			</BaseSlider.Control>
		</BaseSlider.Root>
	);
}

function SliderLabel({
	className,
	...props
}: Omit<BaseSlider.Label.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSlider.Label
			data-slot="slider-label"
			className={cn(
				"data-disabled:text-foreground/50 data-invalid:text-destructive w-fit cursor-default text-sm leading-snug font-medium select-none data-[orientation=vertical]:order-3",
				className,
			)}
			{...props}
		/>
	);
}

function SliderValue({
	className,
	...props
}: Omit<BaseSlider.Value.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseSlider.Value
			data-slot="slider-value"
			className={cn(
				"text-muted-foreground col-start-2 justify-self-end text-sm leading-snug tabular-nums data-disabled:opacity-50 data-[orientation=vertical]:order-1",
				className,
			)}
			{...props}
		/>
	);
}

export { Slider, SliderLabel, SliderValue };
