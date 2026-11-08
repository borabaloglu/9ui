"use client";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

export default function ToastPromiseDemo() {
	const toast = useToast();

	return (
		<Button
			onClick={() =>
				toast.promise(
					new Promise<string>((resolve) => {
						setTimeout(() => {
							resolve("Request sent");
						}, 2000);
					}),
					{
						loading: "Sending request...",
						success: (data: string) => `Success: ${data}`,
						error: (err: Error) => `Error: ${err.message}`,
					},
				)
			}
		>
			Show Toast
		</Button>
	);
}
