import Link from "next/link";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationLinkComponentDemo() {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious render={<Link href="#" />} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink render={<Link href="#" />}>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink active render={<Link href="#" />}>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink render={<Link href="#" />}>3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext render={<Link href="#" />} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
