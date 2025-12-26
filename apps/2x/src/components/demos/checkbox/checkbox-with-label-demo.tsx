import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxWithLabelDemo() {
	return (
		<Label className="flex items-center gap-2">
			<Checkbox id="accept" />
			Accept
		</Label>
	)
}
