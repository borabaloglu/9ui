"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Jan", desktop: 186, mobile: 80 },
	{ month: "Feb", desktop: 305, mobile: 200 },
	{ month: "Mar", desktop: 237, mobile: 120 },
	{ month: "Apr", desktop: 173, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "Jun", desktop: 214, mobile: 140 },
	{ month: "Jul", desktop: 252, mobile: 165 },
	{ month: "Aug", desktop: 298, mobile: 210 },
	{ month: "Sep", desktop: 271, mobile: 180 },
	{ month: "Oct", desktop: 326, mobile: 235 },
	{ month: "Nov", desktop: 301, mobile: 220 },
	{ month: "Dec", desktop: 348, mobile: 260 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export default function ChartStartTooltipDemo() {
	return (
		<ChartContainer config={chartConfig} className="h-56 w-full">
			<BarChart data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
				<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
			</BarChart>
		</ChartContainer>
	);
}
