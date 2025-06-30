import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
	return (
		<AspectRatio
			ratio={16 / 9}
			className="rounded-lg border bg-card text-card-foreground"
		>
			<div className="flex size-full items-center justify-center font-medium">
				Content
			</div>
		</AspectRatio>
	)
}
