export interface NavItem {
	title: string
	href: string
	disabled?: boolean
	external?: boolean
	label?: string
}

export interface SidebarNavGroup {
	title: string
	items: NavItem[]
	disabled?: boolean
}
