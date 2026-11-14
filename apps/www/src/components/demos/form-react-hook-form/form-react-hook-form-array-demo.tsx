"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, XIcon } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormArrayDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			emails: [{ address: "" }],
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "emails",
	});

	const onSubmit = async (data: FormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Invite Teammates</CardTitle>
				<CardDescription>
					Send an invitation to everyone on your team.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Fieldset>
						<FieldsetLegend>Email addresses</FieldsetLegend>
						<FieldsetDescription>
							You can invite up to {MAX_EMAILS} people.
						</FieldsetDescription>
						{fields.map((item, index) => (
							<Controller
								key={item.id}
								name={`emails.${index}.address`}
								control={control}
								render={({ field, fieldState }) => (
									<Field name={field.name} invalid={fieldState.invalid}>
										<div className="flex gap-2">
											<Input
												{...field}
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
												disabled={fields.length === 1}
												onClick={() => remove(index)}
											>
												<XIcon />
											</Button>
										</div>
										{fieldState.invalid && (
											<FieldError match>{fieldState.error?.message}</FieldError>
										)}
									</Field>
								)}
							/>
						))}
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="self-start"
							disabled={fields.length >= MAX_EMAILS}
							onClick={() => append({ address: "" })}
						>
							<PlusIcon />
							Add email
						</Button>
					</Fieldset>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="outline"
							disabled={isSubmitting}
							onClick={() => reset()}
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
