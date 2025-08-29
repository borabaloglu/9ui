"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Badge } from "@/components/ui/badge"

import { navConfig } from "@/config/nav"

import { cn } from "@/lib/utils"

import { type SidebarNavGroup } from "@/types/nav"

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"]
	pathname: string | null
	onNavItemClick?: () => void
}

export const DocsSidebarNavItems = ({
	items,
	pathname,
	onNavItemClick,
}: DocsSidebarNavItemsProps) => (
	<div className="mt-1.5 text-sm">
		{items.map((item, index) =>
			!item.disabled && item.href ? (
				<Link
					key={index}
					href={item.href}
					onClick={onNavItemClick}
					className={cn(
						"hover:text-foreground -ml-2 flex h-9 w-full items-center justify-between gap-2 rounded-md border px-2 transition-colors",
						pathname === item.href
							? "bg-accent/50 text-accent-foreground pl-2"
							: "text-muted-foreground border-transparent"
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
					key={index}
					className={cn(
						"text-muted-foreground pointer-events-none -ml-2 flex w-full items-center justify-between gap-2 border border-transparent px-2 py-1.5 opacity-50"
					)}
				>
					{item.title}
					{item.label && <Badge variant="info">{item.label}</Badge>}
				</span>
			)
		)}
	</div>
)

interface DocsSidebarNavProps {
	onNavItemClick?: () => void
}

export const DocsSidebarNav = ({ onNavItemClick }: DocsSidebarNavProps) => {
	const pathname = usePathname()

	return (
		<>
			{navConfig.sidebarNav.map((group, index) => (
				<div key={index} className="pb-4 [&:last-child]:pb-0">
					<h4 className="text-foreground mb-1 text-sm font-semibold">
						{group.title}
					</h4>
					{group.items.length && (
						<DocsSidebarNavItems
							items={group.items}
							pathname={pathname}
							onNavItemClick={onNavItemClick}
						/>
					)}
				</div>
			))}
		</>
	)
}
