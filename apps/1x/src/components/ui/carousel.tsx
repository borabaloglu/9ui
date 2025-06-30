"use client"

import * as React from "react"
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel"
import useEmblaCarousel, {
	EmblaViewportRefType,
	UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

type CarouselRef = EmblaViewportRefType
type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = EmblaOptionsType
type CarouselPlugins = EmblaPluginType[]
type CarouselOrientation = "horizontal" | "vertical"

type CarouselContextType = {
	carouselRef: CarouselRef
	carouselApi: CarouselApi
	orientation: CarouselOrientation
	scrollNext: () => void
	scrollPrev: () => void
	canScrollNext: boolean
	canScrollPrev: boolean
}

const CarouselContext = React.createContext<CarouselContextType | null>(null)

const useCarousel = () => {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error("useCarousel must be used within a CarouselProvider")
	}

	return context
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: Omit<CarouselOptions, "axis">
	plugins?: CarouselPlugins
	orientation?: CarouselOrientation
	setApi?: (api: CarouselApi) => void
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
	(
		{
			children,
			className,
			options,
			plugins,
			orientation = "horizontal",
			setApi,
			...props
		},
		ref
	) => {
		const [carouselRef, carouselApi] = useEmblaCarousel(
			{
				...options,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins
		)
		const [canScrollNext, setCanScrollNext] = React.useState(false)
		const [canScrollPrev, setCanScrollPrev] = React.useState(false)

		React.useEffect(() => {
			if (setApi) {
				setApi(carouselApi)
			}
		}, [carouselApi, setApi])

		React.useEffect(() => {
			if (!carouselApi) return

			setCanScrollNext(carouselApi.canScrollNext())
			setCanScrollPrev(carouselApi.canScrollPrev())
		}, [carouselApi])

		const scrollNext = React.useCallback(() => {
			carouselApi?.scrollNext()
		}, [carouselApi])

		const scrollPrev = React.useCallback(() => {
			carouselApi?.scrollPrev()
		}, [carouselApi])

		React.useEffect(() => {
			if (!carouselApi) return

			const canScrollSetter = () => {
				setCanScrollNext(carouselApi.canScrollNext())
				setCanScrollPrev(carouselApi.canScrollPrev())
			}

			carouselApi.on("select", canScrollSetter)
			carouselApi.on("reInit", canScrollSetter)

			return () => {
				carouselApi.off("select", canScrollSetter)
				carouselApi.off("reInit", canScrollSetter)
			}
		}, [carouselApi])

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					carouselApi,
					orientation,
					scrollNext,
					scrollPrev,
					canScrollNext,
					canScrollPrev,
				}}
			>
				<div ref={ref} className={cn("relative w-full", className)} {...props}>
					{children}
				</div>
			</CarouselContext.Provider>
		)
	}
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div
				ref={ref}
				className={cn(
					"flex",
					orientation === "vertical" && "flex-col",
					className
				)}
				{...props}
			>
				{children}
			</div>
		</div>
	)
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel()

	return (
		<div
			ref={ref}
			role="group"
			aria-roledescription="slide"
			className={cn(
				"shrink-0 grow-0	basis-full",
				orientation === "vertical" ? "py-2" : "px-2",
				className
			)}
			{...props}
		/>
	)
})
CarouselItem.displayName = "CarouselItem"

const CarouselNavigation = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { orientation } = useCarousel()
	return (
		<div
			ref={ref}
			className={cn(
				"flex",
				orientation === "horizontal"
					? "mr-2 mt-2 items-center justify-end space-x-2"
					: "absolute -right-10 bottom-0 flex-col space-y-2",
				className
			)}
			{...props}
		/>
	)
})
CarouselNavigation.displayName = "CarouselNavigation"

const CarouselNext = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => {
	const { scrollNext, canScrollNext, orientation } = useCarousel()

	return (
		<Button
			ref={ref}
			variant="ghost"
			size="icon-sm"
			onClick={scrollNext}
			disabled={!canScrollNext}
			className={cn(
				"[&>svg]:size-5",
				orientation === "vertical" ? "rotate-90" : "",
				className
			)}
			{...props}
		>
			<ChevronRight />
		</Button>
	)
})
CarouselNext.displayName = "CarouselNext"

const CarouselPrevious = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => {
	const { scrollPrev, canScrollPrev, orientation } = useCarousel()

	return (
		<Button
			ref={ref}
			variant="ghost"
			size="icon-sm"
			onClick={scrollPrev}
			disabled={!canScrollPrev}
			className={cn(
				"[&>svg]:size-5",
				orientation === "vertical" ? "rotate-90" : "",
				className
			)}
			{...props}
		>
			<ChevronLeft />
		</Button>
	)
})
CarouselPrevious.displayName = "CarouselPrevious"

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNext,
	CarouselPrevious,
}

export type { CarouselApi }
