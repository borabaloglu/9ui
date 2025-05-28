import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonLoading() {
	return (
		<Button className="gap-2" disabled>
			<div className="animate-spin">
				<Loader2Icon size={16} />
			</div>
			Loading
		</Button>
	)
}
