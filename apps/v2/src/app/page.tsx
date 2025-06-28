import Link from "next/link"
import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react"

import { FlickeringGrid } from "@/components/background"
import Examples from "@/components/examples"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Home = () => (
	<div className="border-border/30 relative container mx-auto space-y-16 border-x border-dashed">
		<div className="relative">
			<FlickeringGrid
				className="absolute inset-0 z-0 size-full overflow-hidden rounded-b-[2rem]"
				squareSize={4}
				gridGap={4}
				color="#6B7280"
				maxOpacity={0.5}
				flickerChance={0.1}
			/>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_bottom_center,oklch(from_var(--background)_l_c_h_/_0.3),var(--background))]" />

			<div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 py-40">
				<Badge variant="secondary">
					✨ Now supports Tailwind 4 and React 19
				</Badge>
				<h1 className="text-center text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
					<span className="font-mono">Copy-Paste</span> Components That Adapt to
					Your Design
				</h1>
				<p className="text-muted-foreground text-center text-sm leading-relaxed md:text-base">
					Built with{" "}
					<a
						href="https://base-ui.com/"
						className="text-primary underline underline-offset-2"
					>
						Base UI
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com/"
						className="text-primary underline underline-offset-2"
					>
						Tailwind CSS
					</a>{" "}
					. Easy to customize. Free and open source.
				</p>
				<div className="mt-4 flex items-center gap-4">
					<Button
						className="gap-2"
						render={
							<Link href="/docs">
								<BookOpenIcon className="size-3.5" />
								Get Started
							</Link>
						}
					/>

					<Button
						variant="outline"
						className="group gap-2"
						render={
							<Link href="/docs/components">
								Components
								<ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
							</Link>
						}
					/>
				</div>
			</div>
		</div>
		<Examples />
	</div>
)

export default Home
