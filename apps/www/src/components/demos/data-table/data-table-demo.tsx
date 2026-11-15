"use client";

import * as React from "react";
import {
	type ColumnFiltersState,
	type ColumnVisibilityState,
	columnFilteringFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createFilteredRowModel,
	createPaginatedRowModel,
	createSortedRowModel,
	filterFn_includesString,
	type RowSelectionState,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	type SortingState,
	sortFn_alphanumeric,
	sortFn_text,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	ChevronDownIcon,
	ChevronsUpDownIcon,
	EllipsisIcon,
	SearchIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import {
	Menu,
	MenuCheckboxItem,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

const data: Payment[] = [
	{ id: "m5gr84i9", amount: 316, status: "success", email: "ken@example.com" },
	{ id: "3u1reuv4", amount: 242, status: "success", email: "abe@example.com" },
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "ada@example.com",
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "silas@example.com",
	},
	{ id: "bhqecj4p", amount: 721, status: "failed", email: "cara@example.com" },
	{ id: "p0r8sd2k", amount: 129, status: "pending", email: "lena@example.com" },
	{ id: "x7c2mq9a", amount: 558, status: "success", email: "omar@example.com" },
	{
		id: "t4n6yb1e",
		amount: 64,
		status: "processing",
		email: "ines@example.com",
	},
	{ id: "h9w3zk5u", amount: 992, status: "failed", email: "theo@example.com" },
	{ id: "q2f8vj7d", amount: 410, status: "pending", email: "mira@example.com" },
	{
		id: "a6l1gc4s",
		amount: 275,
		status: "success",
		email: "jonas@example.com",
	},
	{
		id: "e3b5xo8r",
		amount: 683,
		status: "processing",
		email: "priya@example.com",
	},
];

const statusVariant = {
	pending: "warning",
	processing: "info",
	success: "success",
	failed: "danger",
} as const;

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const features = tableFeatures({
	columnFilteringFeature,
	columnVisibilityFeature,
	rowPaginationFeature,
	rowSelectionFeature,
	rowSortingFeature,
	filteredRowModel: createFilteredRowModel(),
	paginatedRowModel: createPaginatedRowModel(),
	sortedRowModel: createSortedRowModel(),
	filterFns: { includesString: filterFn_includesString },
	sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
});

const columnHelper = createColumnHelper<typeof features, Payment>();

const columns = columnHelper.columns([
	columnHelper.display({
		id: "select",
		header: ({ table }) => (
			<Checkbox
				aria-label="Select all"
				checked={table.getIsAllPageRowsSelected()}
				indeterminate={
					table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
				}
				onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				aria-label={`Select ${row.original.email}`}
				checked={row.getIsSelected()}
				onCheckedChange={(checked) => row.toggleSelected(checked)}
			/>
		),
		enableSorting: false,
		enableHiding: false,
	}),
	columnHelper.accessor("status", {
		header: "Status",
		cell: ({ getValue }) => (
			<Badge
				variant={statusVariant[getValue()]}
				size="sm"
				className="capitalize"
			>
				{getValue()}
			</Badge>
		),
	}),
	columnHelper.accessor("email", {
		header: ({ column }) => (
			<Button
				variant="ghost"
				size="sm"
				className="text-muted-foreground -ms-2.5"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Email
				{column.getIsSorted() === "asc" ? (
					<ArrowUpIcon data-icon="inline-end" />
				) : column.getIsSorted() === "desc" ? (
					<ArrowDownIcon data-icon="inline-end" />
				) : (
					<ChevronsUpDownIcon data-icon="inline-end" />
				)}
			</Button>
		),
	}),
	columnHelper.accessor("amount", {
		header: () => <div className="text-end">Amount</div>,
		cell: ({ getValue }) => (
			<div className="text-end font-medium">{currency.format(getValue())}</div>
		),
	}),
	columnHelper.display({
		id: "actions",
		header: () => <span className="sr-only">Actions</span>,
		cell: ({ row }) => (
			<Menu>
				<MenuTrigger
					render={
						<Button
							variant="ghost"
							size="icon-sm"
							aria-label={`Actions for ${row.original.email}`}
						/>
					}
				>
					<EllipsisIcon />
				</MenuTrigger>
				<MenuPopup align="end">
					<MenuItem
						onClick={() => navigator.clipboard.writeText(row.original.id)}
					>
						Copy payment ID
					</MenuItem>
					<MenuSeparator />
					<MenuItem>View customer</MenuItem>
					<MenuItem>View payment details</MenuItem>
				</MenuPopup>
			</Menu>
		),
		enableHiding: false,
	}),
]);

export default function DataTableDemo() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<ColumnVisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

	const table = useTable({
		features,
		data,
		columns,
		initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="flex w-full flex-col gap-3">
			<div className="flex items-center justify-between gap-2">
				<InputGroup className="max-w-64">
					<InputGroupAddon align="inline-start">
						<InputGroupText>
							<SearchIcon />
						</InputGroupText>
					</InputGroupAddon>
					<InputGroupInput
						aria-label="Filter emails"
						placeholder="Filter emails..."
						value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("email")?.setFilterValue(event.target.value)
						}
					/>
				</InputGroup>
				<Menu>
					<MenuTrigger render={<Button variant="outline" />}>
						Columns
						<ChevronDownIcon data-icon="inline-end" />
					</MenuTrigger>
					<MenuPopup align="end" className="w-40">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => (
								<MenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(checked) =>
										column.toggleVisibility(checked)
									}
								>
									{column.id}
								</MenuCheckboxItem>
							))}
					</MenuPopup>
				</Menu>
			</div>
			<Table variant="card">
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const sorted = header.column.getIsSorted();

								return (
									<TableHead
										key={header.id}
										className={header.id === "actions" ? "w-px" : undefined}
										aria-sort={
											sorted === "asc"
												? "ascending"
												: sorted === "desc"
													? "descending"
													: undefined
										}
									>
										{header.isPlaceholder ? null : (
											<table.FlexRender header={header} />
										)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} aria-selected={row.getIsSelected()}>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className={
											cell.column.id === "actions"
												? "py-0 last:pe-2"
												: undefined
										}
									>
										<table.FlexRender cell={cell} />
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="text-muted-foreground h-24 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex items-center gap-2">
				<p className="text-muted-foreground flex-1 text-sm tabular-nums">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</p>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
