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

export default function FormBaseUiServerErrorsDemo() {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<FormPrimitive.Props["errors"]>({});
	const [formKey, setFormKey] = useState(0);

	const handleSubmit = async (values: FormPrimitive.Values) => {
		setLoading(true);
		const result = await simulateServerResponse(values);
		setLoading(false);

		if (!result.success) {
			setErrors(result.errors);
			return;
		}

		setErrors({});
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
					errors={errors}
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
							defaultValue="admin"
							required
						/>
						<FieldDescription>
							This is your public display name. Must be between 3 and 20
							characters. Must only contain letters, numbers, and underscores.
						</FieldDescription>
						<FieldError />
					</Field>
					<div className="flex gap-2">
						<Button
							disabled={loading}
							onClick={() => setErrors({})}
							type="reset"
							variant="outline"
						>
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Send
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}

type ServerResult =
	| { success: true }
	| { success: false; errors: FormPrimitive.Props["errors"] };

// Simulate a server-side form submission that rejects the username "admin"
async function simulateServerResponse(
	values: FormPrimitive.Values,
): Promise<ServerResult> {
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	const username = String(values.username ?? "")
		.trim()
		.toLowerCase();

	if (username === "admin") {
		return {
			success: false,
			errors: { username: "'admin' is reserved for system use" },
		};
	}

	return { success: true };
}
