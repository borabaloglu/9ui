"use client";

import { useEffect, useState } from "react";

import {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
} from "@/components/ui/progress";

export default function ProgressCustomValueDemo() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prev) => (prev === 100 ? 100 : prev + 2));
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<Progress
			className="max-w-80"
			value={value}
			getAriaValueText={(_formattedValue, value) => `${value ?? 0} MB / 100 MB`}
		>
			<ProgressLabel>Uploading</ProgressLabel>
			<ProgressValue>
				{(_formattedValue, value) => `${value ?? 0} MB / 100 MB`}
			</ProgressValue>
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
		</Progress>
	);
}
