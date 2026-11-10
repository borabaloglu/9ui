"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

import { GitHubLink } from "@/components/github-link";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { SearchDialog } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
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
	const pathname = usePathname();
	const lastPathname = React.useRef(pathname);

	React.useEffect(() => {
		if (lastPathname.current !== pathname) {
			lastPathname.current = pathname;
			setOpen(false);
		}
	}, [pathname]);

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
		<header className="relative z-20 h-14 w-full shrink-0">
			<Collapsible
				ref={rootRef}
				open={open}
				onOpenChange={setOpen}
				className="bg-card absolute inset-x-0 top-0"
			>
				<div className="flex h-14 items-center ps-5.5 pe-3 pt-1 md:pe-4">
					<MainNav />
					<Link href="/" className="flex items-center md:hidden" prefetch>
						<Icons.logo className="size-3" />
						<span className="ml-0.5 font-mono text-lg font-black">ui</span>
					</Link>
					<div className="flex-1" />
					<div className="flex items-center gap-0.5 md:hidden">
						<SearchDialog sidebarNav={sidebarNav} variant="icon" />
						<CollapsibleTrigger
							render={
								<Button variant="ghost" size="icon-sm">
									<ChevronDownIcon
										className={cn(
											"size-4 transition-transform duration-150 ease-out motion-reduce:transition-none",
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
				<CollapsibleContent className="transition-[height,opacity] ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none md:hidden">
					<nav aria-label="Main" className="flex flex-col px-3 pt-1">
						{navConfig.mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 rounded-lg px-2.5 py-1.5 transition-colors outline-none focus-visible:ring-3"
								prefetch
							>
								{item.title}
							</Link>
						))}
					</nav>
					<div className="flex items-center justify-between px-3 pt-1 pb-3">
						<GitHubLink />
						<ThemeToggle />
					</div>
					<div
						aria-hidden
						className="bg-background mx-2 h-4 rounded-t-2xl border border-b-0"
					/>
				</CollapsibleContent>
			</Collapsible>
		</header>
	);
};
