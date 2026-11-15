"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Jan", revenue: 4500, expenses: 3200 },
	{ month: "Feb", revenue: 5200, expenses: 3800 },
	{ month: "Mar", revenue: 4800, expenses: 3500 },
	{ month: "Apr", revenue: 6100, expenses: 4200 },
];

const chartConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-1)",
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

const indicators = ["dot", "line", "dashed"] as const;

export default function ChartTooltipIndicatorDemo() {
	return (
		<div className="grid w-full gap-6 sm:grid-cols-3">
			{indicators.map((indicator) => (
				<div key={indicator} className="flex flex-col gap-2">
					<span className="text-muted-foreground text-xs">{indicator}</span>
					<ChartContainer config={chartConfig} className="h-56 w-full">
						<BarChart data={chartData} margin={{ top: 72 }}>
							<XAxis
								dataKey="month"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
							/>
							<ChartTooltip
								defaultIndex={1}
								position={{ y: 0 }}
								content={<ChartTooltipContent indicator={indicator} />}
							/>
							<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
							<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
						</BarChart>
					</ChartContainer>
				</div>
			))}
		</div>
	);
}
