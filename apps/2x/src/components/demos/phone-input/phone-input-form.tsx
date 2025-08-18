"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from "react-phone-number-input"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { PhoneInput } from "@/components/ui/phone-input"

const schema = z.object({
	phoneNumber: z.string().refine(isValidPhoneNumber, "Invalid phone number"),
})

type FormValues = z.infer<typeof schema>

export default function PhoneInputForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			phoneNumber: "",
		},
	})

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex w-[300px] flex-col gap-4"
			>
				<FormField
					name="phoneNumber"
					control={form.control}
					render={({ field, fieldState }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<PhoneInput
									{...field}
									placeholder="Enter a phone number"
									aria-invalid={!!fieldState.error}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
