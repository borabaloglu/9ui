import type { NavItem } from "@/types/nav";

export interface NavConfig {
	mainNav: NavItem[];
}

export const navConfig: NavConfig = {
	mainNav: [
		{
			title: "Getting Started",
			href: "/docs/getting-started",
		},
		{
			title: "Forms",
			href: "/docs/forms",
		},
		{
			title: "Components",
			href: "/docs/components",
		},
		{
			title: "Changelog",
			href: "/docs/getting-started/changelog",
		},
	],
};
