import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

export default function ToggleGroupMultiple() {
	return (
		<ToggleGroup toggleMultiple>
			<Toggle value="bold">
				<BoldIcon />
			</Toggle>
			<Toggle value="italic">
				<ItalicIcon />
			</Toggle>
			<Toggle value="underline">
				<UnderlineIcon />
			</Toggle>
		</ToggleGroup>
	)
}
