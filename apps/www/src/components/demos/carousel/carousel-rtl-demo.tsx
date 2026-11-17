"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const translations = {
	en: { locale: "en", label: "Numbered slides" },
	ar: { locale: "ar-u-nu-arab", label: "شرائح مرقمة" },
	he: { locale: "he", label: "שקופיות ממוספרות" },
} satisfies Translations<Record<string, string>>;

const slides = [1, 2, 3, 4, 5];

export default function CarouselRtlDemo() {
	const { t } = useTranslation(translations);
	const numberFormat = new Intl.NumberFormat(t.locale);

	return (
		<div className="w-full max-w-sm px-12">
			<Carousel aria-label={t.label}>
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<AspectRatio ratio={1} className="bg-card rounded-xl border">
								<div className="text-foreground flex size-full items-center justify-center text-xl">
									{numberFormat.format(slide)}
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
