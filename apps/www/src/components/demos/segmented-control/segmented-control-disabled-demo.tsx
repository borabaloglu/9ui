import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

export default function SegmentedControlDisabledDemo() {
	return (
		<SegmentedControl disabled defaultValue="week" aria-label="Calendar view">
			<SegmentedControlItem value="day">Day</SegmentedControlItem>
			<SegmentedControlItem value="week">Week</SegmentedControlItem>
			<SegmentedControlItem value="month">Month</SegmentedControlItem>
		</SegmentedControl>
	);
}
