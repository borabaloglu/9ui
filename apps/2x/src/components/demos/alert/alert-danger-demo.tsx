import { XCircleIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDangerDemo() {
	return (
		<Alert variant="danger">
			<XCircleIcon />
			<AlertTitle>Your subscription has been canceled</AlertTitle>
			<AlertDescription>
				Your access to premium features will end in 30 days. You can reactivate
				your subscription anytime.
			</AlertDescription>
		</Alert>
	)
}
