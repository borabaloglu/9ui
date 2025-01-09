import {
	AspectRatio,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNext,
	CarouselPrevious,
} from "9ui"

const slides = [1, 2, 3, 4, 5]

export default function CarouselMultiple() {
	return (
		<div className="w-60 sm:w-80 lg:w-96">
			<Carousel>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide} className="basis-1/3">
							<AspectRatio
								ratio={16 / 9}
								className="rounded-lg bg-bg border border-muted"
							>
								<div className="flex size-full items-center justify-center text-fg font-semibold text-xl">
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