import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";

const plans = [
	{ value: "basic", label: "Basic" },
	{ value: "standard", label: "Standard" },
	{ value: "premium", label: "Premium" },
];

export default function RadioGroupDemo() {
	const id = useId();

	return (
		<RadioGroup aria-labelledby={id} defaultValue="standard">
			<RadioGroupLabel id={id}>Plan</RadioGroupLabel>
			{plans.map((plan) => (
				<Label key={plan.value} className="font-normal">
					<Radio value={plan.value} />
					{plan.label}
				</Label>
			))}
		</RadioGroup>
	);
}
