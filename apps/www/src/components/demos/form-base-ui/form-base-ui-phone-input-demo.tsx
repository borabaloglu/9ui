"use client";

import { useId, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
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
import { PhoneInput } from "@/components/ui/phone-input";

export default function FormBaseUiPhoneInputDemo() {
	const id = useId();
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [invalid, setInvalid] = useState(false);

	const handleSubmit = async () => {
		if (!isValidPhoneNumber(phoneNumber)) {
			setInvalid(true);
			document.getElementById(id)?.focus();
			return;
		}

		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify({ phoneNumber }, null, 2)}</code>
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
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setPhoneNumber("");
						setInvalid(false);
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="phoneNumber" invalid={invalid}>
						<FieldLabel>Phone number</FieldLabel>
						<PhoneInput
							id={id}
							placeholder="Enter a phone number"
							value={phoneNumber}
							onChange={(value) => {
								setPhoneNumber(value);
								setInvalid(false);
							}}
						/>
						<FieldDescription>We only call about your orders.</FieldDescription>
						<FieldError match={invalid}>Enter a valid phone number.</FieldError>
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
