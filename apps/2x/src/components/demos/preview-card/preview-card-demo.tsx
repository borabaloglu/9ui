"use client"

import { Icons } from "@/components/icons"
import {
	PreviewCard,
	PreviewCardContent,
	PreviewCardTrigger,
} from "@/components/ui/preview-card"

export default function PreviewCardDemo() {
	return (
		<PreviewCard>
			<p>
				This is a preview card component from{" "}
				<PreviewCardTrigger className="cursor-pointer underline underline-offset-2">
					9ui
				</PreviewCardTrigger>
				.
			</p>
			<PreviewCardContent>
				<Icons.logo className="mx-auto w-10" />
				<p className="mt-4 text-sm">
					Beautiful, customizable components built with{" "}
					<a
						href="https://base-ui.com"
						className="underline underline-offset-2"
						target="_blank"
					>
						Base UI
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com"
						className="underline underline-offset-2"
						target="_blank"
					>
						Tailwind CSS
					</a>
					.
				</p>
				<div className="mt-4 flex flex-col gap-1 text-sm">
					<div className="flex items-center gap-2">
						<span className="text-muted-foreground">Creator:</span>
						<a
							href="https://x.com/borabalogluu"
							className="underline underline-offset-2"
							target="_blank"
						>
							Bora Baloglu
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-muted-foreground">Source code:</span>
						<a
							href="https://github.com/borabaloglu/9ui"
							className="underline underline-offset-2"
							target="_blank"
						>
							Github
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-muted-foreground">Website</span>
						<a
							href="https://www.9ui.dev"
							className="underline underline-offset-2"
							target="_blank"
						>
							9ui.dev
						</a>
					</div>
				</div>
			</PreviewCardContent>
		</PreviewCard>
	)
}
