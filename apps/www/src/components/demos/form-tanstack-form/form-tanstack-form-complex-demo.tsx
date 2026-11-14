"use client";

import { useId, useRef } from "react";
import { revalidateLogic, useForm, useStore } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const tshirtSizes = [
	{ label: "Small", value: "s" },
	{ label: "Medium", value: "m" },
	{ label: "Large", value: "l" },
	{ label: "X-Large", value: "xl" },
];

const schema = z.object({
	name: z.string().min(1, "Name is required."),
	attendance: z.string().min(1, "Please select an attendance mode."),
	tshirtSize: z.string().min(1, "Please select a T-shirt size."),
	codeOfConduct: z
		.boolean()
		.refine((val) => val === true, "You must agree to the code of conduct."),
	reminders: z.boolean(),
});

export default function FormTanstackFormComplexDemo() {
	const attendanceId = useId();
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			name: "",
			attendance: "",
			tshirtSize: "",
			codeOfConduct: false,
			reminders: false,
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
				<CardTitle>Event Registration</CardTitle>
				<CardDescription>
					Register for the upcoming developer conference.
				</CardDescription>
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
					<form.Field name="name">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>Full Name</FieldLabel>
									<Input
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="Your name"
									/>
									<FieldDescription>
										We will never share your name with anyone else.
									</FieldDescription>
									{isInvalid && <FieldError match>{errorMessage}</FieldError>}
								</Field>
							);
						}}
					</form.Field>
					<Separator />
					<Fieldset>
						<FieldsetLegend>Event Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used to tailor your experience.
						</FieldsetDescription>
						<form.Field name="attendance">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								const errorMessage = field.state.meta.errors[0]?.message;
								return (
									<Field name={field.name} invalid={isInvalid}>
										<RadioGroup
											aria-labelledby={attendanceId}
											className="w-full items-stretch any-pointer-coarse:gap-3"
											value={field.state.value}
											onValueChange={(value) => field.handleChange(value)}
											onBlur={field.handleBlur}
										>
											<RadioGroupLabel id={attendanceId}>
												Attendance
											</RadioGroupLabel>
											<FieldItem>
												<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
													<Radio value="in-person" className="mt-0.5" />
													<div className="flex flex-col gap-1">
														In-person
														<FieldDescription className="font-normal">
															Attend at the venue in San Francisco.
														</FieldDescription>
													</div>
												</FieldLabel>
											</FieldItem>
											<FieldItem>
												<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
													<Radio value="virtual" className="mt-0.5" />
													<div className="flex flex-col gap-1">
														Virtual
														<FieldDescription className="font-normal">
															Join the livestream from anywhere.
														</FieldDescription>
													</div>
												</FieldLabel>
											</FieldItem>
										</RadioGroup>
										<FieldDescription>
											Choose how you will attend the event.
										</FieldDescription>
										{isInvalid && <FieldError match>{errorMessage}</FieldError>}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="tshirtSize">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								const errorMessage = field.state.meta.errors[0]?.message;
								return (
									<Field name={field.name} invalid={isInvalid}>
										<FieldLabel>T-Shirt Size</FieldLabel>
										<Select
											value={field.state.value}
											onValueChange={(value) => field.handleChange(value ?? "")}
											items={tshirtSizes}
										>
											<SelectTrigger
												className="w-full"
												onBlur={field.handleBlur}
											>
												<SelectValue placeholder="Select a size" />
											</SelectTrigger>
											<SelectPopup>
												{tshirtSizes.map((size) => (
													<SelectItem key={size.value} value={size.value}>
														{size.label}
													</SelectItem>
												))}
											</SelectPopup>
										</Select>
										<FieldDescription>
											We will ship your swag bag after the event.
										</FieldDescription>
										{isInvalid && <FieldError match>{errorMessage}</FieldError>}
									</Field>
								);
							}}
						</form.Field>
					</Fieldset>
					<Separator />
					<form.Field name="codeOfConduct">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>
										<Checkbox
											checked={field.state.value}
											onCheckedChange={(checked) => field.handleChange(checked)}
											onBlur={field.handleBlur}
										/>
										I agree to the code of conduct
									</FieldLabel>
									{isInvalid && <FieldError match>{errorMessage}</FieldError>}
								</Field>
							);
						}}
					</form.Field>
					<form.Field name="reminders">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel className="w-full items-start justify-between gap-4">
										<div className="flex flex-col gap-1">
											Email reminders
											<FieldDescription className="font-normal">
												Get notified about schedule changes.
											</FieldDescription>
										</div>
										<Switch
											checked={field.state.value}
											onCheckedChange={(checked) => field.handleChange(checked)}
											onBlur={field.handleBlur}
										/>
									</FieldLabel>
									{isInvalid && <FieldError match>{errorMessage}</FieldError>}
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
							Register
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
