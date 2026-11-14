import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const guides = [
	{ title: "Introduction", href: "/docs/getting-started/introduction" },
	{ title: "Installation", href: "/docs/getting-started/installation" },
	{ title: "Theming", href: "/docs/getting-started/theming" },
];

export default function NavigationMenuDisabledDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Guides</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-48">
							{guides.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink render={<Link href={item.href} />}>
										{item.title}
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger disabled>Templates</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-48">
							<li>
								<NavigationMenuLink
									render={<Link href="/docs/components/navigation-menu" />}
								>
									Navigation Menu
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup />
		</NavigationMenu>
	);
}
