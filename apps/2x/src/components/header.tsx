"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SearchDialog } from "@/components/search-dialog"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export const Header = () => {
	return (
		<header className="bg-background supports-[backdrop-filter]:bg-background/80 dark:border-border/40 sticky top-0 z-50 mx-auto w-full border-b border-dashed backdrop-blur">
			<div className="dark:border-border/40 container flex h-14 items-center border-dashed xl:border-x">
				<MainNav />
				<MobileNav />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<div className="hidden md:block">
						<SearchDialog />
					</div>
					<Button
						variant="ghost"
						size="icon-sm"
						render={
							<Link
								href="https://github.com/borabaloglu/9ui"
								target="_blank"
								rel="noreferrer"
							>
								<Icons.gitHub className="size-4" />
								<span className="sr-only">GitHub</span>
							</Link>
						}
					/>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
