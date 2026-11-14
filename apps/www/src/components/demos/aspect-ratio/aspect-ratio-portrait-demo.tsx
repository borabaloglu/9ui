import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioPortraitDemo() {
	return (
		<AspectRatio ratio={9 / 16} className="bg-muted max-w-40 rounded-xl border">
			<div className="flex size-full items-center justify-center text-xl font-medium tabular-nums">
				9 : 16
			</div>
		</AspectRatio>
	);
}
