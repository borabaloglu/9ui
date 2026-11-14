import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupMultipleDemo() {
	return (
		<ToggleGroup
			variant="outline"
			multiple
			defaultValue={["bold", "italic"]}
			aria-label="Text formatting"
		>
			<ToggleGroupItem value="bold" aria-label="Bold">
				<BoldIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Italic">
				<ItalicIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Underline">
				<UnderlineIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
