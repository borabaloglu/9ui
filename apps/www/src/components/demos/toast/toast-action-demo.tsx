"use client";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

export default function ToastActionDemo() {
	const toast = useToast();

	return (
		<Button
			variant="outline"
			onClick={() => {
				const id = toast.add({
					title: "Event added to calendar",
					description: "Wednesday, April 23 at 4:20 PM",
					actionProps: {
						children: "Undo",
						onClick: () => {
							toast.close(id);
							toast.add({
								title: "Event removed from calendar",
								type: "success",
							});
						},
					},
				});
			}}
		>
			Add event
		</Button>
	);
}
