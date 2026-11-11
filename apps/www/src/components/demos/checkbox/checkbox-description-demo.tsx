import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function CheckboxDescriptionDemo() {
	return (
		<Field
			name="updates"
			className="grid w-fit max-w-xs grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1"
		>
			<Checkbox />
			<FieldLabel>Product updates</FieldLabel>
			<FieldDescription className="col-start-2">
				Get an email when a new component ships.
			</FieldDescription>
		</Field>
	);
}
