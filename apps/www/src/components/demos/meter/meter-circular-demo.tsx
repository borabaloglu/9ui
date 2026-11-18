import {
	Meter,
	MeterCircularIndicator,
	MeterCircularTrack,
	MeterLabel,
	MeterValue,
} from "@/components/ui/meter";

const resources = [
	{ label: "CPU", value: 32 },
	{ label: "Memory", value: 71 },
	{ label: "Disk", value: 94 },
];

export default function MeterCircularDemo() {
	return (
		<div className="flex flex-wrap justify-center gap-8">
			{resources.map((resource) => (
				<Meter
					key={resource.label}
					className="w-auto grid-cols-1 justify-items-center"
					value={resource.value}
					low={60}
					high={85}
					optimum={0}
				>
					<MeterCircularTrack size={64} className="col-start-1 row-start-1">
						<MeterCircularIndicator />
					</MeterCircularTrack>
					<MeterValue className="col-start-1 row-start-1 self-center justify-self-center" />
					<MeterLabel>{resource.label}</MeterLabel>
				</Meter>
			))}
		</div>
	);
}
