"use client";

import * as React from "react";
import { InfoIcon, XIcon } from "lucide-react";

import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertDismissibleDemo() {
	const [open, setOpen] = React.useState(true);

	if (!open) {
		return (
			<Button size="sm" variant="outline" onClick={() => setOpen(true)}>
				Show alert
			</Button>
		);
	}

	return (
		<Alert
			className="max-w-lg has-[>svg]:grid-cols-[auto_1fr_auto]"
			variant="info"
		>
			<InfoIcon />
			<AlertTitle>New version available</AlertTitle>
			<AlertDescription>
				Refresh the page to get the latest changes.
			</AlertDescription>
			<AlertAction className="row-start-1 row-end-3 mt-0 self-center group-has-[>svg]/alert:col-start-3">
				<Button
					aria-label="Dismiss"
					size="icon-xs"
					variant="ghost"
					onClick={() => setOpen(false)}
				>
					<XIcon />
				</Button>
			</AlertAction>
		</Alert>
	);
}
