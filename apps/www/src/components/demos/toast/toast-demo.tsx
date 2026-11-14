"use client";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

export default function ToastDemo() {
	const toast = useToast();

	return (
		<Button
			variant="outline"
			onClick={() =>
				toast.add({
					title: "Event added to calendar",
					description: "Wednesday, April 23 at 4:20 PM",
				})
			}
		>
			Show toast
		</Button>
	);
}
