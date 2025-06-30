import { AlertTriangleIcon } from "lucide-react"

import {
	Alert,
	AlertAction,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertWithAction() {
	return (
		<Alert>
			<AlertIcon>
				<AlertTriangleIcon />
			</AlertIcon>
			<AlertContent>
				<AlertTitle>No Internet Connection</AlertTitle>
				<AlertDescription>
					Please check your internet connection and try again.
				</AlertDescription>
			</AlertContent>
			<AlertAction>
				<Button size="sm" variant="outline">
					Try Again
				</Button>
			</AlertAction>
		</Alert>
	)
}
