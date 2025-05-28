"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
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
	{ month: "Jan", desktop: 2400, mobile: 1800 },
	{ month: "Feb", desktop: 2900, mobile: 2100 },
	{ month: "Mar", desktop: 4200, mobile: 2600 },
	{ month: "Apr", desktop: 3500, mobile: 3200 },
	{ month: "May", desktop: 2800, mobile: 3700 },
	{ month: "Jun", desktop: 3900, mobile: 4100 },
	{ month: "Jul", desktop: 5200, mobile: 4900 },
	{ month: "Aug", desktop: 6100, mobile: 5300 },
	{ month: "Sep", desktop: 4800, mobile: 5100 },
	{ month: "Oct", desktop: 3700, mobile: 4800 },
	{ month: "Nov", desktop: 5300, mobile: 4600 },
	{ month: "Dec", desktop: 4800, mobile: 5900 },
]

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig

export function VisitorsChartCard() {
	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>Monthly Visitors Chart</CardTitle>
				<CardDescription>Desktop vs Mobile traffic for 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart config={chartConfig} className="max-h-[250px] w-full">
					<AreaChart
						accessibilityLayer
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
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<defs>
							<linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--chart-1)"
									stopOpacity={0.4}
								/>
								<stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--chart-2)"
									stopOpacity={0.4}
								/>
								<stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
							</linearGradient>
						</defs>
						<Area
							dataKey="desktop"
							type="natural"
							fill="url(#desktopGradient)"
							fillOpacity={1}
							stroke="var(--chart-1)"
							stackId="1"
						/>
						<Area
							dataKey="mobile"
							type="natural"
							fill="url(#mobileGradient)"
							fillOpacity={1}
							stroke="var(--chart-2)"
							stackId="1"
						/>
					</AreaChart>
				</Chart>
			</CardContent>
		</Card>
	)
}
