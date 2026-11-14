"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerCloseButtonDemo() {
	return (
		<Button
			variant="outline"
			onClick={() =>
				toast("Event added to calendar", {
					description: "Wednesday, April 23 at 4:20 PM",
					closeButton: true,
				})
			}
		>
			Show toast
		</Button>
	);
}
