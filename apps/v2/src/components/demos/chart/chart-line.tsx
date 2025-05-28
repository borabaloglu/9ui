"use client"

import { CartesianGrid, Legend, Line, LineChart, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Chart,
	ChartConfig,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ month: "Jan", users: 100, activeUsers: 80, newUsers: 20 },
	{ month: "Feb", users: 120, activeUsers: 90, newUsers: 30 },
	{ month: "Mar", users: 150, activeUsers: 100, newUsers: 50 },
	{ month: "Apr", users: 200, activeUsers: 140, newUsers: 60 },
	{ month: "May", users: 250, activeUsers: 180, newUsers: 70 },
	{ month: "Jun", users: 300, activeUsers: 220, newUsers: 80 },
]

const chartConfig = {
	users: {
		label: "Total Users",
		color: "var(--chart-1)",
	},
	activeUsers: {
		label: "Active Users",
		color: "var(--chart-2)",
	},
	newUsers: {
		label: "New Users",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig

export default function ChartLineDemo() {
	const totalUsers = chartData[chartData.length - 1].users
	const totalActiveUsers = chartData[chartData.length - 1].activeUsers
	const userGrowth =
		((chartData[5].users - chartData[0].users) / chartData[0].users) * 100
	const activeUsersRate = (totalActiveUsers / totalUsers) * 100

	return (
		<Card className="flex w-full flex-col">
			<CardHeader className="items-center">
				<CardTitle>User Growth</CardTitle>
				<CardDescription>User metrics for first half of 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<Chart config={chartConfig} className="max-h-[300px]">
					<LineChart
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Legend />
						<Line
							type="monotone"
							dataKey="users"
							stroke={chartConfig.users.color}
							strokeWidth={2}
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="activeUsers"
							stroke={chartConfig.activeUsers.color}
							strokeWidth={2}
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="newUsers"
							stroke={chartConfig.newUsers.color}
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</Chart>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm leading-none">
				<div className="flex w-full justify-between font-medium">
					<span>Total Users:</span>
					<span>{totalUsers.toLocaleString()}</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>Active Users Rate:</span>
					<span>{activeUsersRate.toFixed(1)}%</span>
				</div>
				<div className="flex w-full justify-between text-muted-foreground">
					<span>6-Month Growth:</span>
					<span>{userGrowth.toFixed(1)}%</span>
				</div>
			</CardFooter>
		</Card>
	)
}
