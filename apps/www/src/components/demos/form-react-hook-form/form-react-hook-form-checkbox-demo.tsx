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
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const schema = z.object({
	terms: z
		.boolean()
		.refine((val) => val === true, "You must accept the terms."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormCheckboxDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: { terms: false },
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
				<CardTitle>Terms & Conditions</CardTitle>
				<CardDescription>Please accept the terms to continue.</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="terms"
						control={control}
						render={({ field: { value, onChange, ...field }, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>
									<Checkbox
										checked={value}
										onCheckedChange={onChange}
										{...field}
									/>
									I accept the terms and conditions
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
							Submit
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
