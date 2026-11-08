import {
	TextAlignCenterIcon,
	TextAlignEndIcon,
	TextAlignStartIcon,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupDemo() {
	return (
		<ToggleGroup>
			<Toggle value="left">
				<TextAlignStartIcon />
			</Toggle>
			<Toggle value="center">
				<TextAlignCenterIcon />
			</Toggle>
			<Toggle value="right">
				<TextAlignEndIcon />
			</Toggle>
		</ToggleGroup>
	);
}
