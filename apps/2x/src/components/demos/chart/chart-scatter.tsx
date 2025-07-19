"use client"

import {
	CartesianGrid,
	Scatter,
	ScatterChart,
	XAxis,
	YAxis,
	ZAxis,
} from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ population: 850000, price: 425000, city: "San Francisco" },
	{ population: 2700000, price: 385000, city: "Chicago" },
	{ population: 8400000, price: 750000, city: "New York" },
	{ population: 4000000, price: 890000, city: "Los Angeles" },
	{ population: 2300000, price: 350000, city: "Houston" },
	{ population: 1600000, price: 420000, city: "Philadelphia" },
	{ population: 730000, price: 480000, city: "Seattle" },
	{ population: 690000, price: 445000, city: "Boston" },
	{ population: 710000, price: 320000, city: "Denver" },
	{ population: 950000, price: 295000, city: "Austin" },
]

const chartConfig = {
	scatter: {
		label: "Cities",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig

export default function ChartScatterDemo() {
	const averagePrice =
		chartData.reduce((sum, item) => sum + item.price, 0) / chartData.length
	const highestPrice = Math.max(...chartData.map((item) => item.price))
	const mostExpensiveCity = chartData.find(
		(item) => item.price === highestPrice
	)?.city

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="text-center">
				<CardTitle>Housing Market Analysis</CardTitle>
				<CardDescription>
					Population vs House Prices in Major Cities
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-[300px] w-full">
					<ScatterChart>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							type="number"
							dataKey="price"
							name="Average House Price"
							unit="$"
							tickLine={false}
							axisLine={false}
							tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
						/>
						<YAxis
							type="number"
							dataKey="population"
							name="Population"
							tickLine={false}
							axisLine={false}
							tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
						/>
						<ZAxis type="category" dataKey="city" name="City" />
						<ChartTooltip
							content={
								<ChartTooltipContent
									nameKey="city"
									labelKey="price"
									hideIndicator
								/>
							}
						/>
						<Scatter
							name="Cities"
							data={chartData}
							fill={chartConfig.scatter.color}
						/>
					</ScatterChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Most Expensive City:</span>
					<span>{mostExpensiveCity}</span>
				</div>
				<div className="text-muted-foreground flex w-full justify-between">
					<span>Average House Price:</span>
					<span>${averagePrice.toLocaleString()}</span>
				</div>
				<div className="text-muted-foreground flex w-full justify-between">
					<span>Highest House Price:</span>
					<span>${highestPrice.toLocaleString()}</span>
				</div>
			</CardFooter>
		</Card>
	)
}
