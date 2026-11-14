"use client";

import { useId, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
	CheckboxGroup,
	CheckboxGroupLabel,
} from "@/components/ui/checkbox-group";
import {
	Field,
	FieldError,
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";

const channels = [
	{ value: "email", label: "Email" },
	{ value: "push", label: "Push notifications" },
	{ value: "sms", label: "Text messages" },
];

export default function FormBaseUiCheckboxGroupDemo() {
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);
	const labelId = useId();

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
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose how you want to be notified.</CardDescription>
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
					<Field
						name="channels"
						validate={(value) =>
							(value as string[]).length > 0
								? null
								: "Select at least one channel."
						}
					>
						<CheckboxGroup aria-labelledby={labelId} defaultValue={[]}>
							<CheckboxGroupLabel id={labelId}>Notify me by</CheckboxGroupLabel>
							{channels.map((channel) => (
								<FieldItem key={channel.value}>
									<FieldLabel className="font-normal">
										<Checkbox value={channel.value} />
										{channel.label}
									</FieldLabel>
								</FieldItem>
							))}
						</CheckboxGroup>
						<FieldError match="customError" />
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
