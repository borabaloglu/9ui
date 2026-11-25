"use client";

import * as React from "react";

import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

type Aspect = number | "free";

const aspects: { value: Aspect; label: string }[] = [
	{ value: "free", label: "Free" },
	{ value: 1, label: "1:1" },
	{ value: 0.8, label: "4:5" },
	{ value: 16 / 9, label: "16:9" },
];

export default function SegmentedControlControlledDemo() {
	const [aspect, setAspect] = React.useState<Aspect>(1);

	return (
		<div className="flex flex-col items-center gap-3">
			<SegmentedControl
				value={aspect}
				onValueChange={setAspect}
				aria-label="Aspect ratio"
			>
				{aspects.map((item) => (
					<SegmentedControlItem key={item.label} value={item.value}>
						{item.label}
					</SegmentedControlItem>
				))}
			</SegmentedControl>
			<p className="text-muted-foreground text-sm tabular-nums">
				{aspect === "free" ? "Any shape" : `Ratio ${aspect.toFixed(2)}`}
			</p>
		</div>
	);
}
