"use client";

import { useId, useRef } from "react";
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

const channels = [
	{ value: "email", label: "Email" },
	{ value: "push", label: "Push notifications" },
	{ value: "sms", label: "Text messages" },
];

const schema = z.object({
	channels: z.array(z.string()).min(1, "Select at least one channel."),
});

export default function FormTanstackFormCheckboxGroupDemo() {
	const labelId = useId();
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm({
		defaultValues: {
			channels: [] as string[],
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
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose how you want to be notified.</CardDescription>
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
					<form.Field name="channels">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							const errorMessage = field.state.meta.errors[0]?.message;
							return (
								<Field name={field.name} invalid={isInvalid}>
									<CheckboxGroup
										aria-labelledby={labelId}
										value={field.state.value}
										onValueChange={(value) => field.handleChange(value)}
									>
										<CheckboxGroupLabel id={labelId}>
											Notify me by
										</CheckboxGroupLabel>
										{channels.map((channel) => (
											<FieldItem key={channel.value}>
												<FieldLabel className="font-normal">
													<Checkbox value={channel.value} />
													{channel.label}
												</FieldLabel>
											</FieldItem>
										))}
									</CheckboxGroup>
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
							Save
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
