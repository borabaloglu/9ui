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

export default function RadioGroupChoiceCardDemo() {
	const id = useId();

	return (
		<Field name="plan" className="max-w-sm">
			<RadioGroup
				aria-labelledby={id}
				defaultValue="standard"
				className="w-full items-stretch any-pointer-coarse:gap-3"
			>
				<RadioGroupLabel id={id}>Plan</RadioGroupLabel>
				{plans.map((plan) => (
					<FieldItem key={plan.value}>
						<FieldLabel className="border-border has-data-checked:border-ring/50 has-data-checked:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
							<Radio value={plan.value} className="mt-0.5" />
							<div className="flex flex-col gap-1">
								{plan.label}
								<FieldDescription className="font-normal">
									{plan.description}
								</FieldDescription>
							</div>
						</FieldLabel>
					</FieldItem>
				))}
			</RadioGroup>
		</Field>
	);
}
