"use client";

import { useRef } from "react";
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
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;

const schema = z.object({
	otp: z.string().length(LENGTH, "OTP must be 6 characters."),
});

export default function FormTanstackFormOTPFieldDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			otp: "",
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
				<CardTitle>Sign in</CardTitle>
				<CardDescription>
					Sign in to your account with a one-time password.
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
					<form.Field name="otp">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>One-time password</FieldLabel>
									<OTPField
										length={LENGTH}
										value={field.state.value}
										onValueChange={(value) => field.handleChange(value)}
										onBlur={field.handleBlur}
									>
										{Array.from({ length: LENGTH }, (_, index) => (
											<OTPFieldInput
												key={index}
												aria-label={`Character ${index + 1} of ${LENGTH}`}
											/>
										))}
									</OTPField>
									<FieldDescription>
										Enter the 6-digit code sent to your device.
									</FieldDescription>
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
							Verify
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
