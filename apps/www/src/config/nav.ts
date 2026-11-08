import type { NavItem } from "@/types/nav";

export interface NavConfig {
	mainNav: NavItem[];
}

export const navConfig: NavConfig = {
	mainNav: [
		{
			title: "Docs",
			href: "/docs/getting-started",
		},
		{
			title: "Components",
			href: "/docs/components",
		},
		{
			title: "Themes",
			href: "/themes",
		},
	],
};
