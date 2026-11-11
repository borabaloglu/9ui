import { Field, FieldLabel } from "@/components/ui/field";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
	NumberFieldScrubArea,
} from "@/components/ui/number-field";

export default function NumberFieldScrubDemo() {
	return (
		<Field name="quantity" className="w-36">
			<NumberField defaultValue={5} min={0} max={100}>
				<NumberFieldScrubArea>
					<FieldLabel>Quantity</FieldLabel>
				</NumberFieldScrubArea>
				<NumberFieldGroup>
					<NumberFieldDecrement />
					<NumberFieldInput />
					<NumberFieldIncrement />
				</NumberFieldGroup>
			</NumberField>
		</Field>
	);
}
