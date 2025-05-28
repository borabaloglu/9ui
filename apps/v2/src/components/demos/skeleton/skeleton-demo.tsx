import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
	return (
		<div className="flex w-64 flex-col gap-4 rounded-lg border p-4">
			<Skeleton className="aspect-video w-full" />
			<Skeleton className="h-5 w-2/3" />
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-2/3" />
			</div>
		</div>
	)
}
