import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

export default function MeterDemo() {
	return (
		<Meter className="max-w-80" value={75}>
			<MeterLabel>Storage used</MeterLabel>
			<MeterValue />
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
