import { Meter, MeterIndicator, MeterTrack } from "@/components/ui/meter";

export default function MeterWithoutLabelDemo() {
	return (
		<Meter className="max-w-80" value={60} aria-label="Battery level">
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
		</Meter>
	);
}
