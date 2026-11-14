import { CircleAlertIcon } from "lucide-react";

import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertWithActionDemo() {
	return (
		<Alert className="max-w-lg">
			<CircleAlertIcon />
			<AlertTitle>Changes are not saved</AlertTitle>
			<AlertDescription>
				Your changes will be lost if you leave this page.
			</AlertDescription>
			<AlertAction>
				<Button size="xs" variant="outline">
					Save
				</Button>
			</AlertAction>
		</Alert>
	);
}
