import {
	BoldIcon,
	ItalicIcon,
	ListIcon,
	ListOrderedIcon,
	UnderlineIcon,
} from "lucide-react";

import {
	ToggleGroup,
	ToggleGroupItem,
	ToggleGroupSeparator,
} from "@/components/ui/toggle-group";

export default function ToggleGroupSeparatorDemo() {
	return (
		<ToggleGroup multiple aria-label="Text formatting">
			<ToggleGroupItem value="bold" aria-label="Bold">
				<BoldIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Italic">
				<ItalicIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Underline">
				<UnderlineIcon />
			</ToggleGroupItem>
			<ToggleGroupSeparator />
			<ToggleGroupItem value="bulleted-list" aria-label="Bulleted list">
				<ListIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="numbered-list" aria-label="Numbered list">
				<ListOrderedIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
