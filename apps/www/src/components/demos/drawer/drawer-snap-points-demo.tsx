"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerDescription,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

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

export default function DrawerSnapPointsDemo() {
	const [snapPoint, setSnapPoint] = useState<number | string | null>(
		SNAP_POINTS[0],
	);

	return (
		<Drawer
			snapPoints={SNAP_POINTS}
			snapPoint={snapPoint}
			onSnapPointChange={setSnapPoint}
		>
			<DrawerTrigger render={<Button variant="outline" />}>
				Up next
			</DrawerTrigger>
			<DrawerPopup className="h-full max-h-[97%]">
				<DrawerHeader>
					<DrawerTitle>Up next</DrawerTitle>
					<DrawerDescription>
						Pull the drawer up to see the whole queue.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel
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
				</DrawerPanel>
			</DrawerPopup>
		</Drawer>
	);
}
