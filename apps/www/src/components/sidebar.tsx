"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import type { SidebarNavGroup } from "@/types/nav";

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"];
	pathname: string | null;
	onNavItemClick?: () => void;
}

export const DocsSidebarNavItems = ({
	items,
	pathname,
	onNavItemClick,
}: DocsSidebarNavItemsProps) => (
	<div className="flex flex-col gap-px">
		{items.map((item) =>
			!item.disabled && item.href ? (
				<Link
					key={item.href ?? item.title}
					href={item.href}
					onClick={onNavItemClick}
					data-active={pathname === item.href}
					className={cn(
						"focus-visible:ring-ring/50 flex min-h-9 w-full scroll-my-6 items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 transition-colors outline-none focus-visible:ring-3",
						pathname === item.href
							? "bg-primary/10 text-primary font-medium"
							: "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
					)}
					target={item.external ? "_blank" : ""}
					rel={item.external ? "noreferrer" : ""}
					prefetch
				>
					{item.title}
					{item.label && <Badge variant="info">{item.label}</Badge>}
				</Link>
			) : (
				<span
					key={item.href ?? item.title}
					className="text-muted-foreground pointer-events-none flex min-h-9 w-full items-center justify-between gap-2 px-2.5 py-1.5 opacity-50"
				>
					{item.title}
					{item.label && <Badge variant="info">{item.label}</Badge>}
				</span>
			),
		)}
	</div>
);

interface DocsSidebarNavProps {
	sidebarNav: SidebarNavGroup[];
	onNavItemClick?: () => void;
}

export const DocsSidebarNav = ({
	sidebarNav,
	onNavItemClick,
}: DocsSidebarNavProps) => {
	const pathname = usePathname();
	const ref = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		if (!pathname) return;

		ref.current
			?.querySelector("[data-active=true]")
			?.scrollIntoView({ block: "nearest" });
	}, [pathname]);

	return (
		<div ref={ref} className="text-sm">
			{sidebarNav.map((group) => (
				<div key={group.title} className="mt-6 first:mt-0">
					<h4 className="text-muted-foreground mb-1.5 px-2.5 text-xs font-medium">
						{group.title}
					</h4>
					{group.items.length > 0 && (
						<DocsSidebarNavItems
							items={group.items}
							pathname={pathname}
							onNavItemClick={onNavItemClick}
						/>
					)}
				</div>
			))}
		</div>
	);
};
