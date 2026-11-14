"use client";

import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

const schema = z.object({
	startDate: z
		.date()
		.nullable()
		.refine((date) => date !== null, "Start date is required."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormDatePickerDemo() {
	const id = useId();
	const labelId = useId();
	const descriptionId = useId();
	const errorId = useId();
	const [open, setOpen] = useState(false);
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			startDate: null,
		},
	});

	const onSubmit = async (data: FormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify(data, null, 2)}</code>
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
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="startDate"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
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
													fieldState.invalid
														? `${descriptionId} ${errorId}`
														: descriptionId
												}
												aria-invalid={fieldState.invalid || undefined}
												variant="outline"
												className="justify-between font-normal any-pointer-coarse:text-base"
												ref={field.ref}
												onBlur={field.onBlur}
											/>
										}
									>
										<span className="flex min-w-0 items-center gap-2">
											<CalendarIcon className="text-muted-foreground" />
											{field.value ? (
												<span className="truncate">
													{format(field.value, "MMM d, yyyy")}
												</span>
											) : (
												<span className="text-muted-foreground truncate">
													Select a date
												</span>
											)}
										</span>
										<ChevronsUpDownIcon className="text-muted-foreground" />
									</PopoverTrigger>
									<PopoverPopup className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											autoFocus
											fixedWeeks
											selected={field.value ?? undefined}
											defaultMonth={field.value ?? undefined}
											onSelect={(next) => {
												field.onChange(next ?? null);
												setOpen(false);
											}}
										/>
									</PopoverPopup>
								</Popover>
								<FieldDescription id={descriptionId}>
									Your plan starts on this day.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError id={errorId} match>
										{fieldState.error?.message}
									</FieldError>
								)}
							</Field>
						)}
					/>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="outline"
							disabled={isSubmitting}
							onClick={() => reset()}
						>
							Reset
						</Button>
						<Button type="submit" loading={isSubmitting}>
							Save
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
