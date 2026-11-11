import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldStepDemo() {
	return (
		<NumberField className="w-36" defaultValue={10} min={0} max={100} step={10}>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput aria-label="Quantity" />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberField>
	);
}
