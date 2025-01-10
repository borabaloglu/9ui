"use client"

import Monicon from "@monicon/react"
import { PreviewCard, PreviewCardContent, PreviewCardTrigger } from "9ui"

import Logo from "@/components/logo"

export default function PreviewCardDemo() {
	return (
		<PreviewCard>
			<p className="text-balance text-fg max-w-80">
				This is a preview card component from{" "}
				<PreviewCardTrigger className="underline underline-offset-2 cursor-pointer">
					9ui
				</PreviewCardTrigger>
				.
			</p>
			<PreviewCardContent className="text-sm max-w-80">
				<Logo className="w-10 mx-auto" />
				<p className="mt-2">
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
				<div className="flex flex-col gap-2 mt-2 text-sm">
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-fg">
							<Monicon name="ri:user-3-fill" size={14} />
							Creator:
						</span>
						<a
							href="https://x.com/borabalogluu"
							className="underline underline-offset-2"
							target="_blank"
						>
							Bora Baloglu
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-fg">
							<Monicon name="ri:github-fill" size={14} />
							Source code:
						</span>
						<a
							href="https://github.com/borabaloglu/9ui"
							className="underline underline-offset-2"
							target="_blank"
						>
							Github
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-fg">
							<Monicon name="ri:global-fill" size={14} />
							Website
						</span>
						<a
							href="https://9ui.vercel.app"
							className="underline underline-offset-2"
							target="_blank"
						>
							9ui.vercel.app
						</a>
					</div>
				</div>
			</PreviewCardContent>
		</PreviewCard>
	)
}