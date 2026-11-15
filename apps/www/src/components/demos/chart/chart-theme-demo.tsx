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
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Jan", signups: 320 },
	{ month: "Feb", signups: 410 },
	{ month: "Mar", signups: 380 },
	{ month: "Apr", signups: 520 },
	{ month: "May", signups: 610 },
	{ month: "Jun", signups: 740 },
	{ month: "Jul", signups: 690 },
	{ month: "Aug", signups: 780 },
	{ month: "Sep", signups: 830 },
	{ month: "Oct", signups: 790 },
	{ month: "Nov", signups: 910 },
	{ month: "Dec", signups: 1040 },
];

const chartConfig = {
	signups: {
		label: "Sign-ups",
		theme: {
			light: "oklch(50.8% 0.118 165.612)",
			dark: "oklch(76.5% 0.177 163.223)",
		},
	},
} satisfies ChartConfig;

export default function ChartThemeDemo() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Sign-ups</CardTitle>
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
						<Bar dataKey="signups" fill="var(--color-signups)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
