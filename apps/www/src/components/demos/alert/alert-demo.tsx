import { InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
	return (
		<Alert className="max-w-lg">
			<InfoIcon />
			<AlertTitle>View-only access</AlertTitle>
			<AlertDescription>
				You can browse this project, but you'll need permission from an owner to
				make edits or invite people.
			</AlertDescription>
		</Alert>
	);
}
