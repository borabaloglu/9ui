import { PinIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleOutlineDemo() {
	return (
		<Toggle aria-label="Pin" variant="outline">
			<PinIcon />
		</Toggle>
	)
}
