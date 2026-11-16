import {
	TextAlignCenterIcon,
	TextAlignEndIcon,
	TextAlignStartIcon,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupSpacingDemo() {
	return (
		<ToggleGroup
			variant="outline"
			spacing={1}
			defaultValue={["start"]}
			aria-label="Text alignment"
		>
			<ToggleGroupItem value="start" aria-label="Align start">
				<TextAlignStartIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<TextAlignCenterIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="end" aria-label="Align end">
				<TextAlignEndIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
