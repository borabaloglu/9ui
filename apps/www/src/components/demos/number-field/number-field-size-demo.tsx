import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

const sizes = ["sm", "default", "lg"] as const;

export default function NumberFieldSizeDemo() {
	return (
		<div className="flex flex-col gap-4">
			{sizes.map((size) => (
				<NumberField
					key={size}
					size={size}
					className="w-32"
					defaultValue={5}
					min={0}
					max={100}
				>
					<NumberFieldGroup>
						<NumberFieldDecrement />
						<NumberFieldInput aria-label="Quantity" />
						<NumberFieldIncrement />
					</NumberFieldGroup>
				</NumberField>
			))}
		</div>
	);
}
