import {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
} from "@/components/ui/progress";

export default function ProgressIndeterminateDemo() {
	return (
		<Progress className="max-w-80" value={null}>
			<ProgressLabel>Preparing export</ProgressLabel>
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
		</Progress>
	);
}
