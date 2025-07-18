"use client"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"

export default function ToastRichColorsDemo() {
	const toast = useToast()

	return (
		<div className="grid grid-cols-2 gap-2">
			<Button
				onClick={() =>
					toast.add({
						title: "Success",
						type: "success",
					})
				}
			>
				success
			</Button>
			<Button
				onClick={() =>
					toast.add({
						title: "Error",
						type: "error",
					})
				}
			>
				error
			</Button>
			<Button
				onClick={() =>
					toast.add({
						title: "Warning",
						type: "warning",
					})
				}
			>
				warning
			</Button>
			<Button
				onClick={() =>
					toast.add({
						title: "Info",
						type: "info",
					})
				}
			>
				info
			</Button>
		</div>
	)
}
