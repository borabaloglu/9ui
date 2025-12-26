import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [1, 2, 3, 4, 5]

export default function CarouselVerticalDemo() {
	return (
		<div className="w-60 py-8 sm:w-80 lg:w-96">
			<Carousel orientation="vertical" opts={{ loop: true }}>
				<CarouselContent className="aspect-video h-[-webkit-fill-available] w-full p-4">
					{slides.map((slide) => (
						<CarouselItem key={slide} className="basis-full">
							<AspectRatio ratio={16 / 9} className="bg-card rounded-lg border">
								<div className="text-foreground flex size-full items-center justify-center font-medium">
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
