import Link from "next/link";

import {
	DocsShell,
	DocsSidebar,
	DocsSidebarToggle,
} from "@/components/docs-shell";
import { GitHubLink } from "@/components/header";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { DocsSidebarNav } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

import { getSidebarNav } from "@/lib/source";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
	const sidebarNav = getSidebarNav();

	return (
		<DocsShell className="bg-card flex min-h-dvh flex-col md:h-dvh md:overflow-clip">
			<header className="bg-card sticky top-0 z-30 flex h-14 shrink-0 items-center px-4 md:hidden">
				<MobileNav sidebarNav={sidebarNav} />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<GitHubLink />
					<ThemeToggle />
				</div>
			</header>
			<DocsSidebar>
				<div className="-mb-1.5 flex h-14 shrink-0 items-center ps-5.5 pe-3">
					<Link href="/" className="flex items-center" prefetch>
						<Icons.logo className="size-3" />
						<span className="ml-0.5 font-mono text-lg font-black">ui</span>
					</Link>
					<DocsSidebarToggle className="ms-auto" />
				</div>
				<div className="px-3">
					<SearchDialog sidebarNav={sidebarNav} variant="sidebar" />
				</div>
				<div className="mt-2 min-h-0 flex-1 [scrollbar-width:none] overflow-y-auto mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)] px-3 py-3">
					<DocsSidebarNav sidebarNav={sidebarNav} />
				</div>
			</DocsSidebar>
			<main className="bg-background @container relative flex min-w-0 flex-1 flex-col motion-reduce:transition-none md:my-2 md:mr-2 md:min-h-0 md:overflow-clip md:rounded-2xl md:border md:shadow-sm md:transition-[margin] md:duration-300 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:group-data-[sidebar-collapsed=true]/docs:ml-2">
				{children}
			</main>
		</DocsShell>
	);
};

export default DocsLayout;
