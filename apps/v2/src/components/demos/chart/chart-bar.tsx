"use client"

import { TrendingUpIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Chart,
	ChartConfig,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ month: "Jan", revenue: 1500, expenses: 1200 },
	{ month: "Feb", revenue: 3200, expenses: 2800 },
	{ month: "Mar", revenue: 2900, expenses: 2500 },
	{ month: "Apr", revenue: 2100, expenses: 1900 },
	{ month: "May", revenue: 4000, expenses: 3500 },
	{ month: "Jun", revenue: 3700, expenses: 3200 },
]

const chartConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-1)",
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig

export default function ChartBarDemo() {
	const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)
	const totalExpenses = chartData.reduce((sum, item) => sum + item.expenses, 0)
	const netProfit = totalRevenue - totalExpenses
	const profitMargin = (netProfit / totalRevenue) * 100

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>Revenue vs Expenses</CardTitle>
				<CardDescription>First half of 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart config={chartConfig} className="max-h-[300px]">
					<BarChart
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={{ fill: "var(--background)" }}
							content={<ChartTooltipContent />}
						/>
						<Legend />
						<Bar
							dataKey="revenue"
							fill={chartConfig.revenue.color}
							radius={[4, 4, 0, 0]}
							maxBarSize={32}
						/>
						<Bar
							dataKey="expenses"
							fill={chartConfig.expenses.color}
							radius={[4, 4, 0, 0]}
							maxBarSize={32}
						/>
					</BarChart>
				</Chart>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Net Profit:</span>
					<span>${netProfit.toLocaleString()}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Profit Margin:</span>
					<span className="flex items-center gap-1">
						<TrendingUpIcon className="size-4" />
						{profitMargin.toFixed(1)}%
					</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Total Expenses:</span>
					<span>${totalExpenses.toLocaleString()}</span>
				</div>
			</CardFooter>
		</Card>
	)
}
