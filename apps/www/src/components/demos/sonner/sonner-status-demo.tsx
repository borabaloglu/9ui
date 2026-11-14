"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

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
] as const;

export default function SonnerStatusDemo() {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{statuses.map((status) => (
				<Button
					key={status.type}
					variant="outline"
					className="capitalize"
					onClick={() => {
						const id = toast[status.type](status.title, {
							description: status.description,
						});

						if (status.type === "loading") {
							setTimeout(() => toast.dismiss(id), 4000);
						}
					}}
				>
					{status.type}
				</Button>
			))}
		</div>
	);
}
