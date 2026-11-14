import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselLoopedDemo() {
	return (
		<div className="w-full max-w-sm px-12">
			<Carousel opts={{ loop: true }}>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<AspectRatio ratio={1} className="bg-card rounded-xl border">
								<div className="text-foreground flex size-full items-center justify-center text-xl">
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
	);
}
