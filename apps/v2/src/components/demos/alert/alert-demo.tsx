import { AlertTriangleIcon } from "lucide-react"

import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert"

export default function AlertDemo() {
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
		</Alert>
	)
}
