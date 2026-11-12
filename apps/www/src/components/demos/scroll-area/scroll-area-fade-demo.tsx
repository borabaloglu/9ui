import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`);

export default function ScrollAreaFadeDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col items-center gap-4">
			<ScrollArea className="h-80 w-40 rounded-lg border" scrollFade>
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
			<ScrollArea className="w-full rounded-lg border" scrollFade>
				<div className="inline-block p-3 text-sm text-nowrap">
					{versions.join(", ")}
				</div>
			</ScrollArea>
		</div>
	);
}
