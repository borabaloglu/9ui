import { Badge, BadgeIndicator } from "@/components/ui/badge"

export default function BadgeSuccess() {
	return (
		<div className="flex items-center gap-2">
			<Badge variant="success">Success</Badge>
			<Badge variant="outline">
				<BadgeIndicator variant="success" />
				Success
			</Badge>
		</div>
	)
}
