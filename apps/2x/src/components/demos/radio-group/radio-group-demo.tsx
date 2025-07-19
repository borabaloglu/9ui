import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDemo() {
	return (
		<RadioGroup aria-labelledby="radio-group-plan">
			<div id="radio-group-plan" className="text-foreground font-medium">
				Select a plan
			</div>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="basic" value="basic" />
				Basic
			</Label>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="standard" value="standard" />
				Standard
			</Label>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="premium" value="premium" />
				Premium
			</Label>
		</RadioGroup>
	)
}
