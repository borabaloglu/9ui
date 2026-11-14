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
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const currencies = [
	{ label: "USD - US Dollar", value: "usd" },
	{ label: "EUR - Euro", value: "eur" },
	{ label: "GBP - British Pound", value: "gbp" },
	{ label: "JPY - Japanese Yen", value: "jpy" },
	{ label: "CAD - Canadian Dollar", value: "cad" },
	{ label: "AUD - Australian Dollar", value: "aud" },
] as const;

const schema = z.object({
	currency: z.string().min(1, "Please select a currency."),
});

export default function FormTanstackFormSelectDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			currency: "",
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
				<CardTitle>Payment Preferences</CardTitle>
				<CardDescription>
					Choose the currency for your transactions.
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
					<form.Field name="currency">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>Currency</FieldLabel>
									<Select
										value={field.state.value}
										onValueChange={(value) => field.handleChange(value ?? "")}
										items={currencies}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select a currency" />
										</SelectTrigger>
										<SelectPopup>
											{currencies.map((currency) => (
												<SelectItem key={currency.value} value={currency.value}>
													{currency.label}
												</SelectItem>
											))}
										</SelectPopup>
									</Select>
									<FieldDescription>
										All prices and invoices will be shown in this currency.
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
