"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerActionDemo() {
	return (
		<Button
			variant="outline"
			onClick={() =>
				toast("Event added to calendar", {
					description: "Wednesday, April 23 at 4:20 PM",
					action: {
						label: "Undo",
						onClick: () => toast.success("Event removed from calendar"),
					},
				})
			}
		>
			Add event
		</Button>
	);
}
