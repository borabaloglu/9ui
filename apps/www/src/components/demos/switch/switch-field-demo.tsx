import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchFieldDemo() {
	return (
		<Field name="notifications" className="w-fit">
			<FieldLabel>
				<Switch />
				Enable notifications
			</FieldLabel>
			<FieldDescription>Get notified about schedule changes.</FieldDescription>
		</Field>
	);
}
