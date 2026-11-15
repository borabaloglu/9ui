"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

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
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ page: "Home", views: 4820 },
	{ page: "Pricing", views: 3140 },
	{ page: "Docs", views: 2760 },
	{ page: "Blog", views: 1980 },
	{ page: "Changelog", views: 1120 },
];

const chartConfig = {
	views: {
		label: "Views",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

export default function ChartBarHorizontalDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Top pages</CardTitle>
				<CardDescription>Page views, last 30 days</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<BarChart data={chartData} layout="vertical" margin={{ right: 40 }}>
						<XAxis type="number" dataKey="views" hide />
						<YAxis
							type="category"
							dataKey="page"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={80}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="views" fill="var(--color-views)" radius={4}>
							<LabelList
								dataKey="views"
								position="right"
								offset={8}
								className="fill-foreground"
								formatter={(value) => Number(value).toLocaleString()}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
