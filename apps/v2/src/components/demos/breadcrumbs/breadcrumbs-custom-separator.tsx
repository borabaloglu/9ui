import Link from "next/link"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs"

export default function BreadcrumbsCustomSeparator() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<span>/</span>
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<Link href="/docs/components">Components</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<span>/</span>
				</BreadcrumbSeparator>
				<BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
