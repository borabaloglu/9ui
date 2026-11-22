import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputFieldDemo() {
	return (
		<Field name="name" validationMode="onBlur" className="w-full max-w-sm">
			<FieldLabel>Full name</FieldLabel>
			<Input placeholder="Ada Lovelace" required />
			<FieldDescription>Shown on your public profile.</FieldDescription>
			<FieldError match="valueMissing">Enter your name.</FieldError>
		</Field>
	);
}
