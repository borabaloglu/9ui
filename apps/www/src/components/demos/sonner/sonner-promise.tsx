import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

export default function SonnerPromiseDemo() {
	return (
		<Button
			onClick={() =>
				toast.promise(
					new Promise((resolve) => {
						setTimeout(() => {
							resolve("Request sent")
						}, 2000)
					}),
					{
						loading: "Sending request...",
						success: "Request sent",
					}
				)
			}
		>
			Show Toast
		</Button>
	)
}
