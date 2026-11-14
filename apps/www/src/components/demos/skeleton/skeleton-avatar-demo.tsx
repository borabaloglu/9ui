import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonAvatarDemo() {
	return (
		<div className="flex items-center gap-3" aria-busy="true">
			<Skeleton className="size-10 shrink-0 rounded-full" />
			<div className="flex flex-col gap-1.5">
				<Skeleton className="h-4 w-32" />
				<Skeleton className="h-3 w-24" />
			</div>
		</div>
	);
}
