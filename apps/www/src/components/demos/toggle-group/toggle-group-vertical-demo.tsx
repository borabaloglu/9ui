import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupVerticalDemo() {
	return (
		<ToggleGroup
			variant="outline"
			orientation="vertical"
			defaultValue={["top"]}
			aria-label="Vertical alignment"
		>
			<ToggleGroupItem value="top">Top</ToggleGroupItem>
			<ToggleGroupItem value="middle">Middle</ToggleGroupItem>
			<ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
		</ToggleGroup>
	);
}
