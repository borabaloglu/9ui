import { navConfig } from "@/config/nav"

import { type NavItem } from "@/types/nav"

export interface NavPageInfo {
	title: string
	href: string
}

export interface NavigationResult {
	prev: NavPageInfo | null
	next: NavPageInfo | null
}

/**
 * Get all navigation items in a flat array following the sidebar navigation order
 */
function getAllNavItems(): NavItem[] {
	const allItems: NavItem[] = []

	for (const group of navConfig.sidebarNav) {
		for (const item of group.items) {
			// Only include enabled items with valid hrefs
			if (!item.disabled && item.href) {
				allItems.push(item)
			}
		}
	}

	return allItems
}

/**
 * Find the previous and next pages for a given pathname
 */
export function getNavigationForPage(currentPath: string): NavigationResult {
	const allItems = getAllNavItems()
	const currentIndex = allItems.findIndex((item) => item.href === currentPath)

	if (currentIndex === -1) {
		return { prev: null, next: null }
	}

	const prev =
		currentIndex > 0
			? {
					title: allItems[currentIndex - 1].title,
					href: allItems[currentIndex - 1].href,
				}
			: null

	const next =
		currentIndex < allItems.length - 1
			? {
					title: allItems[currentIndex + 1].title,
					href: allItems[currentIndex + 1].href,
				}
			: null

	return { prev, next }
}
