import Link from "next/link";

import { Icons } from "@/components/icons";

import { navConfig } from "@/config/nav";

export function MainNav() {
	return (
		<div className="hidden items-center md:flex">
			<Link href="/" className="flex items-center" prefetch>
				<Icons.logo className="size-3" />
				<span className="ml-0.5 font-mono text-lg font-black">ui</span>
			</Link>
			<nav className="flex items-center gap-1 pl-4 text-sm">
				{navConfig.mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground focus-visible:ring-ring/50 flex h-8 items-center rounded-lg px-2.5 transition-colors outline-none focus-visible:ring-3"
						prefetch
					>
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
