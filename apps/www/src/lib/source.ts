import { docs } from "collections/server";
import type { Item } from "fumadocs-core/page-tree";
import { loader } from "fumadocs-core/source";

import type { NavItem, SidebarNavGroup } from "@/types/nav";

export const source = loader({
	baseUrl: "/docs",
	source: docs.toFumadocsSource(),
});

function toNavItem(item: Item): NavItem | null {
	const page = source.getNodePage(item);

	if (!page) {
		return null;
	}

	return {
		title: page.data.title,
		href: page.url,
		label: page.data.label,
		disabled: page.data.disabled,
	};
}

export function getSidebarNav(): SidebarNavGroup[] {
	return source.pageTree.children.flatMap((node) => {
		if (node.type !== "folder") {
			return [];
		}

		const items = node.children.flatMap((child) => {
			const item =
				child.type === "page"
					? child
					: child.type === "folder"
						? child.index
						: undefined;
			const navItem = item ? toNavItem(item) : null;

			return navItem ? [navItem] : [];
		});

		return [{ title: String(node.name), items }];
	});
}
