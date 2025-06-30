import { CircleCheckIcon } from "lucide-react"

import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert"

export default function AlertSuccess() {
	return (
		<Alert variant="success">
			<AlertIcon>
				<CircleCheckIcon />
			</AlertIcon>
			<AlertContent>
				<AlertTitle>Your account has been created</AlertTitle>
				<AlertDescription>
					You can now sign in with your new account credentials.
				</AlertDescription>
			</AlertContent>
		</Alert>
	)
}
