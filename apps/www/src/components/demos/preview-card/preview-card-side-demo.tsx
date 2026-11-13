import { buttonVariants } from "@/components/ui/button";
import {
	PreviewCard,
	PreviewCardPopup,
	PreviewCardTrigger,
} from "@/components/ui/preview-card";

const sides = ["top", "right", "left", "bottom"] as const;

export default function PreviewCardSideDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{sides.map((side) => (
				<PreviewCard key={side}>
					<PreviewCardTrigger
						href="https://www.9ui.dev"
						className={buttonVariants({
							variant: "outline",
							className: "capitalize",
						})}
					>
						{side}
					</PreviewCardTrigger>
					<PreviewCardPopup side={side}>
						<span className="font-medium">9ui.dev</span>
						<p className="text-muted-foreground text-pretty">
							This preview card opens on the {side}.
						</p>
					</PreviewCardPopup>
				</PreviewCard>
			))}
		</div>
	);
}
