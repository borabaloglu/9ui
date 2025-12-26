"use client"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"

export default function ToastPromiseDemo() {
	const toast = useToast()

	return (
		<Button
			onClick={() =>
				toast.promise(
					new Promise<string>((resolve) => {
						setTimeout(() => {
							resolve("Request sent")
						}, 2000)
					}),
					{
						loading: "Sending request...",
						success: (data: string) => `Success: ${data}`,
						error: (err: Error) => `Error: ${err.message}`,
					}
				)
			}
		>
			Show Toast
		</Button>
	)
}
