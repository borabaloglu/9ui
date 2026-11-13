"use client";

import { useState } from "react";
import type { DropdownProps } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function CalendarSelect({
	options = [],
	value,
	onChange,
	"aria-label": ariaLabel,
}: DropdownProps) {
	const items = options.map((option) => ({
		label: option.label,
		value: String(option.value),
		disabled: option.disabled,
	}));

	return (
		<Select
			items={items}
			value={value === undefined ? null : String(value)}
			onValueChange={(newValue) => {
				if (newValue === null) return;

				onChange?.({
					target: { value: newValue },
				} as React.ChangeEvent<HTMLSelectElement>);
			}}
		>
			<SelectTrigger size="sm" aria-label={ariaLabel}>
				<SelectValue />
			</SelectTrigger>
			<SelectPopup>
				{items.map((item) => (
					<SelectItem
						key={item.value}
						value={item.value}
						disabled={item.disabled}
					>
						{item.label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}

export default function CalendarCustomMonthAndYearSelectorDemo() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			captionLayout="dropdown"
			className="rounded-xl border"
			components={{ Dropdown: CalendarSelect }}
		/>
	);
}
