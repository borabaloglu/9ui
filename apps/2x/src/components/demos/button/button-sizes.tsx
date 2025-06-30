import { Button } from "@/components/ui/button"

export default function ButtonSizes() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
		</div>
	)
}
