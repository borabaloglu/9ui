"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
	<div className="flex flex-col gap-px group-data-[spacious=true]/nav:gap-1">
		{items.map((item) =>
			!item.disabled && item.href ? (
				<Link
					key={item.href}
					href={item.href}
					onClick={onNavItemClick}
					data-active={pathname === item.href}
					className={cn(
						"focus-visible:ring-ring/50 flex min-h-9 w-full scroll-my-6 items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors outline-none group-data-[spacious=true]/nav:min-h-10 focus-visible:ring-3",
						pathname === item.href
							? "bg-primary/10 text-primary font-medium"
							: "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
					)}
					target={item.external ? "_blank" : ""}
					rel={item.external ? "noreferrer" : ""}
					prefetch
				>
					{item.title}
					{item.label && (
						<span className="bg-info size-1.5 shrink-0 rounded-full">
							<span className="sr-only">{item.label}</span>
						</span>
					)}
				</Link>
			) : null,
		)}
	</div>
);

interface DocsSidebarNavProps {
	sidebarNav: SidebarNavGroup[];
	spacious?: boolean;
	onNavItemClick?: () => void;
}

export const DocsSidebarNav = ({
	sidebarNav,
	spacious = false,
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
		<div
			ref={ref}
			data-spacious={spacious}
			className="group/nav text-sm data-[spacious=true]:text-[0.9375rem]"
		>
			{sidebarNav.map((group) => (
				<div
					key={group.title}
					className="mt-6 group-data-[spacious=true]/nav:mt-8 first:mt-0"
				>
					<h4 className="text-muted-foreground/70 mb-1.5 px-2.5 text-[0.6875rem] font-medium tracking-wider uppercase select-none group-data-[spacious=true]/nav:mb-2.5">
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
