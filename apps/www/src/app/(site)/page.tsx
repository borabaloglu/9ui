import { CardsGrid } from "@/components/cards-grid";
import { HeroActions } from "@/components/hero-actions";

const Home = () => (
	<div className="relative container space-y-6 py-4">
		<div className="mx-auto flex max-w-4xl flex-col items-center gap-4 py-16 text-center lg:py-24">
			<h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
				Components you <span className="whitespace-nowrap">copy, paste,</span>{" "}
				and make your own
			</h1>
			<p className="text-muted-foreground max-w-xl text-sm leading-relaxed text-pretty md:text-base">
				React components built with{" "}
				<a
					href="https://base-ui.com/"
					target="_blank"
					rel="noreferrer"
					className="text-primary underline underline-offset-2"
				>
					Base UI
				</a>{" "}
				and{" "}
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noreferrer"
					className="text-primary underline underline-offset-2"
				>
					Tailwind CSS
				</a>
				. The code lives in your project, so every detail is yours to change.
				Free and open source.
			</p>
			<HeroActions />
		</div>

		<CardsGrid />
	</div>
);

export default Home;
