import { TriangleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWarningDemo() {
	return (
		<Alert className="max-w-lg" variant="warning">
			<TriangleAlertIcon />
			<AlertTitle>Scheduled maintenance</AlertTitle>
			<AlertDescription>
				Some features may be unavailable for a short window. Save your work and
				expect brief interruptions.
			</AlertDescription>
		</Alert>
	);
}
