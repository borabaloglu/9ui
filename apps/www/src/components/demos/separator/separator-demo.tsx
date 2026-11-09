import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
	return (
		<div className="flex max-w-sm flex-col gap-3 text-sm">
			<div className="flex flex-col gap-1.5">
				<div className="leading-none font-medium">9ui</div>
				<div className="text-muted-foreground">
					Copy-Paste Components That Adapt to Your Design
				</div>
			</div>
			<Separator />
			<div>
				Built with Base UI and Tailwind CSS. Easy to customize. Free and open
				source.
			</div>
		</div>
	);
}
