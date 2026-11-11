import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
	CheckboxGroup,
	CheckboxGroupLabel,
} from "@/components/ui/checkbox-group";
import { Label } from "@/components/ui/label";

const channels = [
	{ value: "email", label: "Email" },
	{ value: "push", label: "Push notifications" },
	{ value: "sms", label: "Text messages", disabled: true },
];

export default function CheckboxGroupDisabledItemDemo() {
	const id = useId();

	return (
		<CheckboxGroup aria-labelledby={id} defaultValue={["email"]}>
			<CheckboxGroupLabel id={id}>Notify me by</CheckboxGroupLabel>
			{channels.map((channel) => (
				<Label key={channel.value} className="font-normal">
					<Checkbox value={channel.value} disabled={channel.disabled} />
					{channel.label}
				</Label>
			))}
		</CheckboxGroup>
	);
}
