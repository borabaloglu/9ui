import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function LabelDisabledDemo() {
	return (
		<div className="flex w-full max-w-64 flex-col gap-6">
			<Label>
				<Switch disabled />
				Enable notifications
			</Label>
			<div className="flex flex-col gap-2">
				<Label htmlFor="label-disabled-email">Email</Label>
				<Input
					id="label-disabled-email"
					type="email"
					placeholder="you@example.com"
					disabled
				/>
			</div>
		</div>
	);
}
