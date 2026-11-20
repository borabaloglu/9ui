"use client";

import { useEffect, useState } from "react";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Progress,
	ProgressCircularIndicator,
	ProgressCircularTrack,
} from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const lengths = ["5", "15", "25"];

const formatTime = (seconds: number) =>
	`${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

export function FocusTimerCard() {
	const [minutes, setMinutes] = useState("5");
	const [elapsed, setElapsed] = useState(0);
	const [running, setRunning] = useState(false);

	const total = Number(minutes) * 60;
	const remaining = total - elapsed;

	useEffect(() => {
		if (!running) return;
		const interval = setInterval(() => setElapsed((value) => value + 1), 1000);
		return () => clearInterval(interval);
	}, [running]);

	useEffect(() => {
		if (remaining <= 0) setRunning(false);
	}, [remaining]);

	const reset = () => {
		setRunning(false);
		setElapsed(0);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Focus session</CardTitle>
				<CardDescription>Stay on one thing for a while.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-4">
				<Progress
					className="grid w-auto grid-cols-1 place-items-center"
					value={Math.max(remaining, 0)}
					max={total}
					aria-label="Time remaining"
				>
					<ProgressCircularTrack
						size={128}
						strokeWidth={8}
						className="col-start-1 row-start-1"
					>
						<ProgressCircularIndicator />
					</ProgressCircularTrack>
					<span className="col-start-1 row-start-1 text-2xl font-semibold tabular-nums">
						{formatTime(Math.max(remaining, 0))}
					</span>
				</Progress>
				<ToggleGroup
					variant="outline"
					size="sm"
					value={[minutes]}
					onValueChange={([value]) => {
						if (!value) return;
						setMinutes(value);
						reset();
					}}
					aria-label="Session length"
				>
					{lengths.map((length) => (
						<ToggleGroupItem key={length} value={length}>
							{length} min
						</ToggleGroupItem>
					))}
				</ToggleGroup>
				<div className="flex w-full gap-2">
					<Button
						className="flex-1"
						disabled={remaining <= 0}
						onClick={() => setRunning(!running)}
					>
						{running ? <PauseIcon /> : <PlayIcon />}
						{running ? "Pause" : "Start"}
					</Button>
					<Button
						variant="outline"
						size="icon"
						aria-label="Reset"
						onClick={reset}
					>
						<RotateCcwIcon />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
