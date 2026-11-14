import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const items = [
	{ name: "Design system audit", quantity: 1, price: 1200 },
	{ name: "Component migration", quantity: 3, price: 450 },
	{ name: "Accessibility review", quantity: 2, price: 300 },
];

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export default function TableFooterDemo() {
	const total = items.reduce(
		(sum, item) => sum + item.quantity * item.price,
		0,
	);

	return (
		<Table variant="card">
			<TableHeader>
				<TableRow>
					<TableHead>Item</TableHead>
					<TableHead className="text-end">Qty</TableHead>
					<TableHead className="text-end">Price</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item) => (
					<TableRow key={item.name}>
						<TableCell className="font-medium">{item.name}</TableCell>
						<TableCell className="text-end">{item.quantity}</TableCell>
						<TableCell className="text-end">
							{currency.format(item.quantity * item.price)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={2}>Total</TableCell>
					<TableCell className="text-end">{currency.format(total)}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
