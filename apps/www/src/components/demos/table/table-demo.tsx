import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const invoices = [
	{ id: "INV-1042", customer: "Acme Inc.", status: "Paid", amount: 1250 },
	{ id: "INV-1041", customer: "Globex", status: "Pending", amount: 480 },
	{ id: "INV-1040", customer: "Initech", status: "Paid", amount: 2310.5 },
	{ id: "INV-1039", customer: "Umbrella", status: "Overdue", amount: 925 },
	{ id: "INV-1038", customer: "Hooli", status: "Paid", amount: 149.99 },
] as const;

const statusVariant = {
	Paid: "success",
	Pending: "warning",
	Overdue: "danger",
} as const;

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export default function TableDemo() {
	return (
		<Table variant="card">
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Customer</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-end">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.id}>
						<TableCell className="font-medium">{invoice.id}</TableCell>
						<TableCell>{invoice.customer}</TableCell>
						<TableCell>
							<Badge variant={statusVariant[invoice.status]} size="sm">
								{invoice.status}
							</Badge>
						</TableCell>
						<TableCell className="text-end">
							{currency.format(invoice.amount)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
