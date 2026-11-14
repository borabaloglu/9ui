"use client";

import { useRef } from "react";
import { revalidateLogic, useForm, useStore } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

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

const schema = z.object({
	tags: z.array(z.string()).min(1, "Select at least one tag."),
});

export default function FormTanstackFormComboboxDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			tags: [] as string[],
		},
		validationLogic: revalidateLogic(),
		onSubmitInvalid: () => {
			formRef.current
				?.querySelector<HTMLElement>(
					':is(input, textarea, button, [tabindex])[aria-invalid="true"]',
				)
				?.focus();
		},
		validators: {
			onDynamic: schema,
		},
		onSubmit: async ({ value }) => {
			await new Promise((resolve) => setTimeout(resolve, 500));
			toast("You submitted the following values:", {
				description: (
					<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
						<code>{JSON.stringify(value, null, 2)}</code>
					</pre>
				),
			});
		},
	});
	const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Blog Post</CardTitle>
				<CardDescription>
					Add tags to your post before publishing.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					ref={formRef}
					className="flex flex-col gap-4"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<form.Field name="tags">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<FieldLabel>Tags</FieldLabel>
									<Combobox
										items={tags}
										multiple
										value={field.state.value}
										onValueChange={(value) => field.handleChange(value)}
									>
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
															onBlur={field.handleBlur}
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
									{isInvalid && <FieldError match>{errorMessage}</FieldError>}
								</Field>
							);
						}}
					</form.Field>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="outline"
							disabled={isSubmitting}
							onClick={() => form.reset()}
						>
							Reset
						</Button>
						<Button type="submit" loading={isSubmitting}>
							Publish
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
