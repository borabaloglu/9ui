import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDisabledDemo() {
	return (
		<div className="flex flex-col gap-3">
			<Label>
				<Switch disabled />
				Enable notifications
			</Label>
			<Label>
				<Switch disabled defaultChecked />
				Send usage data
			</Label>
		</div>
	);
}
