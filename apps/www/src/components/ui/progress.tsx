import { Progress as BaseProgress } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

function Progress({
	className,
	...props
}: Omit<BaseProgress.Root.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseProgress.Root
			data-slot="progress"
			className={cn(
				"grid w-full grid-cols-[1fr_auto] gap-x-3 gap-y-2",
				className,
			)}
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
				"bg-primary h-full rounded-full transition-[width] duration-500 ease-out data-indeterminate:w-2/5 motion-safe:data-indeterminate:animate-[progress-indeterminate_1.5s_ease-in-out_infinite] motion-reduce:data-indeterminate:w-full motion-reduce:data-indeterminate:animate-pulse rtl:[--progress-direction:-1]",
				className,
			)}
			{...props}
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
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
};
