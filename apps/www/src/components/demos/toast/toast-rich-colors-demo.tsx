"use client";

import { Button } from "@/components/ui/button";
import { ToastProvider } from "@/components/ui/toast";

import { createToastManager } from "@/hooks/use-toast";

const toastManager = createToastManager();

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
];

export default function ToastRichColorsDemo() {
	return (
		<ToastProvider richColors toastManager={toastManager}>
			<div className="flex flex-wrap justify-center gap-2">
				{statuses.map((status) => (
					<Button
						key={status.type}
						variant="outline"
						className="capitalize"
						onClick={() => toastManager.add(status)}
					>
						{status.type}
					</Button>
				))}
			</div>
		</ToastProvider>
	);
}
