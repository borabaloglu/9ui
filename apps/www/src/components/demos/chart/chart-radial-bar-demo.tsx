"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

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
	{ browser: "chrome", share: 64, fill: "var(--color-chrome)" },
	{ browser: "safari", share: 19, fill: "var(--color-safari)" },
	{ browser: "edge", share: 8, fill: "var(--color-edge)" },
	{ browser: "firefox", share: 6, fill: "var(--color-firefox)" },
	{ browser: "other", share: 3, fill: "var(--color-other)" },
];

const chartConfig = {
	share: {
		label: "Share",
	},
	chrome: {
		label: "Chrome",
		color: "var(--chart-1)",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
	edge: {
		label: "Edge",
		color: "var(--chart-3)",
	},
	firefox: {
		label: "Firefox",
		color: "var(--chart-4)",
	},
	other: {
		label: "Other",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

export default function ChartRadialBarDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Browser share</CardTitle>
				<CardDescription>Percent of visits, last 30 days</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-72 w-full">
					<RadialBarChart
						data={chartData}
						innerRadius={32}
						outerRadius={112}
						startAngle={90}
						endAngle={-270}
					>
						<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent showLabel={false} nameKey="browser" />
							}
						/>
						<ChartLegend content={<ChartLegendContent nameKey="browser" />} />
						<RadialBar
							dataKey="share"
							background
							cornerRadius={4}
							animationDuration={500}
						/>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
