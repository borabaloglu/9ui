"use client";

import { useState } from "react";
import type { Form as FormPrimitive } from "@base-ui/react/form";
import { toast } from "sonner";

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
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FormBaseUiFieldsetDemo() {
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);

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
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setFormKey((k) => k + 1);
					}}
				>
					<Fieldset>
						<FieldsetLegend>Billing Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used in your invoice.
						</FieldsetDescription>
						<Field name="company">
							<FieldLabel>Company Name</FieldLabel>
							<Input placeholder="Acme Inc." required />
							<FieldDescription>
								Your company's full legal business name registered for billing.
							</FieldDescription>
							<FieldError match="valueMissing">
								Company name is required.
							</FieldError>
						</Field>
						<Field name="taxId">
							<FieldLabel>Tax ID</FieldLabel>
							<Input
								pattern="^\d{2}-\d{7}$"
								placeholder="12-3456789"
								required
							/>
							<FieldDescription>
								Your company's federal Tax Identification Number (TIN)
								registered for billing.
							</FieldDescription>
							<FieldError match="valueMissing">Tax ID is required.</FieldError>
							<FieldError match="patternMismatch">
								Tax ID must match XX-XXXXXXX format.
							</FieldError>
						</Field>
					</Fieldset>

					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Submit
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
