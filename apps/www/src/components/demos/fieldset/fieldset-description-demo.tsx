import { Field, FieldLabel } from "@/components/ui/field";
import {
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export default function FieldsetDescriptionDemo() {
	return (
		<Fieldset className="max-w-xs">
			<FieldsetLegend>Shipping address</FieldsetLegend>
			<FieldsetDescription>
				We deliver to this address. You can change it until the order ships.
			</FieldsetDescription>
			<Field name="street">
				<FieldLabel>Street</FieldLabel>
				<Input placeholder="123 Main St" />
			</Field>
			<Field name="city">
				<FieldLabel>City</FieldLabel>
				<Input placeholder="Springfield" />
			</Field>
		</Fieldset>
	);
}
