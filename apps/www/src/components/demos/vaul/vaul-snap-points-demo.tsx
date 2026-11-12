"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Vaul,
	VaulContent,
	VaulDescription,
	VaulHeader,
	VaulPanel,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

import { cn } from "@/lib/utils";

const SNAP_POINTS = ["180px", "360px", 1];

const TRACKS = [
	"Morning Light",
	"Paper Boats",
	"Slow Tide",
	"Glass Garden",
	"Night Ferry",
	"Low Sun",
	"Open Window",
	"Quiet Engine",
	"Salt Air",
	"Last Platform",
	"Soft Static",
	"Far Shore",
];

export default function VaulSnapPointsDemo() {
	const [snapPoint, setSnapPoint] = useState<number | string | null>(
		SNAP_POINTS[0],
	);

	return (
		<Vaul
			snapPoints={SNAP_POINTS}
			activeSnapPoint={snapPoint}
			setActiveSnapPoint={setSnapPoint}
		>
			<VaulTrigger render={<Button variant="outline" />}>Up next</VaulTrigger>
			<VaulContent className="h-full max-h-[97%]">
				<VaulHeader>
					<VaulTitle>Up next</VaulTitle>
					<VaulDescription>
						Pull the drawer up to see the whole queue.
					</VaulDescription>
				</VaulHeader>
				<VaulPanel
					className={cn(
						"flex flex-col",
						snapPoint !== 1 && "overflow-y-hidden",
					)}
				>
					{TRACKS.map((track, index) => (
						<div
							key={track}
							className="flex items-center gap-3 border-b py-3 last:border-b-0"
						>
							<span className="text-muted-foreground w-5 tabular-nums">
								{index + 1}
							</span>
							<span className="font-medium">{track}</span>
						</div>
					))}
				</VaulPanel>
			</VaulContent>
		</Vaul>
	);
}
