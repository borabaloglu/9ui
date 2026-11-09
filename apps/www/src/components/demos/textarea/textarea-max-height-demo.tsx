import { Textarea } from "@/components/ui/textarea";

export default function TextareaMaxHeightDemo() {
	return (
		<Textarea
			aria-label="Message"
			className="max-h-32 max-w-sm"
			placeholder="Message"
		/>
	);
}
