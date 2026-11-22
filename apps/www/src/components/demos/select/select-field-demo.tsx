import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const items = [
	{ label: "Free", value: "free" },
	{ label: "Pro", value: "pro" },
	{ label: "Team", value: "team" },
];

export default function SelectFieldDemo() {
	return (
		<Field name="plan" className="w-52">
			<FieldLabel>Plan</FieldLabel>
			<Select items={items}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a plan" />
				</SelectTrigger>
				<SelectPopup>
					{items.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectPopup>
			</Select>
			<FieldDescription>You can change it later.</FieldDescription>
		</Field>
	);
}
