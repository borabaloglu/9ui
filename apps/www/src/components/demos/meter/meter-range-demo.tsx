import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

export default function MeterRangeDemo() {
	return (
		<Meter
			className="max-w-80"
			value={-4}
			min={-10}
			max={40}
			format={{ style: "unit", unit: "celsius" }}
		>
			<MeterLabel>Temperature</MeterLabel>
			<MeterValue />
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
