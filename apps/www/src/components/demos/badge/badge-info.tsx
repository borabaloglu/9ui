import { Badge, BadgeIndicator } from "@/components/ui/badge"

export default function BadgeInfo() {
	return (
		<div className="flex items-center gap-2">
			<Badge variant="info">Info</Badge>
			<Badge variant="outline">
				<BadgeIndicator variant="info" />
				Info
			</Badge>
		</div>
	)
}
