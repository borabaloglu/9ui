import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

const sizes = ["sm", "default", "lg"] as const;

export default function SegmentedControlSizeDemo() {
	return (
		<div className="flex flex-col items-center gap-4">
			{sizes.map((size) => (
				<SegmentedControl
					key={size}
					size={size}
					defaultValue="week"
					aria-label="Calendar view"
				>
					<SegmentedControlItem value="day">Day</SegmentedControlItem>
					<SegmentedControlItem value="week">Week</SegmentedControlItem>
					<SegmentedControlItem value="month">Month</SegmentedControlItem>
				</SegmentedControl>
			))}
		</div>
	);
}
