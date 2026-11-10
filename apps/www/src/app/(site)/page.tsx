import { CardsGrid } from "@/components/cards-grid";
import { HeroActions } from "@/components/hero-actions";
import { HeroBlueprint } from "@/components/hero-blueprint";

const Home = () => (
	<div className="relative container mx-auto space-y-6 py-4">
		<div className="grid items-center gap-12 py-10 lg:grid-cols-2 lg:gap-8 lg:py-12">
			<div className="flex max-w-xl flex-col items-start gap-4">
				<h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
					Components you <span className="font-mono">copy, paste,</span> and
					make your own
				</h1>
				<p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
					React components built with{" "}
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
					</a>
					. The code lives in your project, so every detail is yours to change.
					Free and open source.
				</p>
				<HeroActions />
			</div>

			<div className="flex justify-center lg:justify-end">
				<HeroBlueprint />
			</div>
		</div>

		<CardsGrid />
	</div>
);

export default Home;
