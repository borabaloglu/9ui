"use client"

import { RadialBar, RadialBarChart } from "recharts"

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
	{ browser: "chrome", visitors: 540, fill: "var(--color-chrome)" },
	{ browser: "safari", visitors: 410, fill: "var(--color-safari)" },
	{ browser: "firefox", visitors: 262, fill: "var(--color-firefox)" },
	{ browser: "edge", visitors: 160, fill: "var(--color-edge)" },
	{ browser: "other", visitors: 100, fill: "var(--color-other)" },
]

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "var(--chart-1)",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
	firefox: {
		label: "Firefox",
		color: "var(--chart-3)",
	},
	edge: {
		label: "Edge",
		color: "var(--chart-4)",
	},
	other: {
		label: "Other",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig

export default function ChartRadialBarDemo() {
	const totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0)
	const highestVisitors = Math.max(...chartData.map((item) => item.visitors))
	const topBrowser = chartData.find(
		(item) => item.visitors === highestVisitors
	)?.browser

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>Browser Usage</CardTitle>
				<CardDescription>Visitor distribution by browser</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel nameKey="browser" />}
						/>
						<RadialBar dataKey="visitors" background />
					</RadialBarChart>
				</Chart>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Total Visitors:</span>
					<span>{totalVisitors.toLocaleString()}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Most Used Browser:</span>
					<span className="capitalize">{topBrowser}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Peak Visitors:</span>
					<span>{highestVisitors.toLocaleString()}</span>
				</div>
			</CardFooter>
		</Card>
	)
}
