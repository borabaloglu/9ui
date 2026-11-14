import { Skeleton } from "@/components/ui/skeleton";

const rows = ["first", "second", "third", "fourth", "fifth"];

export default function SkeletonTableDemo() {
	return (
		<div
			className="w-full max-w-lg overflow-hidden rounded-xl border"
			aria-busy="true"
		>
			<div className="bg-muted/50 flex items-center gap-4 border-b px-4 py-3">
				<Skeleton className="h-3.5 w-20" />
				<Skeleton className="h-3.5 w-24 max-sm:hidden" />
				<Skeleton className="h-3.5 w-16" />
				<Skeleton className="ml-auto h-3.5 w-12" />
			</div>
			{rows.map((row) => (
				<div
					key={row}
					className="flex items-center gap-4 border-b px-4 py-3 last:border-b-0"
				>
					<Skeleton className="h-3.5 w-20" />
					<Skeleton className="h-3.5 w-24 max-sm:hidden" />
					<Skeleton className="h-3.5 w-16" />
					<Skeleton className="ml-auto h-3.5 w-12" />
				</div>
			))}
		</div>
	);
}
