import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

export default function SegmentedControlDemo() {
	return (
		<SegmentedControl defaultValue="week" aria-label="Calendar view">
			<SegmentedControlItem value="day">Day</SegmentedControlItem>
			<SegmentedControlItem value="week">Week</SegmentedControlItem>
			<SegmentedControlItem value="month">Month</SegmentedControlItem>
			<SegmentedControlItem value="year">Year</SegmentedControlItem>
		</SegmentedControl>
	);
}
