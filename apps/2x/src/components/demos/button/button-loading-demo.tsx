import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonLoadingDemo() {
	return (
		<Button className="gap-2" disabled>
			<div className="animate-spin">
				<Loader2Icon />
			</div>
			Loading
		</Button>
	)
}
