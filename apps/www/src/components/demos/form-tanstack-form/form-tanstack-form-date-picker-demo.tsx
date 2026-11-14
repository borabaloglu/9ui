"use client";

import { useId, useRef, useState } from "react";
import { revalidateLogic, useForm, useStore } from "@tanstack/react-form";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDownIcon } from "lucide-react";
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

export default function FormTanstackFormDatePickerDemo() {
	const id = useId();
	const labelId = useId();
	const descriptionId = useId();
	const errorId = useId();
	const [open, setOpen] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			startDate: null as Date | null,
		},
		validationLogic: revalidateLogic(),
		onSubmitInvalid: () => {
			formRef.current
				?.querySelector<HTMLElement>(
					':is(input, textarea, button, [tabindex])[aria-invalid="true"]',
				)
				?.focus();
		},
		validators: {
			onDynamic: schema,
		},
		onSubmit: async ({ value }) => {
			await new Promise((resolve) => setTimeout(resolve, 500));
			toast("You submitted the following values:", {
				description: (
					<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
						<code>{JSON.stringify(value, null, 2)}</code>
					</pre>
				),
			});
		},
	});
	const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Subscription</CardTitle>
				<CardDescription>Choose when your plan should start.</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					ref={formRef}
					className="flex flex-col gap-4"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<form.Field name="startDate">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
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
														isInvalid
															? `${descriptionId} ${errorId}`
															: descriptionId
													}
													aria-invalid={isInvalid || undefined}
													variant="outline"
													className="justify-between font-normal any-pointer-coarse:text-base"
													onBlur={field.handleBlur}
												/>
											}
										>
											<span className="flex min-w-0 items-center gap-2">
												<CalendarIcon className="text-muted-foreground" />
												{field.state.value ? (
													<span className="truncate">
														{format(field.state.value, "MMM d, yyyy")}
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
												selected={field.state.value ?? undefined}
												defaultMonth={field.state.value ?? undefined}
												onSelect={(next) => {
													field.handleChange(next ?? null);
													setOpen(false);
												}}
											/>
										</PopoverPopup>
									</Popover>
									<FieldDescription id={descriptionId}>
										Your plan starts on this day.
									</FieldDescription>
									{isInvalid && (
										<FieldError id={errorId} match>
											{errorMessage}
										</FieldError>
									)}
								</Field>
							);
						}}
					</form.Field>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="outline"
							disabled={isSubmitting}
							onClick={() => form.reset()}
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
