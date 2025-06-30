"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { EqualIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerContent,
	DrawerPortal,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"

import { navConfig } from "@/config/nav"

import { cn } from "@/lib/utils"

import { type NavItem } from "@/types/nav"

export function MobileNav() {
	const [open, setOpen] = React.useState(false)

	return (
		<div className="flex items-center gap-2 md:hidden">
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger
					render={(props) => (
						<Button
							className="[&>svg]:size-6"
							variant="ghost"
							size="icon"
							{...props}
						>
							<EqualIcon />
						</Button>
					)}
				/>
				<DrawerPortal>
					<DrawerContent className="mx-auto max-h-[85svh] pl-2">
						<div className="overflow-auto p-6 text-sm">
							<div className="space-y-0.5">
								{navConfig.mainNav.map((item) => (
									<MobileNavItem
										key={item.title}
										item={item}
										onNavItemClick={() => setOpen(false)}
									/>
								))}
							</div>
							{navConfig.sidebarNav.map((group) => (
								<div key={group.title} className="mt-4">
									<h4 className="mb-1 text-sm font-semibold text-foreground">
										{group.title}
									</h4>
									<div className="space-y-0.5">
										{group.items.map((item) => (
											<MobileNavItem
												key={item.title}
												item={item}
												onNavItemClick={() => setOpen(false)}
											/>
										))}
									</div>
								</div>
							))}
						</div>
					</DrawerContent>
				</DrawerPortal>
			</Drawer>
			<Separator orientation="vertical" className="mx-2 my-auto h-6" />
			<Link href="/" className="ml-2 flex items-center">
				<Icons.logo className="size-3" />
				<span className="ml-0.5 font-mono text-lg font-black">ui</span>
			</Link>
		</div>
	)
}

function MobileNavItem({
	item,
	onNavItemClick,
}: {
	item: NavItem
	onNavItemClick: () => void
}) {
	const pathname = usePathname()

	return !item.disabled && item.href ? (
		<Link
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
}
