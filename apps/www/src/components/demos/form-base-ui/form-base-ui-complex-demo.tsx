"use client";

import { useId, useState } from "react";
import type { Form as FormPrimitive } from "@base-ui/react/form";
import { toast } from "sonner";

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
	Field,
	FieldDescription,
	FieldError,
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const tshirtSizes = [
	{ label: "Small", value: "s" },
	{ label: "Medium", value: "m" },
	{ label: "Large", value: "l" },
	{ label: "X-Large", value: "xl" },
];

export default function FormBaseUiComplexDemo() {
	const attendanceId = useId();
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);

	const handleSubmit = async (values: FormPrimitive.Values) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Event Registration</CardTitle>
				<CardDescription>
					Register for the upcoming developer conference.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setFormKey((k) => k + 1);
					}}
				>
					<Field name="name">
						<FieldLabel>Full Name</FieldLabel>
						<Input placeholder="Your name" required />
						<FieldDescription>
							We will never share your name with anyone else.
						</FieldDescription>
						<FieldError match="valueMissing">Name is required.</FieldError>
					</Field>
					<Separator />
					<Fieldset>
						<FieldsetLegend>Event Details</FieldsetLegend>
						<FieldsetDescription>
							This information will be used to tailor your experience.
						</FieldsetDescription>
						<Field name="attendance">
							<RadioGroup
								aria-labelledby={attendanceId}
								className="w-full items-stretch any-pointer-coarse:gap-3"
								required
							>
								<RadioGroupLabel id={attendanceId}>Attendance</RadioGroupLabel>
								<FieldItem>
									<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
										<Radio className="mt-0.5" value="in-person" />
										<div className="flex flex-col gap-1">
											In-person
											<FieldDescription className="font-normal">
												Attend at the venue in San Francisco.
											</FieldDescription>
										</div>
									</FieldLabel>
								</FieldItem>
								<FieldItem>
									<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
										<Radio className="mt-0.5" value="virtual" />
										<div className="flex flex-col gap-1">
											Virtual
											<FieldDescription className="font-normal">
												Join the livestream from anywhere.
											</FieldDescription>
										</div>
									</FieldLabel>
								</FieldItem>
							</RadioGroup>
							<FieldDescription>
								Choose how you will attend the event.
							</FieldDescription>
							<FieldError match="valueMissing">
								Please select an attendance mode.
							</FieldError>
						</Field>
						<Field name="tshirtSize">
							<FieldLabel>T-Shirt Size</FieldLabel>
							<Select items={tshirtSizes} required>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a size" />
								</SelectTrigger>
								<SelectPopup>
									{tshirtSizes.map((size) => (
										<SelectItem key={size.value} value={size.value}>
											{size.label}
										</SelectItem>
									))}
								</SelectPopup>
							</Select>
							<FieldDescription>
								We will ship your swag bag after the event.
							</FieldDescription>
							<FieldError match="valueMissing">
								Please select a T-shirt size.
							</FieldError>
						</Field>
					</Fieldset>
					<Separator />
					<Field name="codeOfConduct">
						<FieldLabel>
							<Checkbox required />I agree to the code of conduct
						</FieldLabel>
						<FieldError match="valueMissing">
							You must agree to the code of conduct.
						</FieldError>
					</Field>
					<Field name="reminders">
						<FieldLabel className="w-full items-start justify-between gap-4">
							<div className="flex flex-col gap-1">
								Email reminders
								<FieldDescription className="font-normal">
									Get notified about schedule changes.
								</FieldDescription>
							</div>
							<Switch />
						</FieldLabel>
					</Field>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Register
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
