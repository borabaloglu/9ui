import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonFormDemo() {
	return (
		<div className="flex w-full max-w-80 flex-col gap-4" aria-busy="true">
			<div className="flex gap-4">
				<div className="flex flex-1 flex-col gap-2">
					<Skeleton className="h-3.5 w-20" />
					<Skeleton className="h-8 w-full rounded-lg" />
				</div>
				<div className="flex flex-1 flex-col gap-2">
					<Skeleton className="h-3.5 w-20" />
					<Skeleton className="h-8 w-full rounded-lg" />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-3.5 w-12" />
				<Skeleton className="h-8 w-full rounded-lg" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-3.5 w-16" />
				<Skeleton className="h-20 w-full rounded-lg" />
			</div>
			<Skeleton className="h-8 w-full rounded-lg" />
		</div>
	);
}
