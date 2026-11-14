import { InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertInfoDemo() {
	return (
		<Alert className="max-w-lg" variant="info">
			<InfoIcon />
			<AlertTitle>Browser update available</AlertTitle>
			<AlertDescription>
				A new version of your browser is available. Updating your browser
				ensures better security and performance.
			</AlertDescription>
		</Alert>
	);
}
