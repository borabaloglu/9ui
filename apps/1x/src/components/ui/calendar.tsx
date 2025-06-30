"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

const Calendar = ({
	classNames,
	...props
}: React.ComponentProps<typeof DayPicker>) => (
	<DayPicker
		classNames={{
			root: cn(
				"relative size-fit select-none rounded-md border p-3",
				props.className
			),
			month: cn("m-0 space-y-1 text-center", classNames?.month),
			month_caption: cn(
				"flex h-8 items-center justify-center text-sm font-medium",
				classNames?.month_caption
			),
			today: cn("bg-secondary", classNames?.today),
			week: cn("flex justify-center py-0.5", classNames?.week),
			day: cn(
				"flex size-8 items-center justify-center rounded-md text-sm font-normal [&:has(>button)]:hover:bg-accent [&:has(>button)]:hover:text-accent-foreground",
				classNames?.day
			),
			day_button: cn(
				"size-8 rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent",
				classNames?.day_button
			),
			weekdays: cn("flex justify-center", classNames?.weekdays),
			weekday: cn(
				"size-8 text-sm font-normal text-muted-foreground",
				classNames?.weekday
			),
			outside: cn(
				"text-muted-foreground/50 hover:!text-muted-foreground/50",
				classNames?.outside
			),
			selected: cn(
				"!bg-primary !text-primary-foreground hover:!bg-primary",
				classNames?.selected
			),
			range_middle: cn(
				"rounded-none first:rounded-l-md last:rounded-r-md",
				classNames?.range_middle
			),
			range_start: cn(
				props.mode === "range" &&
					props.selected?.from?.getTime() !== props.selected?.to?.getTime()
					? "rounded-r-none last:rounded-r-md"
					: "",
				classNames?.range_start
			),
			range_end: cn(
				props.mode === "range" &&
					props.selected?.from?.getTime() !== props.selected?.to?.getTime()
					? "rounded-l-none first:rounded-l-md"
					: "",
				classNames?.range_end
			),
			disabled: cn("pointer-events-none opacity-30", classNames?.disabled),
			hidden: cn("pointer-events-none", classNames?.hidden),
			nav: cn("", classNames?.nav),
			month_grid: cn("", classNames?.month_grid),
		}}
		components={{
			NextMonthButton: (props) => (
				<button
					{...props}
					className={cn(
						buttonVariants({ variant: "ghost", size: "icon-sm" }),
						"absolute right-3",
						classNames?.button_next
					)}
				>
					<ChevronRightIcon className="size-4" />
				</button>
			),
			PreviousMonthButton: (props) => (
				<button
					{...props}
					className={cn(
						buttonVariants({ variant: "ghost", size: "icon-sm" }),
						"absolute left-3",
						classNames?.button_previous
					)}
				>
					<ChevronLeftIcon className="size-4" />
				</button>
			),
		}}
		{...props}
	/>
)
Calendar.displayName = "Calendar"

export { Calendar }
