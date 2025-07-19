import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabled() {
	return (
		<RadioGroup disabled aria-labelledby="radio-group-notifications">
			<div
				id="radio-group-notifications"
				className="text-foreground font-medium"
			>
				Notifications
			</div>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="email" value="email" />
				Email
			</Label>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="sms" value="sms" />
				SMS
			</Label>
			<Label className="flex items-center gap-2">
				<RadioGroupItem id="email-and-sms" value="email-and-sms" />
				Email & SMS
			</Label>
		</RadioGroup>
	)
}
