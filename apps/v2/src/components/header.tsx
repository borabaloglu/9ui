"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

import { siteConfig } from "@/config/site"

export const Header = () => {
	const goToVersion = (version: string) => {
		if (version === "current") {
			window.location.href = siteConfig.url
		} else {
			window.location.href = `https://${version}.${siteConfig.domain}`
		}
	}

	return (
		<header className="bg-background supports-[backdrop-filter]:bg-background/80 dark:border-border/40 sticky top-0 z-50 mx-auto w-full border-b border-dashed backdrop-blur">
			<div className="dark:border-border/40 container flex h-14 items-center border-dashed xl:border-x">
				<MainNav />
				<MobileNav />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<Popover>
						<PopoverTrigger
							render={(props) => (
								<Button
									variant="ghost"
									className="data-popup-open:bg-input"
									{...props}
								>
									<span>2.x</span>
									<ChevronDownIcon />
								</Button>
							)}
						/>
						<PopoverContent
							arrow={false}
							className="flex w-[var(--anchor-width)] flex-col gap-1 p-1"
						>
							<Button variant="ghost" onClick={() => goToVersion("current")}>
								2.x
							</Button>
							<Button variant="ghost" onClick={() => goToVersion("1x")}>
								1.x
							</Button>
						</PopoverContent>
					</Popover>
					<Button
						variant="ghost"
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
