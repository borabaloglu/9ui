import { FilesIcon, InboxIcon, SettingsIcon, UsersIcon } from "lucide-react";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsWithIconDemo() {
	return (
		<Tabs className="w-full max-w-lg" defaultValue="inbox">
			<TabsList>
				<TabsTab value="inbox">
					<InboxIcon />
					Inbox
				</TabsTab>
				<TabsTab value="contacts">
					<UsersIcon />
					Contacts
				</TabsTab>
				<TabsTab value="files">
					<FilesIcon />
					Files
				</TabsTab>
				<TabsTab value="settings">
					<SettingsIcon />
					Settings
				</TabsTab>
			</TabsList>

			<TabsPanel value="inbox">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Inbox</CardTitle>
						<CardDescription>
							You have 4 unread messages. Alice sent a project update, Bob
							replied to your proposal, and 2 automated alerts arrived from the
							monitoring system overnight.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="contacts">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Contacts</CardTitle>
						<CardDescription>
							Your workspace has 38 contacts, with 12 added this month. Import
							contacts via CSV or sync them directly from any connected CRM
							integration at any time.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="files">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Files</CardTitle>
						<CardDescription>
							14.2 GB of your 50 GB storage is in use. Recent uploads include
							the Q2 financial report and three design mockups shared by the
							product team yesterday.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="settings">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Settings</CardTitle>
						<CardDescription>
							Configure notification preferences, integrations, and retention
							policies. Changes take effect instantly across all devices that
							are linked to your account.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
