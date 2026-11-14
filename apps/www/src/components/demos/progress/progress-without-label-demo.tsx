"use client";

import { useEffect, useState } from "react";

import {
	Progress,
	ProgressIndicator,
	ProgressTrack,
} from "@/components/ui/progress";

export default function ProgressWithoutLabelDemo() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prev) => (prev === 100 ? 100 : prev + 2));
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<Progress className="max-w-80" aria-label="Exporting data" value={value}>
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
		</Progress>
	);
}
