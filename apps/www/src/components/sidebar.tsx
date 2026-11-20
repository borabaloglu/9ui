"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import type { SidebarNavGroup } from "@/types/nav";

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"];
	pathname: string | null;
}

const DocsSidebarNavItems = ({ items, pathname }: DocsSidebarNavItemsProps) => (
	<SidebarMenu className="gap-px max-md:gap-1">
		{items.map((item) =>
			!item.disabled ? (
				<SidebarMenuItem key={item.href}>
					<SidebarMenuButton
						active={pathname === item.href}
						className="text-muted-foreground data-active:bg-primary/10 data-active:text-primary scroll-my-6 px-2.5 max-md:h-10 max-md:text-[0.9375rem]"
						render={<Link href={item.href} />}
					>
						{item.title}
						{item.label && (
							<span className="bg-info size-1.5 shrink-0 rounded-full">
								<span className="sr-only">{item.label}</span>
							</span>
						)}
					</SidebarMenuButton>
				</SidebarMenuItem>
			) : null,
		)}
	</SidebarMenu>
);

interface DocsSidebarNavProps {
	sidebarNav: SidebarNavGroup[];
}

export const DocsSidebarNav = ({ sidebarNav }: DocsSidebarNavProps) => {
	const pathname = usePathname();
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!pathname) return;

		ref.current
			?.querySelector("[data-active]")
			?.scrollIntoView({ block: "nearest" });
	}, [pathname]);

	return (
		<div ref={ref}>
			{sidebarNav.map((group) => (
				<SidebarGroup
					key={group.title}
					className="mt-6 p-0 first:mt-0 max-md:mt-8"
				>
					<SidebarGroupLabel className="text-muted-foreground/70 mb-1.5 h-auto px-2.5 text-[0.6875rem] tracking-wider uppercase select-none max-md:mb-2.5">
						{group.title}
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<DocsSidebarNavItems items={group.items} pathname={pathname} />
					</SidebarGroupContent>
				</SidebarGroup>
			))}
		</div>
	);
};
