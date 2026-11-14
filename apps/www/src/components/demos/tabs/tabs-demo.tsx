import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsDemo() {
	return (
		<Tabs className="w-full max-w-lg" defaultValue="summary">
			<TabsList>
				<TabsTab value="summary">Summary</TabsTab>
				<TabsTab value="analytics">Analytics</TabsTab>
				<TabsTab value="reports">Reports</TabsTab>
				<TabsTab value="activity">Activity</TabsTab>
			</TabsList>

			<TabsPanel value="summary">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Summary</CardTitle>
						<CardDescription>
							Revenue grew 12.5% to $48,295 this month, with active users up
							4.3% to 3,842 and new orders up 8.1%. Average session duration
							held at 4m 32s, slightly down from last month.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="analytics">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
						<CardDescription>
							Traffic peaked on Saturday with 90 sessions and was lowest on
							Monday at 40. Total sessions reached 450 this week, up 6%, with a
							consistent mid-week dip occurring every Wednesday.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="reports">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Reports</CardTitle>
						<CardDescription>
							Four reports completed this month: Q1 Financial, User Growth,
							Infrastructure Audit, and Marketing Performance. All have been
							reviewed and are available for download.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="activity">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Activity</CardTitle>
						<CardDescription>
							Alice submitted a report 2m ago, Bob updated settings 15m ago,
							Carol invited 3 members 1h ago, and David closed 5 tickets 3h ago.
							No critical issues are currently open.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
