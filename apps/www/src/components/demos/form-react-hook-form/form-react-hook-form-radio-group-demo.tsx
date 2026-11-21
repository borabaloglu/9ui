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
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const levels = [
	{
		id: "beginner",
		title: "Beginner",
		description: "I'm just getting started with development.",
	},
	{
		id: "intermediate",
		title: "Intermediate",
		description: "I have experience building projects.",
	},
	{
		id: "advanced",
		title: "Advanced",
		description: "I'm comfortable with complex architectures.",
	},
] as const;

const schema = z.object({
	experience: z.string().min(1, "You must select an experience level."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormRadioGroupDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			experience: "",
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
				<CardTitle>Experience Level</CardTitle>
				<CardDescription>
					This helps us tailor your onboarding experience.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="experience"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<RadioGroup
									aria-label="Experience level"
									className="w-full items-stretch any-pointer-coarse:gap-3"
									value={field.value}
									onValueChange={field.onChange}
								>
									{levels.map((level) => (
										<FieldItem key={level.id}>
											<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
												<Radio value={level.id} className="mt-0.5" />
												<div className="flex flex-col gap-1">
													{level.title}
													<FieldDescription className="font-normal">
														{level.description}
													</FieldDescription>
												</div>
											</FieldLabel>
										</FieldItem>
									))}
								</RadioGroup>
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
