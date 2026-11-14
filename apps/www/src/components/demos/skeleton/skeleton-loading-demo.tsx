"use client";

import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoadingDemo() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 1500);
		return () => clearTimeout(timeout);
	}, []);

	if (loading) {
		return (
			<div className="flex w-48 items-center gap-3" aria-busy="true">
				<Skeleton className="size-10 shrink-0 rounded-full" />
				<div className="flex flex-col gap-1.5">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-3 w-32" />
				</div>
			</div>
		);
	}

	return (
		<div className="animate-in fade-in flex w-48 items-center gap-3 duration-150">
			<Avatar size="lg">
				<AvatarImage src="/avatars/p1.jpg" alt="" />
				<AvatarFallback>MC</AvatarFallback>
			</Avatar>
			<div className="flex flex-col">
				<span className="text-sm font-medium">Maya Chen</span>
				<span className="text-muted-foreground text-xs">Product designer</span>
			</div>
		</div>
	);
}
