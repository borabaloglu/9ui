"use client";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

const statuses = [
	{
		type: "success",
		title: "Changes saved",
		description: "Your profile is up to date.",
	},
	{
		type: "error",
		title: "Couldn't save changes",
		description: "Check your connection and try again.",
	},
	{
		type: "warning",
		title: "Storage almost full",
		description: "You have used 90% of your storage.",
	},
	{
		type: "info",
		title: "Update available",
		description: "Restart the app to install it.",
	},
	{
		type: "loading",
		title: "Saving changes…",
		description: "This can take a few seconds.",
	},
];

export default function ToastStatusDemo() {
	const toast = useToast();

	return (
		<div className="flex flex-wrap justify-center gap-2">
			{statuses.map((status) => (
				<Button
					key={status.type}
					variant="outline"
					className="capitalize"
					onClick={() => toast.add(status)}
				>
					{status.type}
				</Button>
			))}
		</div>
	);
}
