import { Slider, SliderValue } from "@/components/ui/slider"

export default function SliderWithValue() {
	return (
		<Slider defaultValue={50}>
			<div className="flex justify-between">
				<span className="mt-3 text-xs font-medium text-muted-foreground">
					Opacity
				</span>
				<SliderValue />
			</div>
		</Slider>
	)
}
