"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-2">
			<div className="container flex h-14 items-center">
				<MainNav />
				<MobileNav />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<Button
						variant="outline"
						size="icon"
						render={
							<Link
								href="https://x.com/borabalogluu"
								target="_blank"
								rel="noreferrer"
							>
								<Icons.twitter />
								<span className="sr-only">X</span>
							</Link>
						}
					/>

					<Button
						variant="outline"
						size="icon"
						render={
							<Link
								href="https://github.com/borabaloglu/9ui"
								target="_blank"
								rel="noreferrer"
							>
								<Icons.gitHub />
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
