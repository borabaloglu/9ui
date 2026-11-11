import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function CheckboxChoiceCardDemo() {
	return (
		<Field name="notifications" className="max-w-sm">
			<FieldLabel className="border-border data-filled:border-ring/50 data-filled:bg-accent/50 w-full items-start rounded-xl border p-4 transition-colors duration-150 ease-out">
				<Checkbox className="mt-0.5" />
				<div className="flex flex-col gap-1">
					Enable notifications
					<FieldDescription className="font-normal">
						Get notified when focus mode turns on or off.
					</FieldDescription>
				</div>
			</FieldLabel>
		</Field>
	);
}
