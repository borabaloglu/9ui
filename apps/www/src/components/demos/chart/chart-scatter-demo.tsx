"use client";

import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from "recharts";

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
	{ spend: 400, signups: 38 },
	{ spend: 650, signups: 54 },
	{ spend: 900, signups: 61 },
	{ spend: 1200, signups: 96 },
	{ spend: 1500, signups: 88 },
	{ spend: 1800, signups: 132 },
	{ spend: 2100, signups: 121 },
	{ spend: 2600, signups: 168 },
	{ spend: 3000, signups: 174 },
	{ spend: 3400, signups: 215 },
];

const chartConfig = {
	signups: {
		label: "Sign-ups",
		color: "var(--chart-1)",
	},
	spend: {
		label: "Ad spend",
	},
} satisfies ChartConfig;

export default function ChartScatterDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Ad spend and sign-ups</CardTitle>
				<CardDescription>Per campaign, 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<ScatterChart margin={{ right: 12 }}>
						<CartesianGrid />
						<XAxis
							type="number"
							dataKey="spend"
							name="spend"
							domain={[0, 4000]}
							ticks={[0, 1000, 2000, 3000, 4000]}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => `$${value / 1000}k`}
						/>
						<YAxis
							type="number"
							dataKey="signups"
							name="signups"
							domain={[0, 250]}
							ticks={[0, 50, 100, 150, 200, 250]}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={40}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel hideIndicator />}
						/>
						<Scatter data={chartData} fill="var(--color-signups)" />
					</ScatterChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
