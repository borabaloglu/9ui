import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelInvalidDemo() {
	return (
		<div className="flex w-full max-w-64 flex-col gap-6">
			<Label>
				<Checkbox aria-invalid />
				Accept terms and conditions
			</Label>
			<div className="flex flex-col gap-2">
				<Label htmlFor="label-invalid-email">Email</Label>
				<Input
					id="label-invalid-email"
					type="email"
					defaultValue="you@example"
					aria-invalid
				/>
			</div>
		</div>
	);
}
