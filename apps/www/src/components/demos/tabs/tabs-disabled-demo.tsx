import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsDisabledDemo() {
	return (
		<Tabs className="w-full max-w-lg" defaultValue="workspace">
			<TabsList>
				<TabsTab value="workspace">Workspace</TabsTab>
				<TabsTab value="analytics">Analytics</TabsTab>
				<TabsTab value="team">Team</TabsTab>
				<TabsTab value="billing" disabled>
					Billing
				</TabsTab>
			</TabsList>

			<TabsPanel value="workspace">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Workspace</CardTitle>
						<CardDescription>
							Manage your workspace name, slug, and default settings for all
							members. Changes apply across the workspace and take effect
							immediately after saving.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="analytics">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
						<CardDescription>
							View page views, unique visitors, and session trends for your
							workspace over time. Data is updated hourly and retained for 90
							days on the current plan.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="team">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Team</CardTitle>
						<CardDescription>
							Invite members, assign roles, and manage access permissions across
							your workspace. Owners can transfer ownership or remove any member
							from the workspace at any time.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
