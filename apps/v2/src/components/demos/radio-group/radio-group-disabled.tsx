import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabled() {
	return (
		<RadioGroup disabled aria-labelledby="radio-group-notifications">
			<div
				id="radio-group-notifications"
				className="font-medium text-foreground"
			>
				Notifications
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="email" value="email" />
				<Label htmlFor="email">Email</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="sms" value="sms" />
				<Label htmlFor="sms">SMS</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem id="email-and-sms" value="email-and-sms" />
				<Label htmlFor="email-and-sms">Email & SMS</Label>
			</div>
		</RadioGroup>
	)
}
