"use client";

import { MonitorIcon, SmartphoneIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
	{ month: "Jan", desktop: 2400, mobile: 1800 },
	{ month: "Feb", desktop: 2900, mobile: 2100 },
	{ month: "Mar", desktop: 4200, mobile: 2600 },
	{ month: "Apr", desktop: 3500, mobile: 3200 },
	{ month: "May", desktop: 2800, mobile: 3700 },
	{ month: "Jun", desktop: 3900, mobile: 4100 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
		icon: MonitorIcon,
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
		icon: SmartphoneIcon,
	},
} satisfies ChartConfig;

export default function ChartLegendDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Visitors</CardTitle>
				<CardDescription>
					Desktop and mobile, January to June 2024
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<LineChart data={chartData} margin={{ left: 12, right: 12 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
						<Line
							dataKey="desktop"
							type="monotone"
							stroke="var(--color-desktop)"
							strokeWidth={2}
							dot={false}
							animationDuration={500}
						/>
						<Line
							dataKey="mobile"
							type="monotone"
							stroke="var(--color-mobile)"
							strokeWidth={2}
							dot={false}
							animationDuration={500}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
