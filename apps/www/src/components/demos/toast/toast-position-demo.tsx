"use client";

import { Button } from "@/components/ui/button";
import { type ToastPosition, ToastProvider } from "@/components/ui/toast";

import { createToastManager } from "@/hooks/use-toast";

const positions: ToastPosition[] = [
	"top-left",
	"top-center",
	"top-right",
	"bottom-left",
	"bottom-center",
	"bottom-right",
];

const toastManagers = Object.fromEntries(
	positions.map((position) => [position, createToastManager()]),
);

export default function ToastPositionDemo() {
	return (
		<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
			{positions.map((position) => (
				<ToastProvider
					key={position}
					position={position}
					toastManager={toastManagers[position]}
				>
					<Button
						variant="outline"
						onClick={() =>
							toastManagers[position].add({
								title: "Event added to calendar",
								description: "Wednesday, April 23 at 4:20 PM",
							})
						}
					>
						{position}
					</Button>
				</ToastProvider>
			))}
		</div>
	);
}
