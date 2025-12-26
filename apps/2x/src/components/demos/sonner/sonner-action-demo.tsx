import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerActionDemo() {
	return (
		<Button
			onClick={() =>
				toast("Your email has been sent", {
					description: "We'll get back to you as soon as possible",
					action: {
						label: "Unsend",
						onClick: () => toast.success("Email unsent"),
					},
				})
			}
		>
			Show Toast
		</Button>
	)
}
