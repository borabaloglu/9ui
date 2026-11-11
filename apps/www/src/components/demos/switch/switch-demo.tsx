import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
	return (
		<Label>
			<Switch defaultChecked />
			Enable notifications
		</Label>
	);
}
