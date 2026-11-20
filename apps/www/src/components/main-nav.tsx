import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import { navConfig } from "@/config/nav";

export function MainNav() {
	return (
		<div className="hidden items-center md:flex">
			<Link href="/" className="flex items-center">
				<Icons.logo className="size-3" />
				<span className="ml-0.5 font-mono text-lg font-black">ui</span>
			</Link>
			<nav className="flex items-center gap-1 pl-4">
				{navConfig.mainNav.map((item) => (
					<Button
						key={item.href}
						variant="ghost"
						className="text-muted-foreground"
						nativeButton={false}
						render={<Link href={item.href} />}
					>
						{item.title}
					</Button>
				))}
			</nav>
		</div>
	);
}
