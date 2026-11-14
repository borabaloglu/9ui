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
import { Input } from "@/components/ui/input";

export default function FormBaseUiInputDemo() {
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
				<CardTitle>Profile Settings</CardTitle>
				<CardDescription>
					Update your profile information below.
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
					<Field name="username">
						<FieldLabel>Username</FieldLabel>
						<Input
							autoComplete="off"
							maxLength={20}
							minLength={3}
							pattern="^[a-zA-Z0-9_]+$"
							placeholder="borabalogluu"
							required
						/>
						<FieldDescription>
							This is your public display name. Must be between 3 and 20
							characters. Must only contain letters, numbers, and underscores.
						</FieldDescription>
						<FieldError match="valueMissing">Username is required.</FieldError>
						<FieldError match="tooShort">
							Username must be at least 3 characters.
						</FieldError>
						<FieldError match="tooLong">
							Username must be at most 20 characters.
						</FieldError>
						<FieldError match="patternMismatch">
							Username can only contain letters, numbers, and underscores.
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
