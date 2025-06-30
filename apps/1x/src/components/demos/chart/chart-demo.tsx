"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
	{ month: "Jan", revenue: 1500 },
	{ month: "Feb", revenue: 3200 },
	{ month: "Mar", revenue: 2900 },
	{ month: "Apr", revenue: 2100 },
	{ month: "May", revenue: 4000 },
	{ month: "Jun", revenue: 3700 },
	{ month: "Jul", revenue: 4300 },
	{ month: "Aug", revenue: 4900 },
	{ month: "Sep", revenue: 4700 },
	{ month: "Oct", revenue: 5200 },
	{ month: "Nov", revenue: 6000 },
	{ month: "Dec", revenue: 7200 },
]

const chartConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-2)",
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig

export default function ChartDemo() {
	const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)
	const averageRevenue = totalRevenue / chartData.length
	const highestRevenue = Math.max(...chartData.map((item) => item.revenue))

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>Monthly Revenue</CardTitle>
				<CardDescription>Performance overview for 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart config={chartConfig} className="max-h-[300px]">
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							cursor={{ fill: "var(--background)" }}
							content={<ChartTooltipContent />}
						/>
						<Bar
							dataKey="revenue"
							fill="var(--chart-2)"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</Chart>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Total Revenue:</span>
					<span>${totalRevenue.toLocaleString()}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Monthly Average:</span>
					<span>
						$
						{averageRevenue.toLocaleString(undefined, {
							maximumFractionDigits: 0,
						})}
					</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Highest Month:</span>
					<span>${highestRevenue.toLocaleString()}</span>
				</div>
			</CardFooter>
		</Card>
	)
}
