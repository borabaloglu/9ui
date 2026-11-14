import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbTruncateDemo() {
	return (
		<Breadcrumb className="max-w-full">
			<BreadcrumbList className="flex-nowrap">
				<BreadcrumbItem className="shrink-0">
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="shrink-0">
					<BreadcrumbLink href="#">Blog</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="min-w-0">
					<BreadcrumbPage className="max-w-48 truncate">
						How we rebuilt every component on Base UI
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
