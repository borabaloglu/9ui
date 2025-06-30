import { CircleCheckIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertSuccess() {
	return (
		<Alert variant="success">
			<CircleCheckIcon />
			<AlertTitle>Your account has been created</AlertTitle>
			<AlertDescription>
				You can now sign in with your new account credentials.
			</AlertDescription>
		</Alert>
	)
}
