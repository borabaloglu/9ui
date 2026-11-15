"use client";

import {
	createColumnHelper,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";

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

const features = tableFeatures({});

const columnHelper = createColumnHelper<typeof features, Payment>();

const columns = columnHelper.columns([
	columnHelper.accessor("status", {
		header: "Status",
		cell: ({ getValue }) => <span className="capitalize">{getValue()}</span>,
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("amount", {
		header: () => <div className="text-end">Amount</div>,
		cell: ({ getValue }) => (
			<div className="text-end font-medium">{currency.format(getValue())}</div>
		),
	}),
]);

export default function DataTableBasicDemo() {
	const table = useTable({ features, data, columns });

	return (
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
				{table.getRowModel().rows.length ? (
					table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getAllCells().map((cell) => (
								<TableCell key={cell.id}>
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
	);
}
