"use client";

import { useEffect, useState } from "react";

import {
	Progress,
	ProgressCircularIndicator,
	ProgressCircularTrack,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";

export default function ProgressCircularDemo() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prev) => (prev === 100 ? 100 : prev + 2));
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col gap-6">
			<Progress className="flex w-auto items-center" value={value}>
				<ProgressCircularTrack>
					<ProgressCircularIndicator />
				</ProgressCircularTrack>
				<ProgressLabel>Exporting data</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress className="flex w-auto items-center" value={null}>
				<ProgressCircularTrack size={16} strokeWidth={2}>
					<ProgressCircularIndicator />
				</ProgressCircularTrack>
				<ProgressLabel>Preparing export</ProgressLabel>
			</Progress>
		</div>
	);
}
