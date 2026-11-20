"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const spent = 184;

export function SpendingLimitCard() {
	const [limit, setLimit] = useState(400);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Spending limit</CardTitle>
				<CardDescription>Cap what this workspace can spend.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">
				<div className="flex items-baseline justify-between">
					<p className="text-3xl font-semibold tabular-nums">${limit}</p>
					<p className="text-muted-foreground tabular-nums">
						${spent} spent · {Math.round((spent / limit) * 100)}%
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<Slider
						value={limit}
						onValueChange={(value) => setLimit(value as number)}
						min={200}
						max={1000}
						step={50}
						aria-label="Monthly limit"
					/>
					<div className="text-muted-foreground flex justify-between text-xs tabular-nums">
						<span>$200</span>
						<span>$1,000</span>
					</div>
				</div>
				<Label className="w-full justify-between">
					<span className="flex flex-col gap-0.5">
						Pause at the limit
						<span className="text-muted-foreground font-normal">
							Requests stop until next month.
						</span>
					</span>
					<Switch defaultChecked />
				</Label>
			</CardContent>
			<CardFooter className="justify-between">
				<span className="text-muted-foreground tabular-nums">
					Alert at ${Math.round(limit * 0.8)}
				</span>
				<Button size="sm">Save limit</Button>
			</CardFooter>
		</Card>
	);
}
