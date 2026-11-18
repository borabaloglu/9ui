import type * as React from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

function getProgressFraction(value: number | null, min: number, max: number) {
	if (value === null || !Number.isFinite(value) || max === min) return 0;
	return Math.min(Math.max((value - min) / (max - min), 0), 1);
}

function Progress({
	className,
	style,
	value,
	min = 0,
	max = 100,
	...props
}: Omit<BaseProgress.Root.Props, "className"> & {
	className?: string;
}) {
	const fraction = {
		"--progress-fraction": getProgressFraction(value, min, max),
	} as React.CSSProperties;

	return (
		<BaseProgress.Root
			data-slot="progress"
			value={value}
			min={min}
			max={max}
			className={cn(
				"grid w-full grid-cols-[1fr_auto] gap-x-3 gap-y-2",
				className,
			)}
			style={
				typeof style === "function"
					? (state) => ({ ...fraction, ...style(state) })
					: { ...fraction, ...style }
			}
			{...props}
		/>
	);
}

function ProgressTrack({
	className,
	...props
}: Omit<BaseProgress.Track.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseProgress.Track
			data-slot="progress-track"
			className={cn(
				"bg-muted col-span-2 h-1 w-full overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function ProgressIndicator({
	className,
	...props
}: Omit<BaseProgress.Indicator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseProgress.Indicator
			data-slot="progress-indicator"
			className={cn(
				"bg-primary h-full rounded-full transition-[width] duration-300 ease-out data-indeterminate:w-2/5 motion-safe:data-indeterminate:animate-[progress-indeterminate_1.5s_ease-in-out_infinite] motion-reduce:transition-none motion-reduce:data-indeterminate:w-full motion-reduce:data-indeterminate:animate-pulse rtl:[--progress-direction:-1]",
				className,
			)}
			{...props}
		/>
	);
}

function ProgressCircularTrack({
	className,
	size = 40,
	strokeWidth = 4,
	children,
	...props
}: Omit<React.ComponentProps<"svg">, "strokeWidth"> & {
	size?: number;
	strokeWidth?: number;
}) {
	const stroke = (100 * strokeWidth) / (size - strokeWidth);
	const box = 100 + stroke;

	return (
		<svg
			data-slot="progress-circular-track"
			aria-hidden="true"
			width={size}
			height={size}
			viewBox={`${-box / 2} ${-box / 2} ${box} ${box}`}
			fill="none"
			strokeWidth={stroke}
			className={cn("text-muted shrink-0 -rotate-90", className)}
			{...props}
		>
			<circle r={50} className="stroke-current" />
			{children}
		</svg>
	);
}

function ProgressCircularIndicator({
	className,
	...props
}: React.ComponentProps<"circle">) {
	return (
		<BaseProgress.Indicator
			data-slot="progress-circular-indicator"
			className={cn(
				"stroke-primary origin-center transition-[stroke-dashoffset] duration-300 ease-out [stroke-dasharray:1] [stroke-dashoffset:calc(1_-_var(--progress-fraction))] data-indeterminate:[stroke-dashoffset:0.75] motion-safe:data-indeterminate:animate-spin motion-reduce:transition-none motion-reduce:data-indeterminate:animate-pulse motion-reduce:data-indeterminate:[stroke-dashoffset:0]",
				className,
			)}
			render={<circle r={50} pathLength={1} strokeLinecap="round" {...props} />}
		/>
	);
}

function ProgressLabel({
	className,
	...props
}: Omit<BaseProgress.Label.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseProgress.Label
			data-slot="progress-label"
			className={cn("text-sm leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function ProgressValue({
	className,
	...props
}: Omit<BaseProgress.Value.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseProgress.Value
			data-slot="progress-value"
			className={cn(
				"text-muted-foreground col-start-2 justify-self-end text-sm leading-snug tabular-nums",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Progress,
	ProgressCircularIndicator,
	ProgressCircularTrack,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
};
