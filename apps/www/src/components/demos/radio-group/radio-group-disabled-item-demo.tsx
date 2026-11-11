import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
	Radio,
	RadioGroup,
	RadioGroupLabel,
} from "@/components/ui/radio-group";

const methods = [
	{ value: "email", label: "Email" },
	{ value: "phone", label: "Phone call" },
	{ value: "sms", label: "Text message", disabled: true },
];

export default function RadioGroupDisabledItemDemo() {
	const id = useId();

	return (
		<RadioGroup aria-labelledby={id} defaultValue="email">
			<RadioGroupLabel id={id}>Contact me by</RadioGroupLabel>
			{methods.map((method) => (
				<Label key={method.value} className="font-normal">
					<Radio value={method.value} disabled={method.disabled} />
					{method.label}
				</Label>
			))}
		</RadioGroup>
	);
}
