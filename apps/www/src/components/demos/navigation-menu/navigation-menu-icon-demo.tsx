import Link from "next/link";
import { BookOpenIcon, ComponentIcon, PaletteIcon } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const resources = [
	{
		title: "Documentation",
		href: "/docs/getting-started/introduction",
		icon: BookOpenIcon,
	},
	{
		title: "Components",
		href: "/docs/components/navigation-menu",
		icon: ComponentIcon,
	},
	{
		title: "Theming",
		href: "/docs/getting-started/theming",
		icon: PaletteIcon,
	},
];

export default function NavigationMenuIconDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-48">
							{resources.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink render={<Link href={item.href} />}>
										<item.icon aria-hidden="true" className="opacity-80" />
										{item.title}
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup />
		</NavigationMenu>
	);
}
