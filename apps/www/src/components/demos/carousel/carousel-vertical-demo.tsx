import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselVerticalDemo() {
	return (
		<div className="w-full max-w-xs py-12">
			<Carousel aria-label="Vertical slides" orientation="vertical">
				<CarouselContent className="h-48">
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<div className="bg-card text-foreground flex h-full items-center justify-center rounded-xl border text-xl">
								{slide}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
