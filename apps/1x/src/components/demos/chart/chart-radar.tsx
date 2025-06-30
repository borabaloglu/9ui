"use client"

import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
	{ category: "Performance", a: 90, b: 60 },
	{ category: "Reliability", a: 75, b: 90 },
	{ category: "Scalability", a: 95, b: 90 },
	{ category: "Security", a: 88, b: 65 },
	{ category: "Usability", a: 92, b: 88 },
]

const chartConfig = {
	a: {
		label: "Product A",
		color: "var(--chart-1)",
	},
	b: {
		label: "Product B",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig

export default function ChartRadarDemo() {
	const productAAverage =
		chartData.reduce((sum, item) => sum + item.a, 0) / chartData.length
	const productBAverage =
		chartData.reduce((sum, item) => sum + item.b, 0) / chartData.length
	const bestPerformer =
		productAAverage > productBAverage ? "Product A" : "Product B"

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>Product Comparison</CardTitle>
				<CardDescription>
					Performance metrics across key categories
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart config={chartConfig} className="max-h-[300px]">
					<RadarChart data={chartData}>
						<PolarGrid />
						<PolarAngleAxis dataKey="category" />
						<ChartTooltip content={<ChartTooltipContent />} />
						<Legend />
						<Radar
							name="Product A"
							dataKey="a"
							stroke={chartConfig.a.color}
							fill={chartConfig.a.color}
							fillOpacity={0.2}
						/>
						<Radar
							name="Product B"
							dataKey="b"
							stroke={chartConfig.b.color}
							fill={chartConfig.b.color}
							fillOpacity={0.2}
						/>
					</RadarChart>
				</Chart>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Best Overall:</span>
					<span>{bestPerformer}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Product A Average:</span>
					<span>{productAAverage.toFixed(1)}%</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Product B Average:</span>
					<span>{productBAverage.toFixed(1)}%</span>
				</div>
			</CardFooter>
		</Card>
	)
}
