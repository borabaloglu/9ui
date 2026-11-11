import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDisabledDemo() {
	return (
		<div className="flex flex-col gap-3">
			<Label>
				<Checkbox disabled />
				Accept terms and conditions
			</Label>
			<Label>
				<Checkbox disabled defaultChecked />
				Send usage data
			</Label>
		</div>
	);
}
