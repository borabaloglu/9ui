import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
	return (
		<div>
			<p>9ui is a component library for building modern web applications.</p>
			<Separator className="my-2.5" />
			<div className="flex gap-2.5">
				<p>Website</p>
				<Separator orientation="vertical" />
				<p>Documentation</p>
				<Separator orientation="vertical" />
				<p>Community</p>
			</div>
		</div>
	)
}
