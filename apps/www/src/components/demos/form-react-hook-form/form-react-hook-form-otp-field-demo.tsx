"use client";

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

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormOTPFieldDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			otp: "",
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
				<CardTitle>Sign in</CardTitle>
				<CardDescription>
					Sign in to your account with a one-time password.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="otp"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>One-time password</FieldLabel>
								<OTPField
									length={LENGTH}
									value={field.value}
									onValueChange={field.onChange}
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
							Verify
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
