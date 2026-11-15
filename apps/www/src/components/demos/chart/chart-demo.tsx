"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const chartData = Array.from({ length: 90 }, (_, index) => ({
	date: new Date(Date.UTC(2024, 3, 1 + index)).toISOString().slice(0, 10),
	desktop: Math.round(
		260 + 110 * Math.sin(index / 6) + 60 * Math.sin(index / 2.3),
	),
	mobile: Math.round(
		190 + 80 * Math.cos(index / 7) + 50 * Math.sin(index / 1.7),
	),
}));

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

const ranges = [
	{ value: "90", label: "3 months" },
	{ value: "30", label: "30 days" },
	{ value: "7", label: "7 days" },
];

function formatDate(value: string) {
	return new Date(value).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	});
}

export default function ChartDemo() {
	const [range, setRange] = React.useState("90");
	const data = chartData.slice(-Number(range));

	return (
		<Card className="w-full">
			<CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-1">
					<CardTitle>Visitors</CardTitle>
					<CardDescription>Desktop and mobile</CardDescription>
				</div>
				<ToggleGroup
					variant="outline"
					size="sm"
					aria-label="Time range"
					value={[range]}
					onValueChange={(value) => {
						if (value[0]) {
							setRange(value[0]);
						}
					}}
				>
					{ranges.map((item) => (
						<ToggleGroupItem key={item.value} value={item.value}>
							{item.label}
						</ToggleGroupItem>
					))}
				</ToggleGroup>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<AreaChart data={data} margin={{ left: 12, right: 12 }}>
						<defs>
							<linearGradient
								id="chart-demo-desktop"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="var(--color-desktop)"
									stopOpacity={0.5}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-desktop)"
									stopOpacity={0.05}
								/>
							</linearGradient>
							<linearGradient
								id="chart-demo-mobile"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="var(--color-mobile)"
									stopOpacity={0.5}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-mobile)"
									stopOpacity={0.05}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={formatDate}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => formatDate(String(value))}
								/>
							}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Area
							dataKey="mobile"
							type="monotone"
							fill="url(#chart-demo-mobile)"
							stroke="var(--color-mobile)"
							strokeWidth={2}
							stackId="visitors"
							animationDuration={500}
						/>
						<Area
							dataKey="desktop"
							type="monotone"
							fill="url(#chart-demo-desktop)"
							stroke="var(--color-desktop)"
							strokeWidth={2}
							stackId="visitors"
							animationDuration={500}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
