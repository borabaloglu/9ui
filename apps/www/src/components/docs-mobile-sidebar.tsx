"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { PanelLeftIcon } from "lucide-react";

import { GitHubLink } from "@/components/github-link";
import { DocsSidebarNav } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import type { SidebarNavGroup } from "@/types/nav";

interface DocsMobileSidebarProps {
	sidebarNav: SidebarNavGroup[];
}

export function DocsMobileSidebar({ sidebarNav }: DocsMobileSidebarProps) {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();
	const lastPathname = React.useRef(pathname);

	React.useEffect(() => {
		if (lastPathname.current !== pathname) {
			lastPathname.current = pathname;
			setOpen(false);
		}
	}, [pathname]);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger
				render={
					<Button variant="ghost" size="icon-sm">
						<PanelLeftIcon className="size-4" />
						<span className="sr-only">Open navigation</span>
					</Button>
				}
			/>
			<SheetContent
				side="right"
				className="bg-card top-0 h-dvh max-h-dvh w-[85%] translate-x-0 gap-0 rounded-none border-y-0 border-e-0 [&>[data-slot=sheet-close]]:hidden"
			>
				<SheetTitle className="sr-only">Navigation</SheetTitle>
				<div className="flex h-14 shrink-0 items-center gap-0.5 px-3 pt-1">
					<GitHubLink />
					<ThemeToggle />
					<SheetClose
						render={
							<Button variant="ghost" size="icon-sm" className="ms-auto">
								<PanelLeftIcon className="size-4" />
								<span className="sr-only">Close navigation</span>
							</Button>
						}
					/>
				</div>
				<div className="min-h-0 flex-1 [scrollbar-width:none] overflow-y-auto overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_20px,white_calc(100%-48px),transparent)] px-2 pt-4 pb-10">
					<DocsSidebarNav
						sidebarNav={sidebarNav}
						spacious
						onNavItemClick={() => setOpen(false)}
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
}
