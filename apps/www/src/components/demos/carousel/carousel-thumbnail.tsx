import { useState } from "react"
import Image from "next/image"
import {
	AspectRatio,
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "9ui"

const slides = [
	"https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
	"https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
	"https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
	"https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
	"https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
]

export default function CarouselThumbnail() {
	const [api, setApi] = useState<CarouselApi>()

	return (
		<div className="w-60 sm:w-80 lg:w-96">
			<Carousel setApi={setApi}>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<AspectRatio
								ratio={16 / 9}
								className="rounded-lg bg-bg border border-muted"
							>
								<Image
									src={slide}
									alt="Carousel slide"
									fill
									className="object-cover rounded-lg"
								/>
							</AspectRatio>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="flex gap-2 items-center justify-center mt-2">
					{slides.map((slide, index) => (
						<button
							key={slide}
							className="relative size-10"
							onClick={() => api?.scrollTo(index)}
						>
							<Image
								src={slide}
								alt="Carousel slide"
								fill
								className="object-cover rounded-md opacity-80 hover:opacity-100 transition-opacity duration-200"
							/>
						</button>
					))}
				</div>
			</Carousel>
		</div>
	)
}