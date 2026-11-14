import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

export default function MeterFormatDemo() {
	return (
		<Meter
			className="max-w-80"
			value={89.6}
			max={128}
			format={{ style: "unit", unit: "gigabyte" }}
		>
			<MeterLabel>SSD</MeterLabel>
			<MeterValue />
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
