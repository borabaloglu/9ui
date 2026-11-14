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
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxValue,
} from "@/components/ui/combobox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";

const tags = [
	"React",
	"Next.js",
	"TypeScript",
	"Tailwind CSS",
	"Base UI",
	"Accessibility",
	"Testing",
	"Performance",
	"Design Systems",
	"Animation",
];

export default function FormBaseUiComboboxDemo() {
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
				<CardTitle>Blog Post</CardTitle>
				<CardDescription>
					Add tags to your post before publishing.
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
					<Field name="tags">
						<FieldLabel>Tags</FieldLabel>
						<Combobox items={tags} multiple required>
							<ComboboxChips>
								<ComboboxValue>
									{(value: string[]) => (
										<>
											{value.map((tag) => (
												<ComboboxChip key={tag} aria-label={tag}>
													{tag}
												</ComboboxChip>
											))}
											<ComboboxChipsInput
												placeholder={value.length > 0 ? "" : "e.g. React"}
											/>
										</>
									)}
								</ComboboxValue>
							</ComboboxChips>
							<ComboboxPopup>
								<ComboboxEmpty>No tags found.</ComboboxEmpty>
								<ComboboxList>
									{(tag: string) => (
										<ComboboxItem key={tag} value={tag}>
											{tag}
										</ComboboxItem>
									)}
								</ComboboxList>
							</ComboboxPopup>
						</Combobox>
						<FieldDescription>
							Tags help readers find your post.
						</FieldDescription>
						<FieldError match="valueMissing">
							Select at least one tag.
						</FieldError>
					</Field>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Publish
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
