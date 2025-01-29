"use client"

import * as React from "react"
import Link from "next/link"
import { EqualIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { DocsSidebarNav } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerContent,
	DrawerPortal,
	DrawerTrigger,
} from "@/components/ui/drawer"

export const Header = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 items-center px-4">
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger className="mr-2 flex size-8 items-center justify-center md:hidden">
						<EqualIcon size={20} />
					</DrawerTrigger>
					<DrawerPortal>
						<DrawerContent className="mx-auto max-h-[70svh]">
							<div className="overflow-auto p-6">
								<DocsSidebarNav onNavItemClick={() => setOpen(false)} />
							</div>
						</DrawerContent>
					</DrawerPortal>
				</Drawer>
				<Link
					href="/"
					className="flex items-center font-semibold italic transition-colors hover:text-accent"
				>
					<Icons.logo className="h-8 text-foreground" />
				</Link>
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<Link
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="ghost" size="icon">
							<Icons.gitHub />
							<span className="sr-only">GitHub</span>
						</Button>
					</Link>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
