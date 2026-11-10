import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LabelWrappingDemo() {
	return (
		<Label>
			<Checkbox />
			Accept terms and conditions
		</Label>
	);
}
