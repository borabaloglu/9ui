import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithLabel() {
	return (
		<div className="flex items-center gap-2">
			<Switch id="enable-notifications" />
			<Label htmlFor="enable-notifications">Enable notifications</Label>
		</div>
	)
}
