import { useId } from "react";

import {
	Field,
	FieldDescription,
	FieldItem,
	FieldLabel,
} from "@/components/ui/field";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";

const plans = [
	{
		value: "basic",
		label: "Basic",
		description: "Perfect for individuals and small teams.",
	},
	{
		value: "standard",
		label: "Standard",
		description: "Great for growing businesses and teams.",
	},
	{
		value: "premium",
		label: "Premium",
		description: "Advanced features for enterprise teams.",
	},
];

export default function RadioGroupDescriptionDemo() {
	const id = useId();

	return (
		<Field name="plan" className="w-fit max-w-xs">
			<RadioGroup aria-labelledby={id} defaultValue="standard">
				<RadioGroupLabel id={id}>Plan</RadioGroupLabel>
				{plans.map((plan) => (
					<FieldItem
						key={plan.value}
						className="grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1"
					>
						<Radio value={plan.value} />
						<FieldLabel className="font-normal">{plan.label}</FieldLabel>
						<FieldDescription className="col-start-2">
							{plan.description}
						</FieldDescription>
					</FieldItem>
				))}
			</RadioGroup>
		</Field>
	);
}
