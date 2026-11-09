import { Textarea } from "@/components/ui/textarea";

export default function TextareaDisabledDemo() {
	return (
		<Textarea
			aria-label="Message"
			className="max-w-sm"
			placeholder="Message"
			disabled
		/>
	);
}
