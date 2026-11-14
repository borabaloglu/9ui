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
import { Switch } from "@/components/ui/switch";

const schema = z.object({
	twoFactor: z
		.boolean()
		.refine(
			(val) => val === true,
			"We highly recommend enabling two-factor authentication for your account.",
		),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormSwitchDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			twoFactor: false,
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
				<CardTitle>Security Settings</CardTitle>
				<CardDescription>
					Manage your account security preferences.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="twoFactor"
						control={control}
						render={({ field: { value, onChange, ...field }, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel className="w-full items-start justify-between gap-4">
									<div className="flex flex-col gap-1">
										Two-factor authentication
										<FieldDescription className="font-normal">
											Add an extra layer of security to your account.
										</FieldDescription>
									</div>
									<Switch
										checked={value}
										onCheckedChange={onChange}
										{...field}
									/>
								</FieldLabel>
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
