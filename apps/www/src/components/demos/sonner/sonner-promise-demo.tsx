"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

function addEvent() {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve("Event added to calendar");
			} else {
				reject(new Error("Couldn't add the event"));
			}
		}, 2000);
	});
}

export default function SonnerPromiseDemo() {
	return (
		<Button
			variant="outline"
			onClick={() =>
				toast.promise(addEvent(), {
					loading: "Adding event to calendar…",
					success: (title) => ({
						message: title,
						description: "Wednesday, April 23 at 4:20 PM",
					}),
					error: (error: Error) => ({
						message: error.message,
						description: "The calendar is not available. Try again.",
					}),
				})
			}
		>
			Add event
		</Button>
	);
}
