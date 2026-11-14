import {
	TextAlignCenterIcon,
	TextAlignEndIcon,
	TextAlignStartIcon,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDisabledDemo() {
	return (
		<ToggleGroup
			variant="outline"
			disabled
			defaultValue={["left"]}
			aria-label="Text alignment"
		>
			<ToggleGroupItem value="left" aria-label="Align left">
				<TextAlignStartIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<TextAlignCenterIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<TextAlignEndIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
