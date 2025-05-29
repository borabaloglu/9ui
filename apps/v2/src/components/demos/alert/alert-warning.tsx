import { AlertTriangleIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertWarning() {
	return (
		<Alert variant="warning">
			<AlertTriangleIcon />
			<AlertTitle>Your session is about to expire</AlertTitle>
			<AlertDescription>
				You will be logged out in 5 minutes. Please save your work and refresh
				the page.
			</AlertDescription>
		</Alert>
	)
}
