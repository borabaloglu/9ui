"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
} from "@/components/ui/progress";

const usage = [
	{ label: "Storage", value: 76, text: "38 of 50 GB" },
	{ label: "Bandwidth", value: 24, text: "120 of 500 GB" },
	{ label: "Team seats", value: 90, text: "9 of 10" },
];

export function UsageCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Usage</CardTitle>
				<CardDescription>Your plan renews on Dec 1.</CardDescription>
				<CardAction>
					<Badge variant="secondary">Pro</Badge>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{usage.map((item) => (
					<Progress key={item.label} value={item.value}>
						<ProgressLabel>{item.label}</ProgressLabel>
						<ProgressValue>{() => item.text}</ProgressValue>
						<ProgressTrack>
							<ProgressIndicator />
						</ProgressTrack>
					</Progress>
				))}
				<Button variant="outline">Upgrade plan</Button>
			</CardContent>
		</Card>
	);
}
