import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderStepDemo() {
	return (
		<Slider
			className="max-w-60"
			defaultValue={16}
			min={12}
			max={24}
			step={2}
			largeStep={4}
		>
			<SliderLabel>Font size</SliderLabel>
			<SliderValue />
		</Slider>
	);
}
