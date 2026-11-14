"use client";

import { useId } from "react";
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

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormCheckboxGroupDemo() {
	const labelId = useId();
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			channels: [],
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
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose how you want to be notified.</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="channels"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<CheckboxGroup
									aria-labelledby={labelId}
									value={field.value}
									onValueChange={field.onChange}
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
