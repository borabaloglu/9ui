import {
	PreviewCard,
	PreviewCardPopup,
	PreviewCardTrigger,
} from "@/components/ui/preview-card";

export default function PreviewCardArrowDemo() {
	return (
		<PreviewCard>
			<p className="text-sm">
				Built on top of{" "}
				<PreviewCardTrigger
					href="https://base-ui.com"
					className="decoration-foreground/40 hover:decoration-foreground focus-visible:ring-ring/50 data-popup-open:decoration-foreground rounded-xs underline underline-offset-4 outline-none focus-visible:ring-[3px]"
				>
					Base UI
				</PreviewCardTrigger>
				.
			</p>
			<PreviewCardPopup arrow>
				<span className="font-medium">base-ui.com</span>
				<p className="text-muted-foreground text-pretty">
					Unstyled React components for building accessible user interfaces.
				</p>
			</PreviewCardPopup>
		</PreviewCard>
	);
}
