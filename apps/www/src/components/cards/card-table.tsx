"use client"

import dayjs from "dayjs"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const transactions = [
	{
		id: "1",
		date: "2024-03-20",
		description: "Coffee Shop",
		amount: -4.5,
		category: "Food & Drinks",
	},
	{
		id: "2",
		date: "2024-03-19",
		description: "Salary Deposit",
		amount: 2500.0,
		category: "Income",
	},
	{
		id: "3",
		date: "2024-03-19",
		description: "Grocery Store",
		amount: -65.75,
		category: "Shopping",
	},
	{
		id: "4",
		date: "2024-03-18",
		description: "Gym Membership",
		amount: -32.99,
		category: "Health",
	},
	{
		id: "5",
		date: "2024-03-17",
		description: "Netflix Subscription",
		amount: -15.99,
		category: "Entertainment",
	},
]

export function TableCard() {
	const total = transactions.reduce(
		(sum, transaction) => sum + transaction.amount,
		0
	)

	return (
		<Card className="size-full">
			<CardHeader>
				<CardTitle>Recent Transactions</CardTitle>
				<CardDescription>
					A list of your most recent transactions and spending.
				</CardDescription>
			</CardHeader>
			<CardContent className="px-0">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Id</TableHead>
							<TableHead className="min-w-[120px]">Date</TableHead>
							<TableHead className="min-w-[200px]">Description</TableHead>
							<TableHead>Amount</TableHead>
							<TableHead>Category</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{transactions.map((transaction) => (
							<TableRow key={transaction.id}>
								<TableCell className="font-mono">{transaction.id}</TableCell>
								<TableCell>
									{dayjs(transaction.date).format("MMM D, YYYY")}
								</TableCell>
								<TableCell>{transaction.description}</TableCell>
								<TableCell>
									{transaction.amount > 0 ? "+" : "-"}$
									{Math.abs(transaction.amount).toFixed(2)}
								</TableCell>
								<TableCell className="text-muted-foreground">
									{transaction.category}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total</TableCell>
							<TableCell colSpan={2}>
								{total > 0 ? "+" : "-"}${Math.abs(total).toFixed(2)}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</CardContent>
		</Card>
	)
}
