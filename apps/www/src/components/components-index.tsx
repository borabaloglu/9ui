import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getSidebarNav } from "@/lib/source";

export function ComponentsIndex() {
	const group = getSidebarNav().find((group) => group.title === "Components");
	const items = (group?.items ?? []).filter((item) => !item.disabled);

	return (
		<div className="columns-2 gap-8 sm:columns-3 md:columns-4">
			{items.map((item) => (
				<Button
					key={item.href}
					variant="ghost"
					className="text-muted-foreground -mx-2.5 flex w-[calc(100%+--spacing(5))] break-inside-avoid justify-start"
					nativeButton={false}
					render={<Link href={item.href} />}
				>
					{item.title}
					{item.label && (
						<span className="bg-info size-1.5 shrink-0 rounded-full">
							<span className="sr-only">{item.label}</span>
						</span>
					)}
				</Button>
			))}
		</div>
	);
}
