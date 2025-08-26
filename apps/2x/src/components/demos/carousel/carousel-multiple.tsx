import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [1, 2, 3, 4, 5]

export default function CarouselMultiple() {
	return (
		<div className="w-60 sm:w-80 lg:w-96">
			<Carousel>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide} className="basis-1/2">
							<AspectRatio
								ratio={16 / 10}
								className="bg-card rounded-lg border"
							>
								<div className="text-foreground flex size-full items-center justify-center text-xl font-semibold">
									{slide}
								</div>
							</AspectRatio>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
