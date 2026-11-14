"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const positions = [
	"top-left",
	"top-center",
	"top-right",
	"bottom-left",
	"bottom-center",
	"bottom-right",
] as const;

export default function SonnerPositionDemo() {
	return (
		<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
			{positions.map((position) => (
				<Button
					key={position}
					variant="outline"
					onClick={() =>
						toast("Event added to calendar", {
							description: "Wednesday, April 23 at 4:20 PM",
							position,
						})
					}
				>
					{position}
				</Button>
			))}
		</div>
	);
}
