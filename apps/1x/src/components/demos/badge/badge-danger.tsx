import { Badge, BadgeIndicator } from "@/components/ui/badge"

export default function BadgeDanger() {
	return (
		<div className="flex items-center gap-2">
			<Badge variant="danger">Danger</Badge>
			<Badge variant="outline">
				<BadgeIndicator variant="danger" />
				Danger
			</Badge>
		</div>
	)
}
