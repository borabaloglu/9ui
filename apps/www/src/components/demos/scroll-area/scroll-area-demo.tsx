import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`);

export default function ScrollAreaDemo() {
	return (
		<ScrollArea className="h-80 w-40 rounded-lg border">
			<div className="flex flex-col gap-1.5 p-3 text-sm">
				<h4 className="font-medium">Versions</h4>
				<Separator />
				<div className="flex flex-col gap-1.5">
					{versions.map((version) => (
						<div key={version}>{version}</div>
					))}
				</div>
			</div>
		</ScrollArea>
	);
}
