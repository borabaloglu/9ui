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
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const sections = [
	{
		value: "start",
		label: "Setup",
		hint: "Set up your project.",
		links: [
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
			{
				title: "Changelog",
				href: "/docs/getting-started/changelog",
				description: "See what changed in each release.",
			},
		],
	},
	{
		value: "customize",
		label: "Customize",
		hint: "Match your brand.",
		links: [
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
	{
		value: "components",
		label: "Components",
		hint: "Browse the library.",
		links: [
			{
				title: "Button",
				href: "/docs/components/button",
				description: "Actions, icon buttons and loading states.",
			},
			{
				title: "Field",
				href: "/docs/components/field",
				description: "Labels, descriptions and errors for controls.",
			},
			{
				title: "Menu",
				href: "/docs/components/menu",
				description: "A list of actions that opens from a button.",
			},
		],
	},
];

export default function NavigationMenuNestedInlineDemo() {
	const isDesktop = useMediaQuery("(min-width: 768px)", {
		defaultMatches: true,
	});

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Docs</NavigationMenuTrigger>
					<NavigationMenuContent className="[--navigation-menu-padding:0px]">
						<NavigationMenu
							orientation={isDesktop ? "vertical" : "horizontal"}
							defaultValue="start"
						>
							<div className="grid w-[min(--spacing(128),calc(100vw-2rem))] md:grid-cols-[--spacing(48)_1fr]">
								<NavigationMenuList className="border-b p-1 max-md:*:flex-1 md:border-e md:border-b-0">
									{sections.map((section) => (
										<NavigationMenuItem
											key={section.value}
											value={section.value}
										>
											<NavigationMenuTrigger
												variant="link"
												showIcon={false}
												className="max-md:justify-center"
											>
												<span className="flex flex-col items-start gap-1">
													<span className="leading-none font-medium">
														{section.label}
													</span>
													<span className="text-muted-foreground max-md:hidden">
														{section.hint}
													</span>
												</span>
											</NavigationMenuTrigger>
											<NavigationMenuContent className="w-full">
												<ul>
													{section.links.map((link) => (
														<li key={link.href}>
															<NavigationMenuLink
																className="flex-col items-start gap-1"
																render={<Link href={link.href} />}
															>
																<span className="leading-none font-medium">
																	{link.title}
																</span>
																<span className="text-muted-foreground">
																	{link.description}
																</span>
															</NavigationMenuLink>
														</li>
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
								<NavigationMenuViewport className="h-auto min-h-44" />
							</div>
						</NavigationMenu>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup align="center" />
		</NavigationMenu>
	);
}
