import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const releases = Array.from({ length: 30 }, (_, i) => ({
	version: `v${30 - i}.0.0`,
	date: new Date(2026, 10 - i, 1).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	}),
}));

export default function ScrollAreaGutterDemo() {
	return (
		<ScrollArea scrollbarGutter className="h-80 w-56 rounded-lg border">
			<div className="flex flex-col gap-1.5 p-3 text-sm">
				<h4 className="font-medium">Releases</h4>
				<Separator />
				{releases.map((release) => (
					<div key={release.version} className="flex justify-between gap-4">
						<span>{release.version}</span>
						<span className="text-muted-foreground tabular-nums">
							{release.date}
						</span>
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
