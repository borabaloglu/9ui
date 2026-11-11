import { Field, FieldLabel } from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export default function FieldsetDisabledDemo() {
	return (
		<Fieldset disabled className="max-w-xs">
			<FieldsetLegend>Billing details</FieldsetLegend>
			<Field name="company">
				<FieldLabel>Company</FieldLabel>
				<Input defaultValue="Acme Inc." />
			</Field>
			<Field name="taxId">
				<FieldLabel>Tax ID</FieldLabel>
				<Input defaultValue="12-3456789" />
			</Field>
		</Fieldset>
	);
}
