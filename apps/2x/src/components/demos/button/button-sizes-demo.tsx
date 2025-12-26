import { Button } from "@/components/ui/button"

export default function ButtonSizesDemo() {
	return (
		<div className="flex flex-row items-center gap-2">
			<Button size="sm">Small</Button>
			<Button>Default</Button>
			<Button size="lg">Large</Button>
		</div>
	)
}
