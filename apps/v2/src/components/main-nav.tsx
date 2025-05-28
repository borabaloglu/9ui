"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"
import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"

export function MainNav() {
	const pathname = usePathname()

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="flex items-center">
				<Icons.logo className="size-3" />
				<span className="ml-0.5 font-mono text-lg font-black">ui</span>
			</Link>
			<Separator orientation="vertical" className="mx-4 my-auto h-6" />
			<nav className="flex items-center gap-6 text-sm">
				<Link
					href="/docs"
					className={cn(
						"transition-colors hover:text-foreground",
						pathname.startsWith("/docs/getting-started")
							? "font-medium text-foreground"
							: "text-muted-foreground"
					)}
				>
					Docs
				</Link>
				<Link
					href="/docs/components"
					className={cn(
						"transition-colors hover:text-foreground",
						pathname?.startsWith("/docs/components")
							? "font-medium text-foreground"
							: "text-muted-foreground"
					)}
				>
					Components
				</Link>
				<Link
					href="/themes"
					className={cn(
						"transition-colors hover:text-foreground",
						pathname?.startsWith("/themes")
							? "font-medium text-foreground"
							: "text-muted-foreground"
					)}
				>
					Themes
				</Link>
			</nav>
		</div>
	)
}
