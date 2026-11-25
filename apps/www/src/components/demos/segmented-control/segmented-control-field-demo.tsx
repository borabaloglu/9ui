import { useId } from "react";

import { Field, FieldDescription } from "@/components/ui/field";
import {
	SegmentedControl,
	SegmentedControlItem,
	SegmentedControlLabel,
} from "@/components/ui/segmented-control";

export default function SegmentedControlFieldDemo() {
	const id = useId();

	return (
		<Field name="billing" className="w-fit">
			<SegmentedControlLabel id={id}>Billing period</SegmentedControlLabel>
			<SegmentedControl aria-labelledby={id} defaultValue="monthly">
				<SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
				<SegmentedControlItem value="yearly">Yearly</SegmentedControlItem>
			</SegmentedControl>
			<FieldDescription>Yearly billing saves two months.</FieldDescription>
		</Field>
	);
}
