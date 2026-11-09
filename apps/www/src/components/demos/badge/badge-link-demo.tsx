import { Badge } from "@/components/ui/badge";

export default function BadgeLinkDemo() {
	return (
		<Badge variant="outline" render={<a href="https://9ui.dev" />}>
			9ui.dev
		</Badge>
	);
}
