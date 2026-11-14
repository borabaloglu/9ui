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
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

export default function FormBaseUiDemo() {
	const [loading, setLoading] = useState(false);
	const [messageLength, setMessageLength] = useState(0);
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
				<CardTitle>Feedback</CardTitle>
				<CardDescription>
					We would love to hear from you. Send us your feedback.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setMessageLength(0);
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="name">
						<FieldLabel>Name</FieldLabel>
						<Input autoComplete="off" placeholder="Your name" required />
						<FieldDescription>
							Your name will not be displayed publicly.
						</FieldDescription>
						<FieldError match="valueMissing">Name is required.</FieldError>
					</Field>

					<Field name="message">
						<FieldLabel>Message</FieldLabel>
						<InputGroup>
							<InputGroupTextarea
								minLength={10}
								maxLength={200}
								placeholder="Your feedback..."
								required
								rows={6}
								onChange={(event) =>
									setMessageLength(event.target.value.length)
								}
							/>
							<InputGroupAddon align="block-end">
								<InputGroupText className="text-xs">
									{messageLength}/200 characters
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
						<FieldDescription>
							Message must be between 10 and 200 characters.
						</FieldDescription>
						<FieldError match="valueMissing">Message is required.</FieldError>
						<FieldError match="tooShort">
							Message must be at least 10 characters.
						</FieldError>
						<FieldError match="tooLong">
							Message must be 200 characters or less.
						</FieldError>
					</Field>

					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
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
