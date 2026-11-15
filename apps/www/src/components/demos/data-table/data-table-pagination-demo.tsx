"use client";

import {
	createColumnHelper,
	createPaginatedRowModel,
	rowPaginationFeature,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Invoice = {
	id: string;
	customer: string;
	amount: number;
};

const customers = [
	"Acme Inc.",
	"Globex",
	"Initech",
	"Umbrella",
	"Hooli",
	"Stark Industries",
	"Wayne Enterprises",
	"Wonka Industries",
];

const data: Invoice[] = Array.from({ length: 48 }, (_, index) => ({
	id: `INV-${String(index + 1).padStart(3, "0")}`,
	customer: customers[index % customers.length],
	amount: 120 + ((index * 137) % 880),
}));

const pageSizes = [5, 10, 20].map((size) => ({
	label: String(size),
	value: size,
}));

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const features = tableFeatures({
	rowPaginationFeature,
	paginatedRowModel: createPaginatedRowModel(),
});

const columnHelper = createColumnHelper<typeof features, Invoice>();

const columns = columnHelper.columns([
	columnHelper.accessor("id", {
		header: "Invoice",
		cell: ({ getValue }) => <span className="font-medium">{getValue()}</span>,
	}),
	columnHelper.accessor("customer", {
		header: "Customer",
	}),
	columnHelper.accessor("amount", {
		header: () => <div className="text-end">Amount</div>,
		cell: ({ getValue }) => (
			<div className="text-end">{currency.format(getValue())}</div>
		),
	}),
]);

export default function DataTablePaginationDemo() {
	const table = useTable({
		features,
		data,
		columns,
		initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
	});

	const { pageIndex, pageSize } = table.state.pagination;

	return (
		<div className="flex w-full flex-col gap-3">
			<Table variant="card">
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id}>
									{header.isPlaceholder ? null : (
										<table.FlexRender header={header} />
									)}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getAllCells().map((cell) => (
								<TableCell key={cell.id}>
									<table.FlexRender cell={cell} />
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
				<div className="flex items-center gap-2">
					<p className="text-muted-foreground text-sm">Rows per page</p>
					<Select
						items={pageSizes}
						value={pageSize}
						onValueChange={(value) => table.setPageSize(Number(value))}
					>
						<SelectTrigger aria-label="Rows per page" size="sm">
							<SelectValue />
						</SelectTrigger>
						<SelectPopup>
							{pageSizes.map(({ label, value }) => (
								<SelectItem key={value} value={value}>
									{label}
								</SelectItem>
							))}
						</SelectPopup>
					</Select>
				</div>
				<div className="flex items-center gap-1.5">
					<p className="text-muted-foreground me-2 text-sm tabular-nums">
						Page {pageIndex + 1} of {table.getPageCount()}
					</p>
					<Button
						variant="outline"
						size="icon-sm"
						aria-label="Go to first page"
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronsLeftIcon />
					</Button>
					<Button
						variant="outline"
						size="icon-sm"
						aria-label="Go to previous page"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeftIcon />
					</Button>
					<Button
						variant="outline"
						size="icon-sm"
						aria-label="Go to next page"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRightIcon />
					</Button>
					<Button
						variant="outline"
						size="icon-sm"
						aria-label="Go to last page"
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						<ChevronsRightIcon />
					</Button>
				</div>
			</div>
		</div>
	);
}
