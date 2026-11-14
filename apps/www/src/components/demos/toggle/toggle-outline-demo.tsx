import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleOutlineDemo() {
	return (
		<div className="flex items-center gap-2">
			<Toggle variant="outline" aria-label="Italic">
				<ItalicIcon />
			</Toggle>
			<Toggle variant="outline">
				<ItalicIcon />
				Italic
			</Toggle>
		</div>
	);
}
