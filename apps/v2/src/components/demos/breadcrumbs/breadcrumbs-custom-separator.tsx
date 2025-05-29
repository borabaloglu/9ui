import { SlashIcon } from "lucide-react"

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs"
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from "@/components/ui/dropdown"

export default function BreadcrumbsCustomSeparator() {
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
					<Dropdown>
						<DropdownTrigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</DropdownTrigger>
						<DropdownContent align="start">
							<DropdownItem>Documentation</DropdownItem>
							<DropdownItem>Themes</DropdownItem>
							<DropdownItem>GitHub</DropdownItem>
						</DropdownContent>
					</Dropdown>
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
	)
}
