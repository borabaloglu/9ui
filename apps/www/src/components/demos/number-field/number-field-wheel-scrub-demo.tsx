import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldWheelScrubDemo() {
	return (
		<NumberField
			className="w-36"
			defaultValue={5}
			min={0}
			max={100}
			allowWheelScrub
		>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput aria-label="Quantity" />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberField>
	);
}
