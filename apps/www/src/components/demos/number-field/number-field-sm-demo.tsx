import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldSmDemo() {
	return (
		<NumberField size="sm" className="w-32" defaultValue={5} min={0} max={100}>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput aria-label="Quantity" />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberField>
	);
}
