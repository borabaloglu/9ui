import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxWithLabel() {
	return (
		<div className="flex items-center gap-2">
			<Checkbox id="accept" />
			<Label htmlFor="accept">Accept</Label>
		</div>
	)
}
