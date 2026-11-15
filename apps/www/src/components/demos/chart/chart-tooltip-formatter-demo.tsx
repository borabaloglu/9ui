"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Jan", revenue: 4500, expenses: 3200 },
	{ month: "Feb", revenue: 5200, expenses: 3800 },
	{ month: "Mar", revenue: 4800, expenses: 3500 },
	{ month: "Apr", revenue: 6100, expenses: 4200 },
	{ month: "May", revenue: 5800, expenses: 4000 },
	{ month: "Jun", revenue: 7200, expenses: 4800 },
	{ month: "Jul", revenue: 6900, expenses: 4600 },
	{ month: "Aug", revenue: 7600, expenses: 5100 },
	{ month: "Sep", revenue: 7100, expenses: 4900 },
	{ month: "Oct", revenue: 8200, expenses: 5400 },
	{ month: "Nov", revenue: 8800, expenses: 5900 },
	{ month: "Dec", revenue: 9600, expenses: 6300 },
];

const chartConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-1)",
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

export default function ChartTooltipFormatterDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Revenue and expenses</CardTitle>
				<CardDescription>January to December 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<BarChart data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelFormatter={(label) => `${label} 2024`}
									formatter={(value, name) => (
										<div className="flex flex-1 items-center justify-between gap-4">
											<span className="text-muted-foreground">
												{chartConfig[name as keyof typeof chartConfig]?.label}
											</span>
											<span className="font-medium tabular-nums">
												{currency.format(Number(value))}
											</span>
										</div>
									)}
								/>
							}
						/>
						<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
						<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
