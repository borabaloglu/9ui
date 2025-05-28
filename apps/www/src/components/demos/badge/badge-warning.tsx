import { Badge, BadgeIndicator } from "@/components/ui/badge"

export default function BadgeWarning() {
	return (
		<div className="flex items-center gap-2">
			<Badge variant="warning">Warning</Badge>
			<Badge variant="outline">
				<BadgeIndicator variant="warning" />
				Warning
			</Badge>
		</div>
	)
}
