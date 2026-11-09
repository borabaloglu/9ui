import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaFieldDemo() {
	return (
		<Field name="message" validationMode="onBlur" className="max-w-sm">
			<FieldLabel>Message</FieldLabel>
			<Textarea placeholder="How can we help?" required />
			<FieldDescription>We reply within one business day.</FieldDescription>
			<FieldError match="valueMissing">Enter a message.</FieldError>
		</Field>
	);
}
