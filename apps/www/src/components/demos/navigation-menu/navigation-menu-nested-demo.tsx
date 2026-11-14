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

const overview = [
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
];

const customize = [
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
];

export default function NavigationMenuNestedDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-64">
							{overview.map((item) => (
								<ListItem key={item.href} {...item} />
							))}
							<li>
								<NavigationMenu orientation="vertical">
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger variant="link">
												<span className="flex flex-col items-start gap-1">
													<span className="leading-none font-medium">
														Customize
													</span>
													<span className="text-muted-foreground">
														Make 9ui match your brand.
													</span>
												</span>
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="w-64">
													{customize.map((item) => (
														<ListItem key={item.href} {...item} />
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenuList>
									<NavigationMenuPopup side="inline-end" alignOffset={-5} />
								</NavigationMenu>
							</li>
						</ul>
					</NavigationMenuContent>
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
