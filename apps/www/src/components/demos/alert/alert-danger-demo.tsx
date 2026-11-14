import { CircleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDangerDemo() {
	return (
		<Alert className="max-w-lg" variant="danger">
			<CircleAlertIcon />
			<AlertTitle>Changes couldn't be saved</AlertTitle>
			<AlertDescription>
				We hit a problem while saving your work. Try again, or copy your changes
				somewhere safe before leaving this page.
			</AlertDescription>
		</Alert>
	);
}
