import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

export default function MeterColorDemo() {
	return (
		<Meter className="max-w-80" value={48}>
			<MeterLabel>Monthly budget</MeterLabel>
			<MeterValue />
			<MeterTrack>
				<MeterIndicator className="bg-info" />
			</MeterTrack>
		</Meter>
	);
}
