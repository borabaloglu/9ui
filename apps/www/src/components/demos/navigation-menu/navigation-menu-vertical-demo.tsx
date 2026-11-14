"use client";

import Link from "next/link";
import { useMediaQuery } from "@base-ui/react/unstable-use-media-query";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sections = [
	{
		title: "Getting Started",
		items: [
			{
				title: "Introduction",
				href: "/docs/getting-started/introduction",
				description: "Learn what 9ui is and how it works.",
			},
			{
				title: "Installation",
				href: "/docs/getting-started/installation",
				description: "Add 9ui to your project.",
			},
		],
	},
	{
		title: "Customize",
		items: [
			{
				title: "Theming",
				href: "/docs/getting-started/theming",
				description: "Change colors, radius and fonts.",
			},
			{
				title: "Dark Mode",
				href: "/docs/getting-started/dark-mode",
				description: "Add a dark theme to your project.",
			},
		],
	},
];

export default function NavigationMenuVerticalDemo() {
	const isDesktop = useMediaQuery("(min-width: 768px)", {
		defaultMatches: true,
	});

	return (
		<NavigationMenu orientation="vertical" className="w-44">
			<NavigationMenuList>
				{sections.map((section) => (
					<NavigationMenuItem key={section.title}>
						<NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="w-64">
								{section.items.map((item) => (
									<li key={item.href}>
										<NavigationMenuLink
											className="flex-col items-start gap-1"
											render={<Link href={item.href} />}
										>
											<span className="leading-none font-medium">
												{item.title}
											</span>
											<span className="text-muted-foreground">
												{item.description}
											</span>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
				<NavigationMenuItem>
					<NavigationMenuLink
						variant="trigger"
						href="https://github.com/borabaloglu/9ui"
					>
						GitHub
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup side={isDesktop ? "inline-end" : "bottom"} />
		</NavigationMenu>
	);
}
