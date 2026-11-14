import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

const textStyles = [
	{ label: "Body", value: "body" },
	{ label: "Heading 1", value: "heading-1" },
	{ label: "Heading 2", value: "heading-2" },
	{ label: "Heading 3", value: "heading-3" },
];

export default function ToolbarDemo() {
	return (
		<Toolbar aria-label="Text formatting">
			<Select items={textStyles} defaultValue="body">
				<ToolbarButton
					render={<SelectTrigger className="w-32" />}
					aria-label="Text style"
				>
					<SelectValue />
				</ToolbarButton>
				<SelectPopup>
					{textStyles.map(({ value, label }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectPopup>
			</Select>

			<ToolbarSeparator />

			<ToggleGroup variant="outline" multiple aria-label="Formatting">
				<ToolbarButton
					render={<ToggleGroupItem value="bold" />}
					aria-label="Bold"
				>
					<BoldIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<ToggleGroupItem value="italic" />}
					aria-label="Italic"
				>
					<ItalicIcon />
				</ToolbarButton>
				<ToolbarButton
					render={<ToggleGroupItem value="underline" />}
					aria-label="Underline"
				>
					<UnderlineIcon />
				</ToolbarButton>
			</ToggleGroup>
		</Toolbar>
	);
}
