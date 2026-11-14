import {
	TextAlignCenterIcon,
	TextAlignEndIcon,
	TextAlignStartIcon,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDisabledItemDemo() {
	return (
		<ToggleGroup
			variant="outline"
			defaultValue={["left"]}
			aria-label="Text alignment"
		>
			<ToggleGroupItem value="left" aria-label="Align left">
				<TextAlignStartIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<TextAlignCenterIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right" disabled>
				<TextAlignEndIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
