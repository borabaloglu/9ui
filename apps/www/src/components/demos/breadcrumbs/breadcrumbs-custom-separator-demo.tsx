import { SlashIcon } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

export default function BreadcrumbsCustomSeparatorDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<SlashIcon className="h-4 w-4" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<Menu>
						<MenuTrigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</MenuTrigger>
						<MenuPopup align="start">
							<MenuItem>Documentation</MenuItem>
							<MenuItem>Themes</MenuItem>
							<MenuItem>GitHub</MenuItem>
						</MenuPopup>
					</Menu>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<SlashIcon className="h-4 w-4" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<SlashIcon className="h-4 w-4" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
