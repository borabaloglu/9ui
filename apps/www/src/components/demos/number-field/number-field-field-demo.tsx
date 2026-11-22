import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldFieldDemo() {
	return (
		<Field name="guests" className="w-44">
			<FieldLabel>Guests</FieldLabel>
			<NumberField defaultValue={2} min={1} max={20}>
				<NumberFieldGroup>
					<NumberFieldDecrement />
					<NumberFieldInput />
					<NumberFieldIncrement />
				</NumberFieldGroup>
			</NumberField>
			<FieldDescription>Up to 20 per booking.</FieldDescription>
		</Field>
	);
}
