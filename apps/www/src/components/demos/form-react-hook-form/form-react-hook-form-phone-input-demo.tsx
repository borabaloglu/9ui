"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
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
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { PhoneInput } from "@/components/ui/phone-input";

const schema = z.object({
	phoneNumber: z
		.string()
		.refine(isValidPhoneNumber, "Enter a valid phone number."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormPhoneInputDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			phoneNumber: "",
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
				<CardTitle>Contact</CardTitle>
				<CardDescription>
					Add a phone number we can reach you on.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="phoneNumber"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Phone number</FieldLabel>
								<PhoneInput
									placeholder="Enter a phone number"
									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
								/>
								<FieldDescription>
									We only call about your orders.
								</FieldDescription>
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
							Save
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
