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
import { Switch } from "@/components/ui/switch";

export default function FormBaseUiSwitchDemo() {
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
			<CardHeader>
				<CardTitle>Security Settings</CardTitle>
				<CardDescription>
					Manage your account security preferences.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="twoFactor">
						<FieldLabel className="w-full items-start justify-between gap-4">
							<div className="flex flex-col gap-1">
								Two-factor authentication
								<FieldDescription className="font-normal">
									Add an extra layer of security to your account.
								</FieldDescription>
							</div>
							<Switch required />
						</FieldLabel>
						<FieldError match="valueMissing">
							We highly recommend enabling two-factor authentication for your
							account.
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
