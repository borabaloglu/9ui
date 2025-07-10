import { NumberField, NumberFieldScrubArea } from "@/components/ui/number-field"

export default function NumberFieldDemo() {
	return (
		<NumberField className="mx-auto" defaultValue={5} min={0} max={100}>
			<NumberFieldScrubArea />
		</NumberField>
	)
}
