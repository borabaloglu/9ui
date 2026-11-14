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

const schema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters.")
		.max(20, "Username must be at most 20 characters.")
		.regex(
			/^[a-zA-Z0-9_]+$/,
			"Username can only contain letters, numbers, and underscores.",
		),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormInputDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			username: "",
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
				<CardTitle>Profile Settings</CardTitle>
				<CardDescription>
					Update your profile information below.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="username"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Username</FieldLabel>
								<Input
									placeholder="borabalogluu"
									autoComplete="username"
									{...field}
								/>
								<FieldDescription>
									This is your public display name. Must be between 3 and 20
									characters. Must only contain letters, numbers, and
									underscores.
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
							Save
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
