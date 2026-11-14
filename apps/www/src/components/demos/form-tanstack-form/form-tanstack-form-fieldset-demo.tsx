"use client";

import { useRef } from "react";
import { revalidateLogic, useForm, useStore } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

const schema = z.object({
	company: z.string().min(1, "Company name is required."),
	taxId: z
		.string()
		.min(1, "Tax ID is required.")
		.regex(/^\d{2}-\d{7}$/, "Tax ID must match XX-XXXXXXX format."),
});

export default function FormTanstackFormFieldsetDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			company: "",
			taxId: "",
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
			<CardContent>
				<form
					ref={formRef}
					className="flex flex-col gap-4"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<Fieldset>
						<FieldsetLegend>Billing Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used in your invoice.
						</FieldsetDescription>
						<form.Field name="company">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								const errorMessage = field.state.meta.errors[0]?.message;
								return (
									<Field name={field.name} invalid={isInvalid}>
										<FieldLabel>Company Name</FieldLabel>
										<Input
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											onBlur={field.handleBlur}
											placeholder="Acme Inc."
										/>
										<FieldDescription>
											Your company's full legal business name registered for
											billing.
										</FieldDescription>
										{isInvalid && <FieldError match>{errorMessage}</FieldError>}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="taxId">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								const errorMessage = field.state.meta.errors[0]?.message;
								return (
									<Field name={field.name} invalid={isInvalid}>
										<FieldLabel>Tax ID</FieldLabel>
										<Input
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											onBlur={field.handleBlur}
											placeholder="12-3456789"
										/>
										<FieldDescription>
											Your company's federal Tax Identification Number (TIN)
											registered for billing.
										</FieldDescription>
										{isInvalid && <FieldError match>{errorMessage}</FieldError>}
									</Field>
								);
							}}
						</form.Field>
					</Fieldset>
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
							Submit
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
