"use client";

import { useEffect, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselDotsDemo() {
	const [api, setApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!api) return;

		const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

		onSelect();
		api.on("select", onSelect);

		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<div className="w-full max-w-sm px-12">
			<Carousel setApi={setApi}>
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
			<div className="mt-4 flex items-center justify-center gap-1">
				{slides.map((slide, index) => (
					<button
						key={slide}
						type="button"
						aria-label={`Go to slide ${slide}`}
						aria-current={selectedIndex === index || undefined}
						className="bg-muted-foreground/30 not-aria-current:hover:bg-muted-foreground/60 aria-current:bg-foreground focus-visible:ring-ring/50 ease-out-quint relative h-1.5 w-1.5 cursor-pointer rounded-full transition-[width,background-color] duration-300 outline-none after:absolute after:-inset-x-0.5 after:-inset-y-2 focus-visible:ring-3 aria-current:w-4 motion-reduce:transition-[background-color]"
						onClick={() => api?.scrollTo(index)}
					/>
				))}
			</div>
		</div>
	);
}
