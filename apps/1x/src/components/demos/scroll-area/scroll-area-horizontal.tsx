import { ScrollArea } from "@/components/ui/scroll-area"

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(
	", "
)

export default function ScrollAreaHorizontal() {
	return (
		<ScrollArea
			className="h-fit w-full max-w-60 rounded-lg border p-2"
			orientation="horizontal"
		>
			<div className="mt-2 flex flex-col gap-2 text-nowrap pb-2 text-sm">
				{versions}
			</div>
		</ScrollArea>
	)
}
