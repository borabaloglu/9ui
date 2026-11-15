"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
	ChartLegend,
	ChartLegendContent,
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

export default function ChartBarDemo() {
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
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={40}
							tickFormatter={(value) => `$${value / 1000}k`}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
						<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
