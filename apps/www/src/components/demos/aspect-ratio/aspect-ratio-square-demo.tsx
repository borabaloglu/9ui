import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioSquareDemo() {
	return (
		<AspectRatio ratio={1} className="bg-muted max-w-40 rounded-xl border">
			<div className="flex size-full items-center justify-center text-xl font-medium tabular-nums">
				1 : 1
			</div>
		</AspectRatio>
	);
}
