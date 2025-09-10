import { type NavItem, type SidebarNavGroup } from "@/types/nav"

export interface NavConfig {
	mainNav: NavItem[]
	sidebarNav: SidebarNavGroup[]
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
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/getting-started/introduction",
				},
				{
					title: "Roadmap",
					href: "/docs/getting-started/roadmap",
				},
				{
					title: "Installation",
					href: "/docs/getting-started/installation",
				},
				{
					title: "Theming",
					href: "/docs/getting-started/theming",
				},
				{
					title: "Dark mode",
					href: "/docs/getting-started/dark-mode",
				},
				{
					title: "Changelog",
					href: "/docs/getting-started/changelog",
				},
				{
					title: "LLMs",
					href: "/docs/getting-started/llms",
				},
				{
					title: "Figma",
					href: "/docs/getting-started/figma",
					disabled: true,
					label: "Soon",
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
				},
				{
					title: "Alert Dialog",
					href: "/docs/components/alert-dialog",
				},
				{
					title: "Alert",
					href: "/docs/components/alert",
				},
				{
					title: "Aspect Ratio",
					href: "/docs/components/aspect-ratio",
				},
				{
					title: "Autocomplete",
					href: "/docs/components/autocomplete",
					label: "New",
				},
				{
					title: "Avatar",
					href: "/docs/components/avatar",
				},
				{
					title: "Badge",
					href: "/docs/components/badge",
				},
				{
					title: "Breadcrumbs",
					href: "/docs/components/breadcrumbs",
				},
				{
					title: "Button",
					href: "/docs/components/button",
				},
				{
					title: "Calendar",
					href: "/docs/components/calendar",
				},
				{
					title: "Card",
					href: "/docs/components/card",
				},
				{
					title: "Carousel",
					href: "/docs/components/carousel",
				},
				{
					title: "Chart",
					href: "/docs/components/chart",
				},
				{
					title: "Checkbox",
					href: "/docs/components/checkbox",
				},
				{
					title: "Checkbox Group",
					href: "/docs/components/checkbox-group",
				},
				{
					title: "Collapsible",
					href: "/docs/components/collapsible",
				},
				{
					title: "Combobox",
					href: "/docs/components/combobox",
				},
				{
					title: "Command",
					href: "/docs/components/command",
				},
				{
					title: "Context Menu",
					href: "/docs/components/context-menu",
				},
				{
					title: "Data Table",
					href: "/docs/components/data-table",
					disabled: true,
					label: "Soon",
				},
				{
					title: "Date Picker",
					href: "/docs/components/date-picker",
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
				},
				{
					title: "Drawer",
					href: "/docs/components/drawer",
				},
				{
					title: "Dropdown Menu",
					href: "/docs/components/dropdown-menu",
				},
				{
					title: "Emoji Picker",
					href: "/docs/components/emoji-picker",
				},
				{
					title: "Form",
					href: "/docs/components/form",
				},
				{
					title: "Input",
					href: "/docs/components/input",
				},
				{
					title: "Input OTP",
					href: "/docs/components/input-otp",
				},
				{
					title: "Kbd",
					href: "/docs/components/kbd",
				},
				{
					title: "Menubar",
					href: "/docs/components/menubar",
				},
				{
					title: "Meter",
					href: "/docs/components/meter",
				},
				{
					title: "Navigation Menu",
					href: "/docs/components/navigation-menu",
				},
				{
					title: "Number Field",
					href: "/docs/components/number-field",
				},
				{
					title: "Pagination",
					href: "/docs/components/pagination",
				},
				{
					title: "Phone Input",
					href: "/docs/components/phone-input",
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
				},
				{
					title: "Preview Card",
					href: "/docs/components/preview-card",
				},
				{
					title: "Progress",
					href: "/docs/components/progress",
				},
				{
					title: "Radio Group",
					href: "/docs/components/radio-group",
				},
				{
					title: "Resizable",
					href: "/docs/components/resizable",
				},
				{
					title: "Scroll Area",
					href: "/docs/components/scroll-area",
				},
				{
					title: "Select",
					href: "/docs/components/select",
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
				},
				{
					title: "Sheet",
					href: "/docs/components/sheet",
				},
				{
					title: "Skeleton",
					href: "/docs/components/skeleton",
				},
				{
					title: "Slider",
					href: "/docs/components/slider",
				},
				{
					title: "Sonner",
					href: "/docs/components/sonner",
				},
				{
					title: "Switch",
					href: "/docs/components/switch",
				},
				{
					title: "Table",
					href: "/docs/components/table",
				},
				{
					title: "Tabs",
					href: "/docs/components/tabs",
				},
				{
					title: "Textarea",
					href: "/docs/components/textarea",
				},
				{
					title: "Toast",
					href: "/docs/components/toast",
				},
				{
					title: "Toggle",
					href: "/docs/components/toggle",
				},
				{
					title: "Toggle Group",
					href: "/docs/components/toggle-group",
				},
				{
					title: "Toolbar",
					href: "/docs/components/toolbar",
				},
				{
					title: "Tooltip",
					href: "/docs/components/tooltip",
				},
			],
		},
	],
}
