"use client";

import { useRef, useState } from "react";
import type { Form as FormPrimitive } from "@base-ui/react/form";
import { PlusIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldError } from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const MAX_EMAILS = 5;

export default function FormBaseUiArrayDemo() {
	const [loading, setLoading] = useState(false);
	const [formKey, setFormKey] = useState(0);
	const [rows, setRows] = useState([0]);
	const nextRow = useRef(1);

	const handleSubmit = async (values: FormPrimitive.Values) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);

		const emails = rows.map((row) => values[`email-${row}`]);

		toast("You submitted the following values:", {
			description: (
				<pre className="bg-muted text-foreground mt-2 overflow-x-auto rounded-md p-3">
					<code>{JSON.stringify({ emails }, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Invite Teammates</CardTitle>
				<CardDescription>
					Send an invitation to everyone on your team.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form
					onFormSubmit={handleSubmit}
					key={formKey}
					onReset={(event) => {
						event.preventDefault();
						setRows([0]);
						setFormKey((k) => k + 1);
					}}
				>
					<Fieldset>
						<FieldsetLegend>Email addresses</FieldsetLegend>
						<FieldsetDescription>
							You can invite up to {MAX_EMAILS} people.
						</FieldsetDescription>
						{rows.map((row, index) => (
							<Field key={row} name={`email-${row}`}>
								<div className="flex gap-2">
									<Input
										type="email"
										aria-label={`Email ${index + 1}`}
										autoComplete="off"
										placeholder="name@example.com"
										required
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										aria-label={`Remove email ${index + 1}`}
										disabled={rows.length === 1}
										onClick={() =>
											setRows((prev) => prev.filter((item) => item !== row))
										}
									>
										<XIcon />
									</Button>
								</div>
								<FieldError match="valueMissing">Email is required.</FieldError>
								<FieldError match="typeMismatch">
									Enter a valid email address.
								</FieldError>
							</Field>
						))}
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="self-start"
							disabled={rows.length >= MAX_EMAILS}
							onClick={() => setRows((prev) => [...prev, nextRow.current++])}
						>
							<PlusIcon />
							Add email
						</Button>
					</Fieldset>
					<div className="flex gap-2">
						<Button disabled={loading} type="reset" variant="outline">
							Reset
						</Button>
						<Button loading={loading} type="submit">
							Send invites
						</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
