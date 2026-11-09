import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDisabledDemo() {
	return (
		<Field name="workspace" disabled className="max-w-xs">
			<FieldLabel>Workspace</FieldLabel>
			<Input defaultValue="9ui" />
			<FieldDescription>Only owners can rename a workspace.</FieldDescription>
		</Field>
	);
}
