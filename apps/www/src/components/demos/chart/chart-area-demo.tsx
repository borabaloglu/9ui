"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
	{ week: "W1", users: 1240 },
	{ week: "W2", users: 1380 },
	{ week: "W3", users: 1310 },
	{ week: "W4", users: 1560 },
	{ week: "W5", users: 1720 },
	{ week: "W6", users: 1690 },
	{ week: "W7", users: 1940 },
	{ week: "W8", users: 2180 },
	{ week: "W9", users: 2090 },
	{ week: "W10", users: 2360 },
	{ week: "W11", users: 2540 },
	{ week: "W12", users: 2810 },
];

const chartConfig = {
	users: {
		label: "Active users",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

export default function ChartAreaDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Active users</CardTitle>
				<CardDescription>Weekly, last 12 weeks</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<AreaChart data={chartData} margin={{ right: 12 }}>
						<defs>
							<linearGradient id="chart-area-users" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-users)"
									stopOpacity={0.4}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-users)"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="week"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={40}
							ticks={[0, 1000, 2000, 3000]}
							tickFormatter={(value) => `${value / 1000}k`}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Area
							dataKey="users"
							type="monotone"
							fill="url(#chart-area-users)"
							stroke="var(--color-users)"
							strokeWidth={2}
							animationDuration={500}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
