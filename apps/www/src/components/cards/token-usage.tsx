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

const data = [
	{ month: "Jan", tokens: 38 },
	{ month: "Feb", tokens: 52 },
	{ month: "Mar", tokens: 31 },
	{ month: "Apr", tokens: 64 },
	{ month: "May", tokens: 47 },
	{ month: "Jun", tokens: 72 },
	{ month: "Jul", tokens: 29 },
	{ month: "Aug", tokens: 58 },
	{ month: "Sep", tokens: 88 },
	{ month: "Oct", tokens: 41 },
	{ month: "Nov", tokens: 76 },
	{ month: "Dec", tokens: 63 },
];

const config = {
	tokens: {
		label: "Tokens (M)",
		color: "var(--muted-foreground)",
	},
} satisfies ChartConfig;

export function TokenUsageCard() {
	return (
		<Card>
			<CardHeader>
				<CardDescription>Tokens spent this year</CardDescription>
				<CardTitle className="text-2xl tabular-nums">659M</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={config} className="h-56 w-full">
					<BarChart accessibilityLayer data={data}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							interval={0}
							tickFormatter={(value: string) => value.slice(0, 1)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Bar dataKey="tokens" fill="var(--muted-foreground)" radius={3} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
