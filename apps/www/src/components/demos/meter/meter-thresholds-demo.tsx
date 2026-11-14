import {
	Meter,
	MeterIndicator,
	MeterLabel,
	MeterTrack,
	MeterValue,
} from "@/components/ui/meter";

const resources = [
	{ label: "CPU", value: 32 },
	{ label: "Memory", value: 71 },
	{ label: "Disk", value: 94 },
];

export default function MeterThresholdsDemo() {
	return (
		<div className="flex w-full max-w-80 flex-col gap-4">
			{resources.map((resource) => (
				<Meter
					key={resource.label}
					value={resource.value}
					low={60}
					high={85}
					optimum={0}
				>
					<MeterLabel>{resource.label}</MeterLabel>
					<MeterValue />
					<MeterTrack>
						<MeterIndicator />
					</MeterTrack>
				</Meter>
			))}
		</div>
	);
}
