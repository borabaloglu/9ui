import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDescriptionDemo() {
	return (
		<Field name="email" className="max-w-xs">
			<FieldLabel>Email</FieldLabel>
			<Input type="email" placeholder="you@example.com" />
			<FieldDescription>
				Used for sign-in only. Read our <a href="#privacy">privacy policy</a>.
			</FieldDescription>
		</Field>
	);
}
