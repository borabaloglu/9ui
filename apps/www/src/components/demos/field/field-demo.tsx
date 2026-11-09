import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDemo() {
	return (
		<Field name="username" validationMode="onBlur" className="max-w-xs">
			<FieldLabel>Username</FieldLabel>
			<Input placeholder="borabaloglu" required />
			<FieldDescription>Your public display name.</FieldDescription>
			<FieldError match="valueMissing">Enter a username.</FieldError>
		</Field>
	);
}
