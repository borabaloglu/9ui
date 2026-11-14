"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

const schema = z.object({
	company: z.string().min(1, "Company name is required."),
	taxId: z
		.string()
		.min(1, "Tax ID is required.")
		.regex(/^\d{2}-\d{7}$/, "Tax ID must match XX-XXXXXXX format."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormFieldsetDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			company: "",
			taxId: "",
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
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Fieldset>
						<FieldsetLegend>Billing Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used in your invoice.
						</FieldsetDescription>
						<Controller
							name="company"
							control={control}
							render={({ field, fieldState }) => (
								<Field name={field.name} invalid={fieldState.invalid}>
									<FieldLabel>Company Name</FieldLabel>
									<Input placeholder="Acme Inc." {...field} />
									<FieldDescription>
										Your company's full legal business name registered for
										billing.
									</FieldDescription>
									{fieldState.invalid && (
										<FieldError match>{fieldState.error?.message}</FieldError>
									)}
								</Field>
							)}
						/>
						<Controller
							name="taxId"
							control={control}
							render={({ field, fieldState }) => (
								<Field name={field.name} invalid={fieldState.invalid}>
									<FieldLabel>Tax ID</FieldLabel>
									<Input placeholder="12-3456789" {...field} />
									<FieldDescription>
										Your company's federal Tax Identification Number (TIN)
										registered for billing.
									</FieldDescription>
									{fieldState.invalid && (
										<FieldError match>{fieldState.error?.message}</FieldError>
									)}
								</Field>
							)}
						/>
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
							Submit
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
