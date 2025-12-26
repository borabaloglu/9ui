import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithLabelDemo() {
	return (
		<Label className="flex items-center gap-2">
			<Switch />
			Enable notifications
		</Label>
	)
}
