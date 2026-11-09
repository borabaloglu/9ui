import { Textarea } from "@/components/ui/textarea";

export default function TextareaInvalidDemo() {
	return (
		<Textarea
			aria-label="Message"
			className="max-w-sm"
			placeholder="Message"
			aria-invalid
		/>
	);
}
