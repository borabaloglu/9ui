"use client";

import {
	createPreviewCardHandle,
	PreviewCard,
	PreviewCardPopup,
	PreviewCardTrigger,
	PreviewCardViewport,
} from "@/components/ui/preview-card";

const LINKS = [
	{
		label: "React",
		href: "https://react.dev",
		description: "The library for web and native user interfaces.",
	},
	{
		label: "Base UI",
		href: "https://base-ui.com",
		description:
			"Unstyled React components for building accessible user interfaces. Made by the people behind Radix, Floating UI and Material UI.",
	},
	{
		label: "Tailwind CSS",
		href: "https://tailwindcss.com",
		description: "A utility-first CSS framework.",
	},
];

const linkPreviewCard = createPreviewCardHandle<(typeof LINKS)[number]>();

export default function PreviewCardDetachedTriggersDemo() {
	return (
		<p className="text-sm">
			Built with{" "}
			{LINKS.map((link, index) => (
				<span key={link.href}>
					{index > 0 && (index === LINKS.length - 1 ? " and " : ", ")}
					<PreviewCardTrigger
						handle={linkPreviewCard}
						payload={link}
						href={link.href}
						className="decoration-foreground/40 hover:decoration-foreground focus-visible:ring-ring/50 data-popup-open:decoration-foreground rounded-xs underline underline-offset-4 outline-none focus-visible:ring-[3px]"
					>
						{link.label}
					</PreviewCardTrigger>
				</span>
			))}
			.
			<PreviewCard handle={linkPreviewCard}>
				{({ payload }) => (
					<PreviewCardPopup>
						<PreviewCardViewport>
							<span className="font-medium">{payload?.label}</span>
							<p className="text-muted-foreground text-pretty">
								{payload?.description}
							</p>
						</PreviewCardViewport>
					</PreviewCardPopup>
				)}
			</PreviewCard>
		</p>
	);
}
