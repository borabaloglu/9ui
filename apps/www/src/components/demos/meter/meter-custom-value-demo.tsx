import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

export default function MeterCustomValueDemo() {
	return (
		<Meter
			className="max-w-80"
			value={4}
			max={5}
			getAriaValueText={(_formattedValue, value) => `${value} of 5`}
		>
			<MeterLabel>Seats taken</MeterLabel>
			<MeterValue>{(_formattedValue, value) => `${value} of 5`}</MeterValue>
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
