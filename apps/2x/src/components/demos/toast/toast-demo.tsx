"use client"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"

export default function ToastDemo() {
	const toast = useToast()

	return (
		<Button
			onClick={() =>
				toast.add({
					title: "Your request has been sent",
					description: "We'll get back to you as soon as possible",
				})
			}
		>
			Show Toast
		</Button>
	)
}
