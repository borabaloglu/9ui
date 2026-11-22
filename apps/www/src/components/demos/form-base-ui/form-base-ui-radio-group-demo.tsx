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
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const levels = [
	{
		id: "beginner",
		title: "Beginner",
		description: "I'm just getting started with development.",
	},
	{
		id: "intermediate",
		title: "Intermediate",
		description: "I have experience building projects.",
	},
	{
		id: "advanced",
		title: "Advanced",
		description: "I'm comfortable with complex architectures.",
	},
] as const;

export default function FormBaseUiRadioGroupDemo() {
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
				<CardTitle>Experience Level</CardTitle>
				<CardDescription>
					This helps us tailor your onboarding experience.
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
					<Field name="experience">
						<RadioGroup
							aria-label="Experience level"
							className="w-full items-stretch any-pointer-coarse:gap-3"
							required
						>
							{levels.map((level) => (
								<FieldItem key={level.id}>
									<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
										<Radio className="mt-0.5" value={level.id} />
										<div className="flex flex-col gap-1">
											{level.title}
											<FieldDescription className="font-normal">
												{level.description}
											</FieldDescription>
										</div>
									</FieldLabel>
								</FieldItem>
							))}
						</RadioGroup>
						<FieldError match="valueMissing">
							You must select an experience level.
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
