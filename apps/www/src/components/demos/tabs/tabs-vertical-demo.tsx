import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsVerticalDemo() {
	return (
		<Tabs
			className="w-full max-w-lg"
			defaultValue="general"
			orientation="vertical"
		>
			<TabsList>
				<TabsTab value="general">General</TabsTab>
				<TabsTab value="security">Security</TabsTab>
				<TabsTab value="notifications">Notifications</TabsTab>
				<TabsTab value="appearance">Appearance</TabsTab>
			</TabsList>

			<TabsPanel value="general">
				<Card size="sm">
					<CardHeader>
						<CardTitle>General</CardTitle>
						<CardDescription>
							Update your display name, email, and preferred language. Email
							changes require re-verification to take effect.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="security">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Security</CardTitle>
						<CardDescription>
							Manage your password, 2FA, and active sessions. Enabling
							two-factor authentication is strongly recommended.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="notifications">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Notifications</CardTitle>
						<CardDescription>
							Choose which events trigger notifications. Disable marketing
							emails without affecting security alerts or account updates.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="appearance">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Appearance</CardTitle>
						<CardDescription>
							Toggle light or dark mode and pick your accent color. Font size
							and density settings are saved separately per device.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
