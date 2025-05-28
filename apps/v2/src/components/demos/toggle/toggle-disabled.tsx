import { PinIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabled() {
	return (
		<Toggle aria-label="Pin" disabled>
			<PinIcon />
		</Toggle>
	)
}
