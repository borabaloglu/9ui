import { Badge } from "@/components/ui/badge";

export default function BadgeButtonDemo() {
	return (
		<Badge variant="secondary" render={<button type="button" />}>
			Clickable
		</Badge>
	);
}
