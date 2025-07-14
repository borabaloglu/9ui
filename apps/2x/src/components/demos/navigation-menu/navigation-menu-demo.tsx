"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/components/alert-dialog",
		description:
			"A modal dialog for critical messages or confirmation actions.",
	},
	{
		title: "Preview Card",
		href: "/docs/components/preview-card",
		description: "Used to display a preview of content when hovered.",
	},
	{
		title: "Emoji Picker",
		href: "/docs/components/emoji-picker",
		description: "A component that allows users to pick an emoji.",
	},
	{
		title: "Progress",
		href: "/docs/components/progress",
		description: "Displays a progress bar with an optional label.",
	},
	{
		title: "Tabs",
		href: "/docs/components/tabs",
		description: "Used to organize content into tabbed navigation.",
	},
	{
		title: "Tooltip",
		href: "/docs/components/tooltip",
		description: "Used to provide context or hints for elements.",
	},
]

const gettingStartedItems = [
	{
		title: "Introduction",
		href: "/docs/getting-started/introduction",
		description: "Learn about 9ui.",
	},
	{
		title: "Installation",
		href: "/docs/getting-started/installation",
		description: "How to install 9ui in your project.",
	},
	{
		title: "Roadmap",
		href: "/docs/getting-started/roadmap",
		description: "See what we are working on next.",
	},
]

export default function NavigationMenuDemo() {
	return (
		<NavigationMenu className="w-full">
			<NavigationMenuList className="flex-col items-start md:flex-row md:items-center">
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2">
							{gettingStartedItems.map((item) => (
								<ListItem key={item.title} title={item.title} href={item.href}>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="https://github.com/borabaloglu/9ui"
						render={({ ...props }) => (
							<a {...props} className={cn(navigationMenuTriggerStyle())}>
								<Icons.gitHub />
								Source Code
							</a>
						)}
					/>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink
				render={(props) => (
					<Link href={href} {...props}>
						<div className="text-sm font-semibold">{title}</div>
						<p className="text-muted-foreground line-clamp-2 text-sm">
							{children}
						</p>
					</Link>
				)}
			/>
		</li>
	)
}
