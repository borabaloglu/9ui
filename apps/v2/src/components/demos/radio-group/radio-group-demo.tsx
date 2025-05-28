import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDemo() {
	return (
		<RadioGroup aria-labelledby="radio-group-plan">
			<div id="radio-group-plan" className="font-medium text-foreground">
				Select a plan
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="basic" value="basic" />
				<Label htmlFor="basic">Basic</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="standard" value="standard" />
				<Label htmlFor="standard">Standard</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="premium" value="premium" />
				<Label htmlFor="premium">Premium</Label>
			</div>
		</RadioGroup>
	)
}
