import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

export default function SegmentedControlDisabledItemDemo() {
	return (
		<SegmentedControl defaultValue="day" aria-label="Calendar view">
			<SegmentedControlItem value="day">Day</SegmentedControlItem>
			<SegmentedControlItem value="week" disabled>
				Week
			</SegmentedControlItem>
			<SegmentedControlItem value="month">Month</SegmentedControlItem>
		</SegmentedControl>
	);
}
