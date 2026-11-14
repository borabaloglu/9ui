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
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const currencies = [
	{ label: "USD - US Dollar", value: "usd" },
	{ label: "EUR - Euro", value: "eur" },
	{ label: "GBP - British Pound", value: "gbp" },
	{ label: "JPY - Japanese Yen", value: "jpy" },
	{ label: "CAD - Canadian Dollar", value: "cad" },
	{ label: "AUD - Australian Dollar", value: "aud" },
] as const;

const schema = z.object({
	currency: z.string().min(1, "Please select a currency."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormSelectDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			currency: "",
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
				<CardTitle>Payment Preferences</CardTitle>
				<CardDescription>
					Choose the currency for your transactions.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="currency"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Currency</FieldLabel>
								<Select
									value={field.value}
									onValueChange={field.onChange}
									items={currencies}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select a currency" />
									</SelectTrigger>
									<SelectPopup>
										{currencies.map((currency) => (
											<SelectItem key={currency.value} value={currency.value}>
												{currency.label}
											</SelectItem>
										))}
									</SelectPopup>
								</Select>
								<FieldDescription>
									All prices and invoices will be shown in this currency.
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
