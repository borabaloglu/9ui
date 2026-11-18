"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import { GitHubLink } from "@/components/github-link";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { SearchDialog } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { navConfig } from "@/config/nav";

import { cn } from "@/lib/utils";

import type { SidebarNavGroup } from "@/types/nav";

interface HeaderProps {
	sidebarNav: SidebarNavGroup[];
}

export const Header = ({ sidebarNav }: HeaderProps) => {
	const [open, setOpen] = React.useState(false);
	const rootRef = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		if (!open) {
			return;
		}

		const onPointerDown = (event: PointerEvent) => {
			if (
				event.target instanceof Node &&
				!rootRef.current?.contains(event.target)
			) {
				setOpen(false);
			}
		};
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	return (
		<header className="relative z-20 h-14 shrink-0">
			<Collapsible
				ref={rootRef}
				open={open}
				onOpenChange={setOpen}
				className="bg-card absolute inset-x-0 top-0"
			>
				<div className="flex h-14 items-center ps-5.5 pe-3 pt-1 md:pe-3.5">
					<MainNav />
					<Link href="/" className="flex items-center md:hidden">
						<Icons.logo className="size-3" />
						<span className="ml-0.5 font-mono text-lg font-black">ui</span>
					</Link>
					<div className="flex-1" />
					<div className="flex items-center gap-0.5 md:hidden">
						<SearchDialog sidebarNav={sidebarNav} variant="icon" />
						<CollapsibleTrigger
							render={
								<Button variant="ghost" size="icon">
									<ChevronDownIcon
										className={cn(
											"transition-transform duration-150 ease-out motion-reduce:transition-none",
											open && "rotate-180",
										)}
									/>
									<span className="sr-only">
										{open ? "Close navigation" : "Open navigation"}
									</span>
								</Button>
							}
						/>
					</div>
					<div className="hidden items-center gap-1 md:flex">
						<div className="w-64">
							<SearchDialog sidebarNav={sidebarNav} variant="sidebar" />
						</div>
						<GitHubLink />
						<ThemeToggle />
					</div>
				</div>
				<CollapsiblePanel className="md:hidden">
					<nav aria-label="Main" className="flex flex-col px-3 pt-1">
						{navConfig.mainNav.map((item) => (
							<Button
								key={item.href}
								variant="ghost"
								className="text-muted-foreground justify-start"
								nativeButton={false}
								render={
									<Link href={item.href} onClick={() => setOpen(false)} />
								}
							>
								{item.title}
							</Button>
						))}
					</nav>
					<div className="flex items-center justify-between px-3 pt-1 pb-3">
						<GitHubLink />
						<ThemeToggle />
					</div>
					<div
						aria-hidden
						className="bg-background mx-2 h-4 rounded-t-xl border border-b-0"
					/>
				</CollapsiblePanel>
			</Collapsible>
		</header>
	);
};
