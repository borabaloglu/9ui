"use client";

import Link from "next/link";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import type { SidebarNavGroup } from "@/types/nav";

interface HeaderProps {
	sidebarNav: SidebarNavGroup[];
}

export const GitHubLink = () => (
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
		nativeButton={false}
	/>
);

export const Header = ({ sidebarNav }: HeaderProps) => {
	return (
		<header className="bg-card sticky top-0 z-50 w-full shrink-0 md:static">
			<div className="flex h-14 items-center px-4 md:ps-5.5">
				<MainNav />
				<MobileNav sidebarNav={sidebarNav} />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<div className="hidden w-64 md:block">
						<SearchDialog sidebarNav={sidebarNav} variant="sidebar" />
					</div>
					<GitHubLink />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
