import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
	return (
		<div className="flex w-full max-w-64 flex-col gap-2">
			<Label htmlFor="label-email">Email</Label>
			<Input id="label-email" type="email" placeholder="you@example.com" />
		</div>
	);
}
