"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
	<div className="mt-1 space-y-0.5 text-sm">
		{items.map((item, index) =>
			!item.disabled && item.href ? (
				<Link
					key={index}
					href={item.href}
					onClick={onNavItemClick}
					className={cn(
						"-ml-2 flex w-full items-center justify-between gap-2 rounded-md border px-2 py-1.5 transition-colors hover:text-foreground",
						pathname === item.href
							? "bg-secondary/50 pl-2 text-foreground"
							: "border-transparent text-muted-foreground"
					)}
					target={item.external ? "_blank" : ""}
					rel={item.external ? "noreferrer" : ""}
				>
					{item.title}
					{item.label && (
						<span className="rounded bg-info px-1.5 py-0.5 text-xs font-medium text-info-foreground">
							{item.label}
						</span>
					)}
				</Link>
			) : (
				<span
					key={index}
					className={cn(
						"-ml-2 flex w-full cursor-not-allowed items-center justify-between gap-2 border border-transparent px-2 py-1.5 text-muted-foreground opacity-60"
					)}
				>
					{item.title}
					{item.label && (
						<span className="rounded bg-info px-1.5 py-0.5 text-xs font-medium text-info-foreground">
							{item.label}
						</span>
					)}
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
				<div key={index} className="pb-4">
					<h4 className="mb-1 text-sm font-semibold text-foreground">
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
