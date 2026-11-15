"use client";

import {
	type Column,
	columnVisibilityFeature,
	createColumnHelper,
	createSortedRowModel,
	type RowData,
	rowSortingFeature,
	sortFn_alphanumeric,
	sortFn_basic,
	sortFn_text,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	ChevronsUpDownIcon,
	EyeOffIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
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
		status: "pending",
		email: "silas@example.com",
	},
	{ id: "bhqecj4p", amount: 721, status: "failed", email: "cara@example.com" },
];

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const features = tableFeatures({
	columnVisibilityFeature,
	rowSortingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: {
		alphanumeric: sortFn_alphanumeric,
		basic: sortFn_basic,
		text: sortFn_text,
	},
});

function DataTableColumnHeader<TData extends RowData, TValue>({
	column,
	title,
}: {
	column: Column<typeof features, TData, TValue>;
	title: string;
}) {
	const sorted = column.getIsSorted();

	return (
		<Menu>
			<MenuTrigger
				render={
					<Button
						variant="ghost"
						size="sm"
						className="text-muted-foreground -ms-2.5"
					/>
				}
			>
				{title}
				{sorted === "asc" ? (
					<ArrowUpIcon data-icon="inline-end" />
				) : sorted === "desc" ? (
					<ArrowDownIcon data-icon="inline-end" />
				) : (
					<ChevronsUpDownIcon data-icon="inline-end" />
				)}
			</MenuTrigger>
			<MenuPopup align="start" className="w-32">
				<MenuItem onClick={() => column.toggleSorting(false)}>
					<ArrowUpIcon />
					Asc
				</MenuItem>
				<MenuItem onClick={() => column.toggleSorting(true)}>
					<ArrowDownIcon />
					Desc
				</MenuItem>
				<MenuSeparator />
				<MenuItem onClick={() => column.toggleVisibility(false)}>
					<EyeOffIcon />
					Hide
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}

const columnHelper = createColumnHelper<typeof features, Payment>();

const columns = columnHelper.columns([
	columnHelper.accessor("status", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ getValue }) => <span className="capitalize">{getValue()}</span>,
	}),
	columnHelper.accessor("email", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Email" />
		),
	}),
	columnHelper.accessor("amount", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Amount" />
		),
		cell: ({ getValue }) => currency.format(getValue()),
	}),
]);

export default function DataTableColumnHeaderDemo() {
	const table = useTable({ features, data, columns });

	return (
		<Table variant="card">
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							const sorted = header.column.getIsSorted();

							return (
								<TableHead
									key={header.id}
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
				{table.getRowModel().rows.map((row) => (
					<TableRow key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id}>
								<table.FlexRender cell={cell} />
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
