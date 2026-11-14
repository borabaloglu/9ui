import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupOutlineDemo() {
	return (
		<ToggleGroup
			variant="outline"
			defaultValue={["all"]}
			aria-label="Message filter"
		>
			<ToggleGroupItem value="all">All</ToggleGroupItem>
			<ToggleGroupItem value="unread">Unread</ToggleGroupItem>
			<ToggleGroupItem value="archived">Archived</ToggleGroupItem>
		</ToggleGroup>
	);
}
