import Link from "next/link"
import { EllipsisIcon } from "lucide-react"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs"

export default function BreadcrumbsDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<EllipsisIcon />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link href="/docs/components">Components</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
