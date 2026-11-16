"use client";

import { useState } from "react";
import { EllipsisIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const translations = {
	en: {
		caption: "Invoices issued this month.",
		selectAll: "Select all invoices",
		select: "Select",
		invoice: "Invoice",
		customer: "Customer",
		status: "Status",
		amount: "Amount",
		actions: "Actions",
		total: "Total",
		paid: "Paid",
		pending: "Pending",
		overdue: "Overdue",
		view: "View",
		download: "Download",
		delete: "Delete",
	},
	ar: {
		caption: "الفواتير الصادرة هذا الشهر.",
		selectAll: "تحديد كل الفواتير",
		select: "تحديد",
		invoice: "الفاتورة",
		customer: "العميل",
		status: "الحالة",
		amount: "المبلغ",
		actions: "الإجراءات",
		total: "الإجمالي",
		paid: "مدفوعة",
		pending: "قيد الانتظار",
		overdue: "متأخرة",
		view: "عرض",
		download: "تنزيل",
		delete: "حذف",
	},
	he: {
		caption: "חשבוניות שהונפקו החודש.",
		selectAll: "בחירת כל החשבוניות",
		select: "בחירה",
		invoice: "חשבונית",
		customer: "לקוח",
		status: "סטטוס",
		amount: "סכום",
		actions: "פעולות",
		total: "סה״כ",
		paid: "שולמה",
		pending: "ממתינה",
		overdue: "באיחור",
		view: "צפייה",
		download: "הורדה",
		delete: "מחיקה",
	},
} satisfies Translations<Record<string, string>>;

const invoices = [
	{ id: "INV-1042", customer: "Acme Corp", status: "paid", amount: 1250 },
	{ id: "INV-1041", customer: "Globex", status: "pending", amount: 480 },
	{ id: "INV-1040", customer: "Initech", status: "paid", amount: 2310.5 },
	{ id: "INV-1039", customer: "Umbrella", status: "overdue", amount: 925 },
] as const;

const statusVariant = {
	paid: "success",
	pending: "warning",
	overdue: "danger",
} as const;

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export default function TableRtlDemo() {
	const { dir, t } = useTranslation(translations);
	const [selected, setSelected] = useState<string[]>([invoices[1].id]);

	const allSelected = selected.length === invoices.length;
	const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

	return (
		<Table variant="card">
			<TableCaption>{t.caption}</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>
						<Checkbox
							aria-label={t.selectAll}
							checked={allSelected}
							indeterminate={selected.length > 0 && !allSelected}
							onCheckedChange={(checked) =>
								setSelected(
									checked ? invoices.map((invoice) => invoice.id) : [],
								)
							}
						/>
					</TableHead>
					<TableHead>{t.invoice}</TableHead>
					<TableHead>{t.customer}</TableHead>
					<TableHead>{t.status}</TableHead>
					<TableHead className="text-end">{t.amount}</TableHead>
					<TableHead className="w-px">
						<span className="sr-only">{t.actions}</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => {
					const isSelected = selected.includes(invoice.id);

					return (
						<TableRow key={invoice.id} aria-selected={isSelected}>
							<TableCell>
								<Checkbox
									aria-label={`${t.select} ${invoice.id}`}
									checked={isSelected}
									onCheckedChange={(checked) =>
										setSelected((current) =>
											checked
												? [...current, invoice.id]
												: current.filter((id) => id !== invoice.id),
										)
									}
								/>
							</TableCell>
							<TableCell className="font-medium">{invoice.id}</TableCell>
							<TableCell>{invoice.customer}</TableCell>
							<TableCell>
								<Badge variant={statusVariant[invoice.status]} size="sm">
									{t[invoice.status]}
								</Badge>
							</TableCell>
							<TableCell className="text-end">
								{currency.format(invoice.amount)}
							</TableCell>
							<TableCell className="py-0 last:pe-2">
								<Menu>
									<MenuTrigger
										render={
											<Button
												variant="ghost"
												size="icon-sm"
												aria-label={`${t.actions} ${invoice.id}`}
											/>
										}
									>
										<EllipsisIcon />
									</MenuTrigger>
									<MenuPopup dir={dir} align="end">
										<MenuItem>{t.view}</MenuItem>
										<MenuItem>{t.download}</MenuItem>
										<MenuSeparator />
										<MenuItem variant="destructive">{t.delete}</MenuItem>
									</MenuPopup>
								</Menu>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={4}>{t.total}</TableCell>
					<TableCell className="text-end">{currency.format(total)}</TableCell>
					<TableCell />
				</TableRow>
			</TableFooter>
		</Table>
	);
}
