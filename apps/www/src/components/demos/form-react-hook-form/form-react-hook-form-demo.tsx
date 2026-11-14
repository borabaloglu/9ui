"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

const schema = z.object({
	name: z.string().min(1, "Name is required."),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters.")
		.max(200, "Message must be 200 characters or less."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			message: "",
		},
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
				<CardTitle>Feedback</CardTitle>
				<CardDescription>
					We would love to hear from you. Send us your feedback.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="name"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Name</FieldLabel>
								<Input placeholder="Your name" autoComplete="off" {...field} />
								<FieldDescription>
									Your name will not be displayed publicly.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError match>{fieldState.error?.message}</FieldError>
								)}
							</Field>
						)}
					/>
					<Controller
						name="message"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Message</FieldLabel>
								<InputGroup>
									<InputGroupTextarea
										placeholder="Your feedback..."
										rows={6}
										maxLength={200}
										{...field}
									/>
									<InputGroupAddon align="block-end">
										<InputGroupText className="text-xs">
											{field.value.length}/200 characters
										</InputGroupText>
									</InputGroupAddon>
								</InputGroup>
								<FieldDescription>
									Message must be between 10 and 200 characters.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError match>{fieldState.error?.message}</FieldError>
								)}
							</Field>
						)}
					/>
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
							Send
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
