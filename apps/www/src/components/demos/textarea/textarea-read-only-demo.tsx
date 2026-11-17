import { Textarea } from "@/components/ui/textarea";

export default function TextareaReadOnlyDemo() {
	return (
		<Textarea
			aria-label="Terms"
			className="max-w-sm"
			defaultValue="By continuing you agree to the terms of service and the privacy policy."
			readOnly
		/>
	);
}
