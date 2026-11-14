import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
	return (
		<Card className="w-full max-w-72" aria-busy="true">
			<CardContent className="flex flex-col gap-4">
				<Skeleton className="aspect-video w-full rounded-lg" />
				<div className="flex items-center gap-3">
					<Skeleton className="size-8 shrink-0 rounded-full" />
					<div className="flex flex-1 flex-col gap-1.5">
						<Skeleton className="h-3.5 w-24" />
						<Skeleton className="h-3 w-16" />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<Skeleton className="h-3.5 w-full" />
					<Skeleton className="h-3.5 w-full" />
					<Skeleton className="h-3.5 w-3/4" />
				</div>
				<Skeleton className="h-8 w-full rounded-lg" />
			</CardContent>
		</Card>
	);
}
