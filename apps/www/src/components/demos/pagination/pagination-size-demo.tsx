import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationSizeDemo() {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" size="sm" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" size="icon-sm">
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" active size="icon-sm">
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" size="icon-sm">
						3
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis size="icon-sm" />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" size="sm" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
