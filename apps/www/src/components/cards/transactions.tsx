"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const transactions = [
	{ name: "Coffee Shop", amount: "-$4.50", status: "Paid" },
	{ name: "Salary", amount: "+$2,500.00", status: "Paid" },
	{ name: "Grocery Store", amount: "-$65.75", status: "Pending" },
	{ name: "Gym Membership", amount: "-$32.99", status: "Failed" },
	{ name: "Streaming", amount: "-$15.99", status: "Paid" },
	{ name: "Bookstore", amount: "-$28.40", status: "Paid" },
	{ name: "Freelance", amount: "+$840.00", status: "Pending" },
	{ name: "Electricity", amount: "-$72.10", status: "Paid" },
	{ name: "Train Ticket", amount: "-$19.00", status: "Paid" },
	{ name: "Refund", amount: "+$45.00", status: "Paid" },
	{ name: "Pharmacy", amount: "-$12.30", status: "Paid" },
	{ name: "Domain Renewal", amount: "-$14.00", status: "Failed" },
	{ name: "Restaurant", amount: "-$58.20", status: "Paid" },
	{ name: "Dividends", amount: "+$120.00", status: "Pending" },
	{ name: "Cloud Hosting", amount: "-$20.00", status: "Paid" },
] as const;

const variants = {
	Paid: "success",
	Pending: "warning",
	Failed: "danger",
} as const;

const pageSize = 5;
const pageCount = transactions.length / pageSize;

export function TransactionsCard() {
	const [page, setPage] = useState(1);
	const rows = transactions.slice((page - 1) * pageSize, page * pageSize);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Transactions</CardTitle>
				<CardDescription>Your latest activity this month.</CardDescription>
			</CardHeader>
			<CardContent className="px-0">
				<Table className="table-fixed">
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead className="w-24">Status</TableHead>
							<TableHead className="w-28 text-end">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((transaction) => (
							<TableRow key={transaction.name}>
								<TableCell className="truncate font-medium">
									{transaction.name}
								</TableCell>
								<TableCell>
									<Badge variant={variants[transaction.status]}>
										{transaction.status}
									</Badge>
								</TableCell>
								<TableCell className="text-end tabular-nums">
									{transaction.amount}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="justify-between">
				<span className="text-muted-foreground tabular-nums">
					Page {page} of {pageCount}
				</span>
				<Pagination className="mx-0 w-auto">
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								render={<button type="button" />}
								aria-disabled={page === 1}
								onClick={() => setPage(page - 1)}
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								render={<button type="button" />}
								aria-disabled={page === pageCount}
								onClick={() => setPage(page + 1)}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</CardFooter>
		</Card>
	);
}
