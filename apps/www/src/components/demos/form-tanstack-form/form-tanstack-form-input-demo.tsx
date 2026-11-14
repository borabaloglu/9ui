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
import { Input } from "@/components/ui/input";

const schema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters.")
		.max(20, "Username must be at most 20 characters.")
		.regex(
			/^[a-zA-Z0-9_]+$/,
			"Username can only contain letters, numbers, and underscores.",
		),
});

export default function FormTanstackFormInputDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			username: "",
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
				<CardTitle>Profile Settings</CardTitle>
				<CardDescription>
					Update your profile information below.
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
					<form.Field name="username">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>Username</FieldLabel>
									<Input
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="borabalogluu"
										autoComplete="username"
									/>
									<FieldDescription>
										This is your public display name. Must be between 3 and 20
										characters. Must only contain letters, numbers, and
										underscores.
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
							Save
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
