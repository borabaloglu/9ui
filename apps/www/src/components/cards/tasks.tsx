"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const tasks = [
	"Review pull request",
	"Write release notes",
	"Update the changelog",
	"Publish version 2.0",
	"Announce on social",
];

export function TasksCard() {
	const [done, setDone] = useState(tasks.slice(0, 2));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Today</CardTitle>
				<CardDescription>Release checklist</CardDescription>
				<CardAction>
					<Badge variant="outline" className="tabular-nums">
						{done.length} of {tasks.length}
					</Badge>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{tasks.map((task) => (
					<Label
						key={task}
						className="has-data-checked:text-muted-foreground font-normal has-data-checked:line-through"
					>
						<Checkbox
							checked={done.includes(task)}
							onCheckedChange={(checked) =>
								setDone(
									checked
										? [...done, task]
										: done.filter((item) => item !== task),
								)
							}
						/>
						{task}
					</Label>
				))}
			</CardContent>
		</Card>
	);
}
