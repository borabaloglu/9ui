"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Field,
	FieldContent,
	FieldControl,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const schema = z.object({
	displayName: z
		.string()
		.min(3, { message: "Please enter at least 3 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
})

type FormValues = z.infer<typeof schema>

export default function FormDemo() {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			displayName: "",
			email: "",
		},
	})

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	return (
		<Form
			className="flex w-96 flex-col gap-4"
			form={form}
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<Field
				name="displayName"
				control={form.control}
				render={({ field }) => (
					<FieldContent>
						<FieldLabel>Display Name</FieldLabel>
						<FieldControl>
							<Input className="w-full" placeholder="borabalogluu" {...field} />
						</FieldControl>
						<FieldDescription>
							This is the name that will be displayed to other users.
						</FieldDescription>
						<FieldError />
					</FieldContent>
				)}
			/>
			<Field
				name="email"
				control={form.control}
				render={({ field }) => (
					<FieldContent>
						<FieldLabel>Email</FieldLabel>
						<FieldControl>
							<Input
								className="w-full"
								placeholder="your@email.com"
								{...field}
							/>
						</FieldControl>
						<FieldDescription>Enter your email address</FieldDescription>
						<FieldError />
					</FieldContent>
				)}
			/>
			<Button type="submit">Submit</Button>
		</Form>
	)
}
