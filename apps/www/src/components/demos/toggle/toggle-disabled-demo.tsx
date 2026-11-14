import { Toggle } from "@/components/ui/toggle";

export default function ToggleDisabledDemo() {
	return (
		<div className="flex items-center gap-2">
			<Toggle disabled>Disabled</Toggle>
			<Toggle variant="outline" disabled>
				Disabled
			</Toggle>
		</div>
	);
}
