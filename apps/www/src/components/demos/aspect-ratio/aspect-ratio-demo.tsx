import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted max-w-xs rounded-xl border">
			<div className="flex size-full items-center justify-center text-xl font-medium tabular-nums">
				16 : 9
			</div>
		</AspectRatio>
	);
}
