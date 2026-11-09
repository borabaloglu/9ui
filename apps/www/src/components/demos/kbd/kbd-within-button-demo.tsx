import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdWithinButtonDemo() {
	return (
		<Button variant="outline">
			Open command palette
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>K</Kbd>
			</KbdGroup>
		</Button>
	);
}
