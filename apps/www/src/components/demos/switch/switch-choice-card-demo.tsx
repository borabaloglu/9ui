import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchChoiceCardDemo() {
	return (
		<Field name="notifications" className="max-w-sm">
			<FieldLabel className="border-border data-filled:border-ring/50 data-filled:bg-accent/50 w-full items-start justify-between gap-4 rounded-xl border p-4 transition-colors duration-150 ease-out">
				<div className="flex flex-col gap-1">
					Enable notifications
					<FieldDescription className="font-normal">
						Get notified when focus mode turns on or off.
					</FieldDescription>
				</div>
				<Switch className="mt-0.5" />
			</FieldLabel>
		</Field>
	);
}
