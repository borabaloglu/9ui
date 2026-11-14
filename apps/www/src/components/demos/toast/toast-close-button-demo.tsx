"use client";

import { Toast } from "@base-ui/react/toast";

import { Button } from "@/components/ui/button";
import { ToastProvider } from "@/components/ui/toast";

const toastManager = Toast.createToastManager();

export default function ToastCloseButtonDemo() {
	return (
		<ToastProvider closeButton toastManager={toastManager}>
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
