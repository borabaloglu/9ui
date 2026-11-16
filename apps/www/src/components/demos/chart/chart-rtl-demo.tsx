"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
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

const translations = {
	en: {
		title: "Revenue and Expenses",
		description: "January to June 2026",
		revenue: "Revenue",
		expenses: "Expenses",
		january: "January",
		february: "February",
		march: "March",
		april: "April",
		may: "May",
		june: "June",
	},
	ar: {
		title: "الإيرادات والمصروفات",
		description: "من يناير إلى يونيو 2026",
		revenue: "الإيرادات",
		expenses: "المصروفات",
		january: "يناير",
		february: "فبراير",
		march: "مارس",
		april: "أبريل",
		may: "مايو",
		june: "يونيو",
	},
	he: {
		title: "הכנסות והוצאות",
		description: "ינואר עד יוני 2026",
		revenue: "הכנסות",
		expenses: "הוצאות",
		january: "ינואר",
		february: "פברואר",
		march: "מרץ",
		april: "אפריל",
		may: "מאי",
		june: "יוני",
	},
} satisfies Translations<Record<string, string>>;

const chartData = [
	{ month: "january", revenue: 4500, expenses: 3200 },
	{ month: "february", revenue: 5200, expenses: 3800 },
	{ month: "march", revenue: 4800, expenses: 3500 },
	{ month: "april", revenue: 6100, expenses: 4200 },
	{ month: "may", revenue: 5800, expenses: 4000 },
	{ month: "june", revenue: 7200, expenses: 4800 },
] as const;

export default function ChartRtlDemo() {
	const { dir, t } = useTranslation(translations);

	const chartConfig = {
		revenue: {
			label: t.revenue,
			color: "var(--chart-1)",
		},
		expenses: {
			label: t.expenses,
			color: "var(--chart-2)",
		},
	} satisfies ChartConfig;

	const data = chartData.map((item) => ({ ...item, month: t[item.month] }));

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>{t.title}</CardTitle>
				<CardDescription>{t.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-64 w-full">
					<BarChart data={data}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							reversed={dir === "rtl"}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={40}
							orientation={dir === "rtl" ? "right" : "left"}
							tickFormatter={(value) => `$${value / 1000}k`}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
						<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
