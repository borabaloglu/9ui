import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
	{ title: "Docs", href: "/docs/getting-started/introduction" },
	{ title: "Components", href: "/docs/components/navigation-menu" },
	{ title: "Changelog", href: "/docs/getting-started/changelog" },
];

export default function NavigationMenuLinkDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{links.map((item) => (
					<NavigationMenuItem key={item.href}>
						<NavigationMenuLink
							variant="trigger"
							active={item.title === "Components"}
							render={<Link href={item.href} />}
						>
							{item.title}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
