import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerRichColorsDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			<Button onClick={() => toast.success("Success", { richColors: true })}>
				success
			</Button>
			<Button onClick={() => toast.error("Error", { richColors: true })}>
				error
			</Button>
			<Button onClick={() => toast.warning("Warning", { richColors: true })}>
				warning
			</Button>
			<Button onClick={() => toast.info("Info", { richColors: true })}>
				info
			</Button>
		</div>
	)
}
