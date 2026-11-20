import Link from "next/link";

import { DocsShell, DocsSidebar } from "@/components/docs-shell";
import { GitHubLink } from "@/components/github-link";
import { Icons } from "@/components/icons";
import { SearchDialog } from "@/components/search-dialog";
import { DocsSidebarNav } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
	SidebarContent,
	SidebarHeader,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";

import { getSidebarNav } from "@/lib/source";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
	const sidebarNav = getSidebarNav();

	return (
		<DocsShell>
			<header className="flex h-14 shrink-0 items-center gap-0.5 ps-5.5 pe-3 pt-1 md:hidden">
				<Link href="/" className="flex items-center">
					<Icons.logo className="size-3" />
					<span className="ml-0.5 font-mono text-lg font-black">ui</span>
				</Link>
				<div className="flex-1" />
				<SearchDialog sidebarNav={sidebarNav} variant="icon" />
				<SidebarTrigger size="icon" />
			</header>
			<div
				id="docs-mobile-toc"
				className="relative z-20 h-10 shrink-0 empty:hidden md:hidden"
			/>
			<DocsSidebar>
				<SidebarHeader className="gap-0 p-0">
					<div className="flex h-14 items-center gap-0.5 px-3 pt-1 md:hidden">
						<GitHubLink />
						<ThemeToggle />
						<SidebarTrigger size="icon" className="ms-auto" />
					</div>
					<div className="-mb-1.5 flex h-14 items-center ps-5.5 pt-1 max-md:hidden">
						<Link href="/" className="flex items-center">
							<Icons.logo className="size-3" />
							<span className="ml-0.5 font-mono text-lg font-black">ui</span>
						</Link>
					</div>
					<div className="px-3 max-md:hidden">
						<SearchDialog sidebarNav={sidebarNav} variant="sidebar" />
					</div>
				</SidebarHeader>
				<SidebarContent className="mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)] px-3 py-3 max-md:mask-[linear-gradient(to_bottom,transparent,white_20px,white_calc(100%-48px),transparent)] max-md:px-2 max-md:pt-4 max-md:pb-10 md:mt-2">
					<DocsSidebarNav sidebarNav={sidebarNav} />
				</SidebarContent>
			</DocsSidebar>
			<SidebarInset className="@container mx-2 mb-2 min-h-0 w-auto overflow-clip rounded-xl border shadow-xs">
				{children}
			</SidebarInset>
		</DocsShell>
	);
};

export default DocsLayout;
