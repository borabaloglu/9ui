"use client";

import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormComplexDemo() {
	const attendanceId = useId();
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			attendance: "",
			tshirtSize: "",
			codeOfConduct: false,
			reminders: false,
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
				<CardTitle>Event Registration</CardTitle>
				<CardDescription>
					Register for the upcoming developer conference.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="name"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Full Name</FieldLabel>
								<Input placeholder="Your name" {...field} />
								<FieldDescription>
									We will never share your name with anyone else.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError match>{fieldState.error?.message}</FieldError>
								)}
							</Field>
						)}
					/>
					<Separator />
					<Fieldset>
						<FieldsetLegend>Event Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used to tailor your experience.
						</FieldsetDescription>
						<Controller
							name="attendance"
							control={control}
							render={({ field, fieldState }) => (
								<Field name={field.name} invalid={fieldState.invalid}>
									<RadioGroup
										aria-labelledby={attendanceId}
										className="w-full items-stretch any-pointer-coarse:gap-3"
										value={field.value}
										onValueChange={field.onChange}
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
									{fieldState.invalid && (
										<FieldError match>{fieldState.error?.message}</FieldError>
									)}
								</Field>
							)}
						/>
						<Controller
							name="tshirtSize"
							control={control}
							render={({ field, fieldState }) => (
								<Field name={field.name} invalid={fieldState.invalid}>
									<FieldLabel>T-Shirt Size</FieldLabel>
									<Select
										value={field.value}
										onValueChange={field.onChange}
										items={tshirtSizes}
									>
										<SelectTrigger className="w-full">
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
									{fieldState.invalid && (
										<FieldError match>{fieldState.error?.message}</FieldError>
									)}
								</Field>
							)}
						/>
					</Fieldset>
					<Separator />
					<Controller
						name="codeOfConduct"
						control={control}
						render={({ field: { value, onChange, ...field }, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>
									<Checkbox
										checked={value}
										onCheckedChange={onChange}
										{...field}
									/>
									I agree to the code of conduct
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError match>{fieldState.error?.message}</FieldError>
								)}
							</Field>
						)}
					/>
					<Controller
						name="reminders"
						control={control}
						render={({ field: { value, onChange, ...field }, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel className="w-full items-start justify-between gap-4">
									<div className="flex flex-col gap-1">
										Email reminders
										<FieldDescription className="font-normal">
											Get notified about schedule changes.
										</FieldDescription>
									</div>
									<Switch
										checked={value}
										onCheckedChange={onChange}
										{...field}
									/>
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError match>{fieldState.error?.message}</FieldError>
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
							Register
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
