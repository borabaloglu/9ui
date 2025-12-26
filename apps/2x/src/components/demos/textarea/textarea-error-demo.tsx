import { Textarea } from "@/components/ui/textarea"

export default function TextareaErrorDemo() {
	return (
		<Textarea
			className="w-80"
			placeholder="Enter your message..."
			aria-invalid
		/>
	)
}
