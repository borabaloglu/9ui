import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

export default function ToggleGroupDemo() {
	return (
		<ToggleGroup>
			<Toggle value="left">
				<AlignLeftIcon />
			</Toggle>
			<Toggle value="center">
				<AlignCenterIcon />
			</Toggle>
			<Toggle value="right">
				<AlignRightIcon />
			</Toggle>
		</ToggleGroup>
	)
}
