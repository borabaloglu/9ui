"use client";

import { useId } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const plans = [
	{ value: "hobby", label: "Hobby", price: "Free", description: "1 project" },
	{
		value: "pro",
		label: "Pro",
		price: "$12",
		description: "Unlimited projects",
		popular: true,
	},
	{
		value: "team",
		label: "Team",
		price: "$29",
		description: "Shared workspaces",
	},
];

export function PlanCard() {
	const id = useId();

	return (
		<Card>
			<CardHeader>
				<CardTitle id={id}>Choose a plan</CardTitle>
				<CardDescription>Change or cancel at any time.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<RadioGroup
					aria-labelledby={id}
					defaultValue="pro"
					className="w-full items-stretch"
				>
					{plans.map((plan) => (
						<Label
							key={plan.value}
							className="has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start gap-3 rounded-lg border p-3"
						>
							<Radio value={plan.value} className="mt-0.5" />
							<div className="flex flex-1 flex-col gap-0.5">
								<span className="flex items-center gap-2">
									{plan.label}
									{plan.popular && <Badge size="sm">Popular</Badge>}
								</span>
								<span className="text-muted-foreground font-normal">
									{plan.description}
								</span>
							</div>
							<span className="tabular-nums">{plan.price}</span>
						</Label>
					))}
				</RadioGroup>
				<Button>Continue</Button>
			</CardContent>
		</Card>
	);
}
