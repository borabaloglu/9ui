"use client";

import * as React from "react";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

function Carousel({
	orientation = "horizontal",
	opts,
	setApi,
	plugins,
	className,
	children,
	...props
}: React.ComponentProps<"div"> & CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === "horizontal" ? "x" : "y",
		},
		plugins,
	);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);

	const onSelect = React.useCallback((api: CarouselApi) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev(prefersReducedMotion());
	}, [api]);

	const scrollNext = React.useCallback(() => {
		api?.scrollNext(prefersReducedMotion());
	}, [api]);

	const rtl = opts?.direction === "rtl";

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			const target = event.target as HTMLElement;
			if (
				target.isContentEditable ||
				target.closest("input, textarea, select")
			) {
				return;
			}

			const horizontal = orientation === "horizontal";
			const prevKey = horizontal
				? rtl
					? "ArrowRight"
					: "ArrowLeft"
				: "ArrowUp";
			const nextKey = horizontal
				? rtl
					? "ArrowLeft"
					: "ArrowRight"
				: "ArrowDown";

			if (event.key === prevKey) {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === nextKey) {
				event.preventDefault();
				scrollNext();
			}
		},
		[orientation, rtl, scrollPrev, scrollNext],
	);

	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);

	React.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api, onSelect]);

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api,
				opts,
				orientation,
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
			}}
		>
			<div
				onKeyDownCapture={handleKeyDown}
				className={cn("relative", className)}
				role="region"
				aria-roledescription="carousel"
				data-slot="carousel"
				data-orientation={orientation}
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	);
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div
			ref={carouselRef}
			className="group/carousel-content overflow-hidden"
			data-slot="carousel-content"
			data-orientation={orientation}
		>
			<div
				className={cn(
					"flex group-data-[orientation=horizontal]/carousel-content:-ms-4 group-data-[orientation=vertical]/carousel-content:-mt-4 group-data-[orientation=vertical]/carousel-content:flex-col",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

function CarouselItem({
	className,
	ref,
	...props
}: React.ComponentProps<"div">) {
	const { api, orientation } = useCarousel();
	const [node, setNode] = React.useState<HTMLDivElement | null>(null);
	const [label, setLabel] = React.useState<string>();

	const setRef = React.useCallback(
		(element: HTMLDivElement | null) => {
			setNode(element);
			if (typeof ref === "function") {
				ref(element);
			} else if (ref) {
				ref.current = element;
			}
		},
		[ref],
	);

	React.useEffect(() => {
		if (!api || !node) return;

		const updateLabel = () => {
			const slides = api.slideNodes();
			const index = slides.indexOf(node);
			setLabel(index === -1 ? undefined : `${index + 1} of ${slides.length}`);
		};

		updateLabel();
		api.on("reInit", updateLabel);

		return () => {
			api.off("reInit", updateLabel);
		};
	}, [api, node]);

	return (
		<div
			ref={setRef}
			role="group"
			aria-roledescription="slide"
			aria-label={label}
			data-slot="carousel-item"
			data-orientation={orientation}
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full data-[orientation=horizontal]:ps-4 data-[orientation=vertical]:pt-4",
				className,
			)}
			{...props}
		/>
	);
}

function CarouselPrevious({
	className,
	variant = "outline",
	size = "icon-sm",
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			data-slot="carousel-previous"
			variant={variant}
			size={size}
			data-orientation={orientation}
			className={cn(
				"absolute touch-manipulation rounded-full before:rounded-full data-[orientation=horizontal]:-start-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
				className,
			)}
			disabled={!canScrollPrev}
			focusableWhenDisabled
			onClick={scrollPrev}
			{...props}
		>
			<ChevronLeft className="rtl:group-data-[orientation=horizontal]/button:rotate-180" />
			<span className="sr-only">Previous slide</span>
		</Button>
	);
}

function CarouselNext({
	className,
	variant = "outline",
	size = "icon-sm",
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<Button
			data-slot="carousel-next"
			variant={variant}
			size={size}
			data-orientation={orientation}
			className={cn(
				"absolute touch-manipulation rounded-full before:rounded-full data-[orientation=horizontal]:-end-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
				className,
			)}
			disabled={!canScrollNext}
			focusableWhenDisabled
			onClick={scrollNext}
			{...props}
		>
			<ChevronRight className="rtl:group-data-[orientation=horizontal]/button:rotate-180" />
			<span className="sr-only">Next slide</span>
		</Button>
	);
}

export {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	useCarousel,
};
