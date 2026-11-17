"use client";

import { useId, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function FormBaseUiDatePickerDemo() {
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);
	const id = useId();
	const labelId = useId();
	const descriptionId = useId();
	const errorId = useId();
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | null>(null);
	const [invalid, setInvalid] = useState(false);

	const handleSubmit = async () => {
		if (!date) {
			setInvalid(true);
			document.getElementById(id)?.focus();
			return;
		}

		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify({ startDate: date }, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Subscription</CardTitle>
				<CardDescription>Choose when your plan should start.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setDate(null);
						setInvalid(false);
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="startDate" invalid={invalid}>
						<FieldLabel id={labelId} htmlFor={id}>
							Start date
						</FieldLabel>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger
								render={
									<Button
										id={id}
										aria-labelledby={`${labelId} ${id}`}
										aria-describedby={
											invalid ? `${descriptionId} ${errorId}` : descriptionId
										}
										aria-invalid={invalid || undefined}
										variant="outline"
										className="justify-between font-normal"
									/>
								}
							>
								<span className="flex min-w-0 items-center gap-2">
									<CalendarIcon className="text-muted-foreground" />
									{date ? (
										<span className="truncate">
											{format(date, "MMM d, yyyy")}
										</span>
									) : (
										<span className="text-muted-foreground truncate">
											Select a date
										</span>
									)}
								</span>
								<ChevronsUpDownIcon className="text-muted-foreground" />
							</PopoverTrigger>
							<PopoverPopup
								aria-label="Choose date"
								className="w-auto p-0"
								align="start"
							>
								<Calendar
									mode="single"
									autoFocus
									fixedWeeks
									selected={date ?? undefined}
									defaultMonth={date ?? undefined}
									onSelect={(next) => {
										setDate(next ?? null);
										setInvalid(false);
										setOpen(false);
									}}
								/>
							</PopoverPopup>
						</Popover>
						<FieldDescription id={descriptionId}>
							Your plan starts on this day.
						</FieldDescription>
						<FieldError id={errorId} match={invalid}>
							Start date is required.
						</FieldError>
					</Field>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Save
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
