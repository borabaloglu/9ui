import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [1, 2, 3, 4, 5]

export default function CarouselLooped() {
	return (
		<div className="w-60 sm:w-80 lg:w-96">
			<Carousel options={{ loop: true }}>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<AspectRatio
								ratio={16 / 9}
								className="rounded-lg border bg-background"
							>
								<div className="flex size-full items-center justify-center text-xl font-semibold text-foreground">
									{slide}
								</div>
							</AspectRatio>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation>
					<CarouselPrevious />
					<CarouselNext />
				</CarouselNavigation>
			</Carousel>
		</div>
	)
}
