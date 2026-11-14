import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonTextDemo() {
	return (
		<div className="flex w-full max-w-80 flex-col gap-4" aria-busy="true">
			<div className="flex flex-col gap-2">
				<Skeleton className="h-6 w-48" />
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-4/5" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-3/5" />
			</div>
		</div>
	);
}
