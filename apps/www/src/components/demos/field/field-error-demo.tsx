import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldErrorDemo() {
	return (
		<Field name="email" invalid className="max-w-xs">
			<FieldLabel>Email</FieldLabel>
			<Input type="email" defaultValue="bora@9ui" />
			<FieldError match>Enter a valid email address.</FieldError>
		</Field>
	);
}
