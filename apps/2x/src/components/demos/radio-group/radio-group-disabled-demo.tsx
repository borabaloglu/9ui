import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabledDemo() {
	return (
		<RadioGroup aria-labelledby="radio-group-notifications" disabled>
			<div
				id="radio-group-notifications"
				className="text-foreground font-medium"
			>
				Notifications
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="email" value="email" />
				<Label htmlFor="email">Email</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="sms" value="sms" />
				<Label htmlFor="sms">SMS</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="email-and-sms" value="email-and-sms" />
				<Label htmlFor="email-and-sms">Email & SMS</Label>
			</div>
		</RadioGroup>
	)
}
