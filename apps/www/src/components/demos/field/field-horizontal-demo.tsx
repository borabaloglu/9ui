import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function FieldHorizontalDemo() {
	return (
		<Field name="notifications" orientation="horizontal">
			<Switch />
			<FieldLabel>Email notifications</FieldLabel>
		</Field>
	);
}
