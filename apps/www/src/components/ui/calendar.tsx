"use client";

import * as React from "react";
import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "lucide-react";
import {
	type ChevronProps,
	type ClassNames,
	type DayButtonProps,
	DayPicker,
	type RootProps,
} from "react-day-picker";

import { type ButtonProps, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
	buttonVariant?: ButtonProps["variant"];
};

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = "label",
	buttonVariant = "ghost",
	formatters,
	components,
	...props
}: CalendarProps) {
	const navButtonClassName = cn(
		buttonVariants({ variant: buttonVariant, size: "icon" }),
		"size-(--cell-size) aria-disabled:pointer-events-none aria-disabled:opacity-50 any-pointer-coarse:size-(--cell-size)",
	);

	const defaultClassNames: Partial<ClassNames> = {
		root: "w-fit",
		months: "relative flex flex-col gap-4 md:flex-row",
		month: "flex w-full flex-col gap-4",
		nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
		button_previous: navButtonClassName,
		button_next: navButtonClassName,
		month_caption:
			"flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
		caption_label: cn(
			"text-sm font-medium select-none any-pointer-coarse:text-base",
			captionLayout !== "label" &&
				"[&>svg]:text-muted-foreground flex h-7 items-center gap-1 ps-2 pe-1.5 any-pointer-coarse:h-8 [&>svg]:size-3.5",
		),
		dropdowns: "flex h-(--cell-size) w-full items-center justify-center gap-1",
		dropdown_root:
			"hover:bg-accent has-focus-visible:ring-ring/50 dark:hover:bg-accent/50 relative rounded-md has-focus-visible:ring-3",
		dropdown: "bg-popover absolute inset-0 cursor-pointer opacity-0",
		month_grid: "w-full border-collapse",
		weekdays: "flex",
		weekday:
			"text-muted-foreground w-(--cell-size) text-xs font-normal select-none",
		week: "mt-1.5 flex w-full",
		week_number_header: "w-(--cell-size) select-none any-pointer-coarse:w-6",
		week_number:
			"text-muted-foreground flex h-(--cell-size) w-(--cell-size) items-center justify-center text-xs font-normal select-none any-pointer-coarse:w-6",
		day: "group/day relative size-(--cell-size) p-0 text-center select-none has-[+[data-hidden]]:rounded-e-(--cell-radius) first-of-type:rounded-s-(--cell-radius) last-of-type:rounded-e-(--cell-radius) [[data-hidden]+&]:rounded-s-(--cell-radius)",
		range_start: "bg-muted rounded-s-(--cell-radius)",
		range_middle: "bg-muted",
		range_end: "bg-muted rounded-e-(--cell-radius)",
		hidden: "invisible",
	};

	const mergedClassNames: Partial<ClassNames> = { ...classNames };

	for (const key of Object.keys(defaultClassNames) as (keyof ClassNames)[]) {
		mergedClassNames[key] = cn(defaultClassNames[key], classNames?.[key]);
	}

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout={captionLayout}
			className={cn(
				"p-2 [--cell-radius:var(--radius-lg)] [--cell-size:--spacing(8)] any-pointer-coarse:[--cell-size:--spacing(10)]",
				className,
			)}
			classNames={mergedClassNames}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString(props.locale?.code, { month: "short" }),
				...formatters,
			}}
			components={{
				Root: CalendarRoot,
				Chevron: CalendarChevron,
				DayButton: CalendarDayButton,
				...components,
			}}
			{...props}
		/>
	);
}

function CalendarRoot({ rootRef, ...props }: RootProps) {
	return <div data-slot="calendar" ref={rootRef} {...props} />;
}

function CalendarChevron({
	orientation,
	className,
	size: _size,
	disabled: _disabled,
	...props
}: ChevronProps) {
	if (orientation === "left") {
		return (
			<ChevronLeftIcon
				aria-hidden="true"
				className={cn("rtl:rotate-180", className)}
				{...props}
			/>
		);
	}

	if (orientation === "right") {
		return (
			<ChevronRightIcon
				aria-hidden="true"
				className={cn("rtl:rotate-180", className)}
				{...props}
			/>
		);
	}

	return (
		<ChevronDownIcon aria-hidden="true" className={className} {...props} />
	);
}

function CalendarDayButton({
	className,
	day,
	modifiers,
	...props
}: DayButtonProps) {
	const ref = React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);

	const selectedPrimary =
		modifiers.selected && !modifiers.range_middle ? "" : undefined;

	return (
		<button
			ref={ref}
			data-slot="calendar-day-button"
			data-day={day.isoDate}
			data-selected-primary={selectedPrimary}
			data-range-start={modifiers.range_start ? "" : undefined}
			data-range-middle={modifiers.range_middle ? "" : undefined}
			data-range-end={modifiers.range_end ? "" : undefined}
			data-outside={modifiers.outside ? "" : undefined}
			data-today={modifiers.today ? "" : undefined}
			className={cn(
				"focus-visible:ring-ring/50 not-data-selected-primary:not-data-range-middle:hover:bg-accent data-outside:text-muted-foreground data-selected-primary:bg-primary data-selected-primary:text-primary-foreground dark:not-data-selected-primary:not-data-range-middle:hover:bg-accent/50 data-range-middle:hover:bg-foreground/10 relative z-10 flex size-full cursor-pointer flex-col items-center justify-center gap-1 rounded-(--cell-radius) text-sm leading-none font-normal outline-none select-none focus-visible:z-20 focus-visible:ring-3 disabled:pointer-events-none disabled:line-through disabled:opacity-50 data-selected-primary:inset-shadow-[0_1px_--theme(--color-white/20%)] data-today:after:absolute data-today:after:inset-x-0 data-today:after:bottom-1 data-today:after:mx-auto data-today:after:h-px data-today:after:w-1.5 data-today:after:rounded-full data-today:after:bg-current motion-safe:transition-[scale] motion-safe:duration-150 motion-safe:ease-out motion-safe:active:scale-95 any-pointer-coarse:text-base",
				className,
			)}
			{...props}
		/>
	);
}

export { Calendar, CalendarDayButton };
