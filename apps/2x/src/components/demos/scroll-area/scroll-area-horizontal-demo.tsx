import { ScrollArea } from "@/components/ui/scroll-area"

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(
	", "
)

export default function ScrollAreaHorizontalDemo() {
	return (
		<ScrollArea className="w-full rounded-md border" orientation="horizontal">
			<div className="inline-block p-4 text-sm text-nowrap">{versions}</div>
		</ScrollArea>
	)
}
