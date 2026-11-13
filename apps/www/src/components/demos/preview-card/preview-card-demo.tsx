import { Badge } from "@/components/ui/badge";
import {
	PreviewCard,
	PreviewCardPopup,
	PreviewCardTrigger,
} from "@/components/ui/preview-card";

export default function PreviewCardDemo() {
	return (
		<PreviewCard>
			<p className="text-sm">
				Preview Card component from{" "}
				<PreviewCardTrigger
					href="https://www.9ui.dev"
					className="decoration-foreground/40 hover:decoration-foreground focus-visible:ring-ring/50 data-popup-open:decoration-foreground rounded-xs underline underline-offset-4 outline-none focus-visible:ring-[3px]"
				>
					9ui
				</PreviewCardTrigger>
				.
			</p>
			<PreviewCardPopup>
				<span className="font-medium">9ui.dev</span>
				<p className="text-muted-foreground text-pretty">
					Beautiful, customizable components that you can copy and paste into
					your projects.
				</p>
				<Badge variant="success" className="mt-1">
					<span className="size-1.5 rounded-full bg-current" />
					Active
				</Badge>
			</PreviewCardPopup>
		</PreviewCard>
	);
}
