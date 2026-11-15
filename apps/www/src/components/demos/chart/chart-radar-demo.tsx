"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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
	{ category: "Speed", a: 80, b: 90 },
	{ category: "Reliability", a: 95, b: 85 },
	{ category: "Comfort", a: 70, b: 95 },
	{ category: "Safety", a: 90, b: 80 },
	{ category: "Efficiency", a: 85, b: 75 },
	{ category: "Design", a: 75, b: 95 },
];

const chartConfig = {
	a: {
		label: "Product A",
		color: "var(--chart-1)",
	},
	b: {
		label: "Product B",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export default function ChartRadarDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Product comparison</CardTitle>
				<CardDescription>Scores out of 100 by category</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-72 w-full">
					<RadarChart data={chartData} outerRadius="72%">
						<PolarGrid />
						<PolarAngleAxis dataKey="category" />
						<ChartTooltip content={<ChartTooltipContent indicator="line" />} />
						<ChartLegend content={<ChartLegendContent />} />
						<Radar
							dataKey="a"
							fill="var(--color-a)"
							fillOpacity={0.2}
							stroke="var(--color-a)"
							strokeWidth={2}
							animationDuration={500}
						/>
						<Radar
							dataKey="b"
							fill="var(--color-b)"
							fillOpacity={0.2}
							stroke="var(--color-b)"
							strokeWidth={2}
							animationDuration={500}
						/>
					</RadarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
