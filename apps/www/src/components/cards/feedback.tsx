"use client";

import {
	AngryIcon,
	FrownIcon,
	LaughIcon,
	MehIcon,
	SmileIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const moods = [
	{
		value: "terrible",
		label: "Terrible",
		icon: AngryIcon,
		color: "text-destructive",
	},
	{ value: "bad", label: "Bad", icon: FrownIcon, color: "text-warning" },
	{
		value: "okay",
		label: "Okay",
		icon: MehIcon,
		color: "text-muted-foreground",
	},
	{ value: "good", label: "Good", icon: SmileIcon, color: "text-info" },
	{ value: "great", label: "Great", icon: LaughIcon, color: "text-success" },
];

export function FeedbackCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Send feedback</CardTitle>
				<CardDescription>How was your experience today?</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<ToggleGroup
					variant="outline"
					size="lg"
					defaultValue={["good"]}
					aria-label="Rating"
					className="w-full"
				>
					{moods.map(({ value, label, icon: Icon, color }) => (
						<ToggleGroupItem
							key={value}
							value={value}
							aria-label={label}
							className="flex-1"
						>
							<Icon className={color} />
						</ToggleGroupItem>
					))}
				</ToggleGroup>
				<Textarea
					aria-label="Feedback"
					placeholder="Tell us what worked and what didn't."
					className="min-h-48 resize-none"
				/>
				<Button>Send feedback</Button>
			</CardContent>
		</Card>
	);
}
