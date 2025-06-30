"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"

import { cn } from "@/lib/utils"

export function MainNav() {
	const pathname = usePathname()

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="flex items-center">
				<Icons.logo className="size-3" />
				<span className="ml-0.5 font-mono text-lg font-black">ui</span>
			</Link>
			<nav className="flex items-center gap-6 pl-6 text-sm">
				<Link
					href="/docs"
					className={cn(
						"hover:text-foreground transition-colors",
						pathname.startsWith("/docs/getting-started")
							? "text-foreground font-medium"
							: "text-muted-foreground"
					)}
				>
					Docs
				</Link>
				<Link
					href="/docs/components"
					className={cn(
						"hover:text-foreground transition-colors",
						pathname?.startsWith("/docs/components")
							? "text-foreground font-medium"
							: "text-muted-foreground"
					)}
				>
					Components
				</Link>
				<Link
					href="/themes"
					className={cn(
						"hover:text-foreground transition-colors",
						pathname?.startsWith("/themes")
							? "text-foreground font-medium"
							: "text-muted-foreground"
					)}
				>
					Themes
				</Link>
			</nav>
		</div>
	)
}
