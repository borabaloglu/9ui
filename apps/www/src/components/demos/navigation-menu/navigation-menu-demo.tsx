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

const docs = [
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
		title: "Theming",
		href: "/docs/getting-started/theming",
		description: "Change colors, radius and fonts.",
	},
];

const components = [
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
	{
		title: "Popover",
		href: "/docs/components/popover",
		description: "A popup for displaying content.",
	},
	{
		title: "Table",
		href: "/docs/components/table",
		description: "Rows and columns of data.",
	},
	{
		title: "Tooltip",
		href: "/docs/components/tooltip",
		description: "A short hint for a control.",
	},
];

export default function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Docs</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-64">
							{docs.map((item) => (
								<ListItem key={item.href} {...item} />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-64 sm:w-120 sm:grid-cols-2">
							{components.map((item) => (
								<ListItem key={item.href} {...item} />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						variant="trigger"
						href="https://github.com/borabaloglu/9ui"
					>
						GitHub
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup />
		</NavigationMenu>
	);
}

function ListItem({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<li>
			<NavigationMenuLink
				className="flex-col items-start gap-1"
				render={<Link href={href} />}
			>
				<span className="leading-none font-medium">{title}</span>
				<span className="text-muted-foreground">{description}</span>
			</NavigationMenuLink>
		</li>
	);
}
