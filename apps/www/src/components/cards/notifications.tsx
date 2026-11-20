"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const settings = [
	{
		title: "Mentions",
		description: "When someone mentions you in a comment.",
		defaultChecked: true,
	},
	{
		title: "Releases",
		description: "When a new version is published.",
		defaultChecked: true,
	},
	{
		title: "Weekly digest",
		description: "A summary of activity every Monday.",
		defaultChecked: false,
	},
	{
		title: "Product news",
		description: "Tips, offers and announcements.",
		defaultChecked: false,
	},
];

export function NotificationsCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose what you want to hear about.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{settings.map((setting) => (
					<Label
						key={setting.title}
						className="w-full items-center justify-between gap-4"
					>
						<span className="flex flex-col gap-0.5">
							{setting.title}
							<span className="text-muted-foreground font-normal">
								{setting.description}
							</span>
						</span>
						<Switch defaultChecked={setting.defaultChecked} />
					</Label>
				))}
			</CardContent>
		</Card>
	);
}
