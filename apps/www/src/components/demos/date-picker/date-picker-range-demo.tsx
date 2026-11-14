"use client";

import { useState, useSyncExternalStore } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

function formatRange(range: DateRange | undefined) {
	if (!range?.from) return undefined;
	if (!range.to) return format(range.from, "MMM d, yyyy");

	const sameYear = range.from.getFullYear() === range.to.getFullYear();

	return `${format(range.from, sameYear ? "MMM d" : "MMM d, yyyy")} – ${format(range.to, "MMM d, yyyy")}`;
}

function subscribe(callback: () => void) {
	const query = window.matchMedia("(min-width: 768px)");

	query.addEventListener("change", callback);

	return () => query.removeEventListener("change", callback);
}

function useIsWide() {
	return useSyncExternalStore(
		subscribe,
		() => window.matchMedia("(min-width: 768px)").matches,
		() => false,
	);
}

export default function DatePickerRangeDemo() {
	const isWide = useIsWide();
	const [range, setRange] = useState<DateRange | undefined>(undefined);

	const label = formatRange(range);

	return (
		<Popover>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						className="w-full max-w-72 justify-between font-normal any-pointer-coarse:text-base"
					/>
				}
			>
				<span className="flex min-w-0 items-center gap-2">
					<CalendarIcon className="text-muted-foreground" />
					{label ? (
						<span className="truncate">{label}</span>
					) : (
						<span className="text-muted-foreground truncate">
							Select a date range
						</span>
					)}
				</span>
				<ChevronsUpDownIcon className="text-muted-foreground" />
			</PopoverTrigger>
			<PopoverPopup className="w-auto p-0" align="start">
				<Calendar
					mode="range"
					autoFocus
					fixedWeeks
					showOutsideDays={!isWide}
					numberOfMonths={isWide ? 2 : 1}
					selected={range}
					defaultMonth={range?.from}
					onSelect={setRange}
				/>
			</PopoverPopup>
		</Popover>
	);
}
