import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const formats = [
	{ value: "bold", label: "Bold", icon: BoldIcon },
	{ value: "italic", label: "Italic", icon: ItalicIcon },
	{ value: "underline", label: "Underline", icon: UnderlineIcon },
] as const;

export default function ToggleGroupTooltipDemo() {
	return (
		<TooltipProvider>
			<ToggleGroup variant="outline" multiple aria-label="Text formatting">
				{formats.map(({ value, label, icon: Icon }) => (
					<Tooltip key={value}>
						<TooltipTrigger
							render={<ToggleGroupItem value={value} aria-label={label} />}
						>
							<Icon />
						</TooltipTrigger>
						<TooltipPopup>{label}</TooltipPopup>
					</Tooltip>
				))}
			</ToggleGroup>
		</TooltipProvider>
	);
}
