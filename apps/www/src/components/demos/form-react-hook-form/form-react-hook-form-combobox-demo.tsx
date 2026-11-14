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
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxValue,
} from "@/components/ui/combobox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";

const tags = [
	"React",
	"Next.js",
	"TypeScript",
	"Tailwind CSS",
	"Base UI",
	"Accessibility",
	"Testing",
	"Performance",
	"Design Systems",
	"Animation",
];

const schema = z.object({
	tags: z.array(z.string()).min(1, "Select at least one tag."),
});

type FormValues = z.infer<typeof schema>;

export default function FormReactHookFormComboboxDemo() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			tags: [],
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
				<CardTitle>Blog Post</CardTitle>
				<CardDescription>
					Add tags to your post before publishing.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="tags"
						control={control}
						render={({ field, fieldState }) => (
							<Field name={field.name} invalid={fieldState.invalid}>
								<FieldLabel>Tags</FieldLabel>
								<Combobox
									items={tags}
									multiple
									value={field.value}
									onValueChange={field.onChange}
								>
									<ComboboxChips>
										<ComboboxValue>
											{(value: string[]) => (
												<>
													{value.map((tag) => (
														<ComboboxChip key={tag} aria-label={tag}>
															{tag}
														</ComboboxChip>
													))}
													<ComboboxChipsInput
														placeholder={value.length > 0 ? "" : "e.g. React"}
													/>
												</>
											)}
										</ComboboxValue>
									</ComboboxChips>
									<ComboboxPopup>
										<ComboboxEmpty>No tags found.</ComboboxEmpty>
										<ComboboxList>
											{(tag: string) => (
												<ComboboxItem key={tag} value={tag}>
													{tag}
												</ComboboxItem>
											)}
										</ComboboxList>
									</ComboboxPopup>
								</Combobox>
								<FieldDescription>
									Tags help readers find your post.
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
							Publish
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
