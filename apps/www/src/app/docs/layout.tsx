import Link from "next/link";

import { DocsMobileSidebar } from "@/components/docs-mobile-sidebar";
import { DocsShell, DocsSidebar } from "@/components/docs-shell";
import { Icons } from "@/components/icons";
import { SearchDialog } from "@/components/search-dialog";
import { DocsSidebarNav } from "@/components/sidebar";

import { getSidebarNav } from "@/lib/source";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
	const sidebarNav = getSidebarNav();

	return (
		<DocsShell className="bg-card flex h-dvh flex-col overflow-clip">
			<header className="flex h-14 shrink-0 items-center gap-0.5 ps-5.5 pe-3 pt-1 md:hidden">
				<Link href="/" className="flex items-center" prefetch>
					<Icons.logo className="size-3" />
					<span className="ml-0.5 font-mono text-lg font-black">ui</span>
				</Link>
				<div className="flex-1" />
				<SearchDialog sidebarNav={sidebarNav} variant="icon" />
				<DocsMobileSidebar sidebarNav={sidebarNav} />
			</header>
			<div
				id="docs-mobile-toc"
				className="relative z-20 h-10 shrink-0 empty:hidden md:hidden"
			/>
			<DocsSidebar>
				<div className="-mb-1.5 flex h-14 shrink-0 items-center ps-5.5 pe-3 pt-1">
					<Link href="/" className="flex items-center" prefetch>
						<Icons.logo className="size-3" />
						<span className="ml-0.5 font-mono text-lg font-black">ui</span>
					</Link>
				</div>
				<div className="px-3">
					<SearchDialog sidebarNav={sidebarNav} variant="sidebar" />
				</div>
				<div className="mt-2 min-h-0 flex-1 [scrollbar-width:none] overflow-y-auto mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)] px-3 py-3">
					<DocsSidebarNav sidebarNav={sidebarNav} />
				</div>
			</DocsSidebar>
			<main className="bg-background @container relative mx-2 mb-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-clip rounded-2xl border shadow-sm motion-reduce:transition-none md:my-2 md:ml-0 md:transition-[margin] md:duration-300 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:group-data-[sidebar-collapsed=true]/docs:ml-2">
				{children}
			</main>
		</DocsShell>
	);
};

export default DocsLayout;
