import { SlashIcon } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbCustomSeparatorDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<SlashIcon />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<SlashIcon />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
