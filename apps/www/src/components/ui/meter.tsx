import { Meter as BaseMeter } from "@base-ui/react/meter";

import { cn } from "@/lib/utils";

function getMeterLevel({
	value,
	min,
	max,
	low = min,
	high = max,
	optimum = (min + max) / 2,
}: {
	value: number;
	min: number;
	max: number;
	low?: number;
	high?: number;
	optimum?: number;
}) {
	const getRegion = (point: number) => {
		if (point < low) return -1;
		if (point > high) return 1;
		return 0;
	};
	const distance = Math.abs(getRegion(value) - getRegion(optimum));

	if (distance === 0) return "optimum";
	if (distance === 1) return "suboptimum";
	return "critical";
}

function Meter({
	className,
	value,
	min = 0,
	max = 100,
	low,
	high,
	optimum,
	...props
}: Omit<BaseMeter.Root.Props, "className"> & {
	className?: string;
	low?: number;
	high?: number;
	optimum?: number;
}) {
	const level =
		low === undefined && high === undefined
			? undefined
			: getMeterLevel({ value, min, max, low, high, optimum });

	return (
		<BaseMeter.Root
			data-slot="meter"
			data-level={level}
			value={value}
			min={min}
			max={max}
			className={cn(
				"grid w-full grid-cols-[1fr_auto] gap-x-3 gap-y-2",
				className,
			)}
			{...props}
		/>
	);
}

function MeterLabel({
	className,
	...props
}: Omit<BaseMeter.Label.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMeter.Label
			data-slot="meter-label"
			className={cn("text-sm leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function MeterValue({
	className,
	...props
}: Omit<BaseMeter.Value.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMeter.Value
			data-slot="meter-value"
			className={cn(
				"text-muted-foreground col-start-2 justify-self-end text-sm leading-snug tabular-nums",
				className,
			)}
			{...props}
		/>
	);
}

function MeterTrack({
	className,
	...props
}: Omit<BaseMeter.Track.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMeter.Track
			data-slot="meter-track"
			className={cn(
				"bg-muted col-span-2 h-2 w-full overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function MeterIndicator({
	className,
	...props
}: Omit<BaseMeter.Indicator.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseMeter.Indicator
			data-slot="meter-indicator"
			className={cn(
				"bg-primary in-data-[level=optimum]:bg-success in-data-[level=suboptimum]:bg-warning in-data-[level=critical]:bg-destructive rounded-full transition-[width] duration-300 ease-out motion-reduce:transition-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue };
