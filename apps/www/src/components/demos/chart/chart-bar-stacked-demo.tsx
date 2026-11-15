"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
	{ month: "Jan", free: 420, pro: 180, team: 60 },
	{ month: "Feb", free: 460, pro: 210, team: 75 },
	{ month: "Mar", free: 510, pro: 240, team: 90 },
	{ month: "Apr", free: 480, pro: 290, team: 120 },
	{ month: "May", free: 560, pro: 330, team: 140 },
	{ month: "Jun", free: 610, pro: 380, team: 170 },
	{ month: "Jul", free: 590, pro: 360, team: 160 },
	{ month: "Aug", free: 650, pro: 410, team: 190 },
	{ month: "Sep", free: 700, pro: 450, team: 210 },
	{ month: "Oct", free: 680, pro: 470, team: 230 },
	{ month: "Nov", free: 760, pro: 520, team: 260 },
	{ month: "Dec", free: 820, pro: 580, team: 300 },
];

const chartConfig = {
	free: {
		label: "Free",
		color: "var(--chart-1)",
	},
	pro: {
		label: "Pro",
		color: "var(--chart-2)",
	},
	team: {
		label: "Team",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig;

export default function ChartBarStackedDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Sign-ups by plan</CardTitle>
				<CardDescription>January to December 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<BarChart data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey="free"
							stackId="plan"
							fill="var(--color-free)"
							radius={[0, 0, 4, 4]}
						/>
						<Bar dataKey="pro" stackId="plan" fill="var(--color-pro)" />
						<Bar
							dataKey="team"
							stackId="plan"
							fill="var(--color-team)"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
