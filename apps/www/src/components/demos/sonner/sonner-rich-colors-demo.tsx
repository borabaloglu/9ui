"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const statuses = [
	{ type: "success", title: "Changes saved" },
	{ type: "error", title: "Couldn't save changes" },
	{ type: "warning", title: "Storage almost full" },
	{ type: "info", title: "Update available" },
] as const;

export default function SonnerRichColorsDemo() {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{statuses.map((status) => (
				<Button
					key={status.type}
					variant="outline"
					className="capitalize"
					onClick={() => toast[status.type](status.title, { richColors: true })}
				>
					{status.type}
				</Button>
			))}
		</div>
	);
}
