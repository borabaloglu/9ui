import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchSizeDemo() {
	return (
		<Label className="text-xs">
			<Switch size="sm" defaultChecked />
			Small
		</Label>
	);
}
