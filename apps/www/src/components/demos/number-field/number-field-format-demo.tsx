import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldFormatDemo() {
	return (
		<NumberField
			className="w-36"
			defaultValue={20}
			min={0}
			format={{ style: "currency", currency: "USD" }}
		>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput aria-label="Price" />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberField>
	);
}
