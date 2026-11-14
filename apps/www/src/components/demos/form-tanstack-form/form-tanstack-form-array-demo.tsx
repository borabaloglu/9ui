"use client";

import { useRef } from "react";
import { revalidateLogic, useForm, useStore } from "@tanstack/react-form";
import { PlusIcon, XIcon } from "lucide-react";
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
import { Field, FieldError } from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

const MAX_EMAILS = 5;

const schema = z.object({
	emails: z.array(
		z.object({
			address: z.email("Enter a valid email address."),
		}),
	),
});

export default function FormTanstackFormArrayDemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			emails: [{ address: "" }],
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
				<CardTitle>Invite Teammates</CardTitle>
				<CardDescription>
					Send an invitation to everyone on your team.
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
					<form.Field name="emails" mode="array">
						{(arrayField) => (
							<Fieldset>
								<FieldsetLegend>Email addresses</FieldsetLegend>
								<FieldsetDescription>
									You can invite up to {MAX_EMAILS} people.
								</FieldsetDescription>
								{arrayField.state.value.map((_, index) => (
									<form.Field key={index} name={`emails[${index}].address`}>
										{(field) => {
											const isInvalid =
												field.state.meta.isTouched && !field.state.meta.isValid;
											const errorMessage = field.state.meta.errors[0]?.message;
											return (
												<Field name={field.name} invalid={isInvalid}>
													<div className="flex gap-2">
														<Input
															value={field.state.value}
															onChange={(e) =>
																field.handleChange(e.target.value)
															}
															onBlur={field.handleBlur}
															inputMode="email"
															aria-label={`Email ${index + 1}`}
															autoComplete="off"
															placeholder="name@example.com"
														/>
														<Button
															type="button"
															variant="ghost"
															size="icon"
															aria-label={`Remove email ${index + 1}`}
															disabled={arrayField.state.value.length === 1}
															onClick={() => arrayField.removeValue(index)}
														>
															<XIcon />
														</Button>
													</div>
													{isInvalid && (
														<FieldError match>{errorMessage}</FieldError>
													)}
												</Field>
											);
										}}
									</form.Field>
								))}
								<Button
									type="button"
									variant="outline"
									size="sm"
									className="self-start"
									disabled={arrayField.state.value.length >= MAX_EMAILS}
									onClick={() => arrayField.pushValue({ address: "" })}
								>
									<PlusIcon />
									Add email
								</Button>
							</Fieldset>
						)}
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
							Send invites
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
