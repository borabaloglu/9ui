"use client";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

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

export default function ToastPromiseDemo() {
	const toast = useToast();

	return (
		<Button
			variant="outline"
			onClick={() =>
				toast
					.promise(addEvent(), {
						loading: "Adding event to calendar…",
						success: (title: string) => ({
							title,
							description: "Wednesday, April 23 at 4:20 PM",
						}),
						error: (error: Error) => ({
							title: error.message,
							description: "The calendar is not available. Try again.",
						}),
					})
					.catch(() => {})
			}
		>
			Add event
		</Button>
	);
}
