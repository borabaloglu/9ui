"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

function Calendar({
	classNames,
	...props
}: React.ComponentProps<typeof DayPicker>) {
	return (
		<DayPicker
			classNames={{
				root: cn(
					"relative size-fit select-none rounded-md border p-3 shadow-xs",
					props.className
				),
				month: cn("m-0 space-y-1 text-center", classNames?.month),
				month_caption: cn(
					"flex h-8 items-center justify-center text-sm font-medium",
					classNames?.month_caption
				),
				today: cn("bg-accent", classNames?.today),
				week: cn("flex justify-center py-0.5", classNames?.week),
				day: cn(
					"flex size-8 items-center justify-center rounded-md text-sm font-normal hover:[&:has(>button)]:bg-accent hover:[&:has(>button)]:text-accent-foreground",
					classNames?.day
				),
				day_button: cn(
					"size-8 rounded-md focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent",
					classNames?.day_button
				),
				weekdays: cn("flex justify-center", classNames?.weekdays),
				weekday: cn(
					"size-8 text-sm font-normal text-muted-foreground",
					classNames?.weekday
				),
				outside: cn(
					"text-muted-foreground/80 hover:text-muted-foreground/80!",
					classNames?.outside
				),
				selected: cn(
					"bg-primary! text-primary-foreground! hover:text-primary-foreground!",
					classNames?.selected
				),
				range_middle: cn(
					"bg-secondary! text-secondary-foreground! rounded-none first:rounded-l-md last:rounded-r-md hover:bg-secondary! hover:text-secondary-foreground!",
					classNames?.range_middle
				),
				range_start: cn(
					props.mode === "range" &&
						props.selected?.from?.getTime() !== props.selected?.to?.getTime()
						? "not-last:rounded-r-none bg-secondary! [&>button]:bg-primary!"
						: "",
					classNames?.range_start
				),
				range_end: cn(
					props.mode === "range" &&
						props.selected?.from?.getTime() !== props.selected?.to?.getTime()
						? "not-first:rounded-l-none bg-secondary! [&>button]:bg-primary!"
						: "",
					classNames?.range_end
				),
				disabled: cn(
					"pointer-events-none text-muted-foreground opacity-50",
					classNames?.disabled
				),
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
}

export { Calendar }
