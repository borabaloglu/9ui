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
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	ChevronsUpDownIcon,
	EllipsisIcon,
	SearchIcon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
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

const translations = {
	en: {
		filter: "Filter emails...",
		filterLabel: "Filter emails",
		columns: "Columns",
		selectAll: "Select all",
		select: "Select",
		status: "Status",
		email: "Email",
		amount: "Amount",
		actions: "Actions",
		actionsFor: "Actions for",
		copyId: "Copy payment ID",
		viewCustomer: "View customer",
		viewDetails: "View payment details",
		empty: "No results.",
		selected: "{selected} of {total} row(s) selected.",
		rowsPerPage: "Rows per page",
		page: "Page {page} of {count}",
		firstPage: "Go to first page",
		previousPage: "Go to previous page",
		nextPage: "Go to next page",
		lastPage: "Go to last page",
		pending: "Pending",
		processing: "Processing",
		success: "Success",
		failed: "Failed",
	},
	ar: {
		filter: "تصفية البريد الإلكتروني...",
		filterLabel: "تصفية البريد الإلكتروني",
		columns: "الأعمدة",
		selectAll: "تحديد الكل",
		select: "تحديد",
		status: "الحالة",
		email: "البريد الإلكتروني",
		amount: "المبلغ",
		actions: "الإجراءات",
		actionsFor: "إجراءات",
		copyId: "نسخ معرّف الدفعة",
		viewCustomer: "عرض العميل",
		viewDetails: "عرض تفاصيل الدفعة",
		empty: "لا توجد نتائج.",
		selected: "تم تحديد {selected} من {total} صفوف.",
		rowsPerPage: "صفوف في الصفحة",
		page: "الصفحة {page} من {count}",
		firstPage: "الانتقال إلى الصفحة الأولى",
		previousPage: "الانتقال إلى الصفحة السابقة",
		nextPage: "الانتقال إلى الصفحة التالية",
		lastPage: "الانتقال إلى الصفحة الأخيرة",
		pending: "قيد الانتظار",
		processing: "قيد المعالجة",
		success: "ناجحة",
		failed: "فاشلة",
	},
	he: {
		filter: "סינון לפי אימייל...",
		filterLabel: "סינון לפי אימייל",
		columns: "עמודות",
		selectAll: "בחירת הכול",
		select: "בחירה",
		status: "סטטוס",
		email: "אימייל",
		amount: "סכום",
		actions: "פעולות",
		actionsFor: "פעולות עבור",
		copyId: "העתקת מזהה תשלום",
		viewCustomer: "צפייה בלקוח",
		viewDetails: "צפייה בפרטי התשלום",
		empty: "אין תוצאות.",
		selected: "נבחרו {selected} מתוך {total} שורות.",
		rowsPerPage: "שורות בעמוד",
		page: "עמוד {page} מתוך {count}",
		firstPage: "מעבר לעמוד הראשון",
		previousPage: "מעבר לעמוד הקודם",
		nextPage: "מעבר לעמוד הבא",
		lastPage: "מעבר לעמוד האחרון",
		pending: "ממתין",
		processing: "בעיבוד",
		success: "הצליח",
		failed: "נכשל",
	},
} satisfies Translations<Record<string, string>>;

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

const pageSizes = [5, 10, 20].map((size) => ({
	label: String(size),
	value: size,
}));

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

type Strings = (typeof translations)["en"];

function format(template: string, values: Record<string, number>) {
	return template.replace(/\{(\w+)\}/g, (_, key: string) =>
		String(values[key]),
	);
}

function createColumns(t: Strings, dir: "ltr" | "rtl") {
	return columnHelper.columns([
		columnHelper.display({
			id: "select",
			header: ({ table }) => (
				<Checkbox
					aria-label={t.selectAll}
					checked={table.getIsAllPageRowsSelected()}
					indeterminate={
						table.getIsSomePageRowsSelected() &&
						!table.getIsAllPageRowsSelected()
					}
					onCheckedChange={(checked) =>
						table.toggleAllPageRowsSelected(checked)
					}
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					aria-label={`${t.select} ${row.original.email}`}
					checked={row.getIsSelected()}
					onCheckedChange={(checked) => row.toggleSelected(checked)}
				/>
			),
			enableSorting: false,
			enableHiding: false,
		}),
		columnHelper.accessor("status", {
			header: t.status,
			cell: ({ getValue }) => (
				<Badge variant={statusVariant[getValue()]} size="sm">
					{t[getValue()]}
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
					{t.email}
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
			header: () => <div className="text-end">{t.amount}</div>,
			cell: ({ getValue }) => (
				<div className="text-end font-medium">
					{currency.format(getValue())}
				</div>
			),
		}),
		columnHelper.display({
			id: "actions",
			header: () => <span className="sr-only">{t.actions}</span>,
			cell: ({ row }) => (
				<Menu>
					<MenuTrigger
						render={
							<Button
								variant="ghost"
								size="icon-sm"
								aria-label={`${t.actionsFor} ${row.original.email}`}
							/>
						}
					>
						<EllipsisIcon />
					</MenuTrigger>
					<MenuPopup dir={dir} align="end">
						<MenuItem
							onClick={() => navigator.clipboard.writeText(row.original.id)}
						>
							{t.copyId}
						</MenuItem>
						<MenuSeparator />
						<MenuItem>{t.viewCustomer}</MenuItem>
						<MenuItem>{t.viewDetails}</MenuItem>
					</MenuPopup>
				</Menu>
			),
			enableHiding: false,
		}),
	]);
}

export default function DataTableRtlDemo() {
	const { dir, t } = useTranslation(translations);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<ColumnVisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

	const columns = React.useMemo(() => createColumns(t, dir), [t, dir]);

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

	const { pageIndex, pageSize } = table.state.pagination;
	const columnLabels: Record<string, string> = {
		status: t.status,
		email: t.email,
		amount: t.amount,
	};

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
						aria-label={t.filterLabel}
						placeholder={t.filter}
						value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("email")?.setFilterValue(event.target.value)
						}
					/>
				</InputGroup>
				<Menu>
					<MenuTrigger render={<Button variant="outline" />}>
						{t.columns}
						<ChevronDownIcon data-icon="inline-end" />
					</MenuTrigger>
					<MenuPopup dir={dir} align="end" className="w-40">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => (
								<MenuCheckboxItem
									key={column.id}
									checked={column.getIsVisible()}
									onCheckedChange={(checked) =>
										column.toggleVisibility(checked)
									}
								>
									{columnLabels[column.id] ?? column.id}
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
								colSpan={table.getVisibleLeafColumns().length}
								className="text-muted-foreground h-24 text-center"
							>
								{t.empty}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
				<p className="text-muted-foreground text-sm tabular-nums">
					{format(t.selected, {
						selected: table.getFilteredSelectedRowModel().rows.length,
						total: table.getFilteredRowModel().rows.length,
					})}
				</p>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
					<div className="flex items-center gap-2">
						<p className="text-muted-foreground text-sm">{t.rowsPerPage}</p>
						<Select
							items={pageSizes}
							value={pageSize}
							onValueChange={(value) => table.setPageSize(Number(value))}
						>
							<SelectTrigger aria-label={t.rowsPerPage} size="sm">
								<SelectValue />
							</SelectTrigger>
							<SelectPopup dir={dir}>
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
							{format(t.page, {
								page: pageIndex + 1,
								count: table.getPageCount(),
							})}
						</p>
						<Button
							variant="outline"
							size="icon-sm"
							aria-label={t.firstPage}
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<ChevronsLeftIcon className="rtl:rotate-180" />
						</Button>
						<Button
							variant="outline"
							size="icon-sm"
							aria-label={t.previousPage}
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<ChevronLeftIcon className="rtl:rotate-180" />
						</Button>
						<Button
							variant="outline"
							size="icon-sm"
							aria-label={t.nextPage}
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<ChevronRightIcon className="rtl:rotate-180" />
						</Button>
						<Button
							variant="outline"
							size="icon-sm"
							aria-label={t.lastPage}
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							<ChevronsRightIcon className="rtl:rotate-180" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
