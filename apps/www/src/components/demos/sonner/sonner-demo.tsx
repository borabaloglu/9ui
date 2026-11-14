"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerDemo() {
	return (
		<Button
			variant="outline"
			onClick={() =>
				toast("Event added to calendar", {
					description: "Wednesday, April 23 at 4:20 PM",
				})
			}
		>
			Show toast
		</Button>
	);
}
