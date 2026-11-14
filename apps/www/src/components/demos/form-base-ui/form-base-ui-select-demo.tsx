"use client";

import { useState } from "react";
import type { Form as FormPrimitive } from "@base-ui/react/form";
import { toast } from "sonner";

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
import { Form } from "@/components/ui/form";
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

export default function FormBaseUiSelectDemo() {
	const [formKey, setFormKey] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: FormPrimitive.Values) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Payment Preferences</CardTitle>
				<CardDescription>
					Choose the currency for your transactions.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					key={formKey}
					onFormSubmit={handleSubmit}
					onReset={(event) => {
						event.preventDefault();
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="currency">
						<FieldLabel>Currency</FieldLabel>
						<Select items={currencies} required>
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
						<FieldError match="valueMissing">
							Please select a currency.
						</FieldError>
					</Field>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Save
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
