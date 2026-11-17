"use client";

import { Pie, PieChart, Label as PieLabel } from "recharts";

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
	{ source: "search", visitors: 4200, fill: "var(--color-search)" },
	{ source: "direct", visitors: 2900, fill: "var(--color-direct)" },
	{ source: "social", visitors: 1800, fill: "var(--color-social)" },
	{ source: "referral", visitors: 1100, fill: "var(--color-referral)" },
	{ source: "email", visitors: 600, fill: "var(--color-email)" },
];

const totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0);

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	search: {
		label: "Search",
		color: "var(--chart-1)",
	},
	direct: {
		label: "Direct",
		color: "var(--chart-2)",
	},
	social: {
		label: "Social",
		color: "var(--chart-3)",
	},
	referral: {
		label: "Referral",
		color: "var(--chart-4)",
	},
	email: {
		label: "Email",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

export default function ChartPieDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Traffic sources</CardTitle>
				<CardDescription>Visitors, last 30 days</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-72 w-full">
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent showLabel={false} nameKey="source" />
							}
						/>
						<ChartLegend content={<ChartLegendContent nameKey="source" />} />
						<Pie
							data={chartData}
							dataKey="visitors"
							nameKey="source"
							innerRadius={64}
							paddingAngle={2}
							cornerRadius={4}
							animationDuration={500}
						>
							<PieLabel
								content={({ viewBox }) => {
									if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
										return null;
									}

									return (
										<text
											x={viewBox.cx}
											y={viewBox.cy}
											textAnchor="middle"
											dominantBaseline="middle"
										>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy ?? 0) - 6}
												className="fill-foreground text-2xl font-semibold"
											>
												{totalVisitors.toLocaleString()}
											</tspan>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy ?? 0) + 16}
												className="fill-muted-foreground"
											>
												Visitors
											</tspan>
										</text>
									);
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
