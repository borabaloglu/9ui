"use client";

import { Button } from "@/components/ui/button";
import { ToastProvider } from "@/components/ui/toast";

import { createToastManager } from "@/hooks/use-toast";

const toastManager = createToastManager();

export default function ToastCloseButtonDemo() {
	return (
		<ToastProvider showCloseButton toastManager={toastManager}>
			<Button
				variant="outline"
				onClick={() =>
					toastManager.add({
						title: "Event added to calendar",
						description: "Wednesday, April 23 at 4:20 PM",
					})
				}
			>
				Show toast
			</Button>
		</ToastProvider>
	);
}
