"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
	{ day: "Mon", p50: 120, p95: 310 },
	{ day: "Tue", p50: 132, p95: 345 },
	{ day: "Wed", p50: 118, p95: 298 },
	{ day: "Thu", p50: 141, p95: 420 },
	{ day: "Fri", p50: 126, p95: 362 },
	{ day: "Sat", p50: 109, p95: 271 },
	{ day: "Sun", p50: 104, p95: 256 },
];

const chartConfig = {
	p95: {
		label: "p95",
		color: "var(--chart-1)",
	},
	p50: {
		label: "p50",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export default function ChartLineDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Response time</CardTitle>
				<CardDescription>
					Median and 95th percentile, last 7 days
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<LineChart data={chartData} margin={{ right: 12 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="day"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={48}
							tickFormatter={(value) => `${value}ms`}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Line
							dataKey="p95"
							type="monotone"
							stroke="var(--color-p95)"
							strokeWidth={2}
							dot={{ r: 3, fill: "var(--color-p95)" }}
							activeDot={{ r: 5 }}
							animationDuration={500}
						/>
						<Line
							dataKey="p50"
							type="monotone"
							stroke="var(--color-p50)"
							strokeWidth={2}
							dot={{ r: 3, fill: "var(--color-p50)" }}
							activeDot={{ r: 5 }}
							animationDuration={500}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
