import { Slider, SliderValue } from "@/components/ui/slider"

export default function SliderWithValueDemo() {
	return (
		<Slider className="max-w-100" defaultValue={50}>
			<div className="flex justify-between">
				<span className="text-muted-foreground mt-3 text-xs font-medium">
					Opacity
				</span>
				<SliderValue />
			</div>
		</Slider>
	)
}
