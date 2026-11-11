import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderLabelValueDemo() {
	return (
		<Slider className="max-w-60" defaultValue={50}>
			<SliderLabel>Opacity</SliderLabel>
			<SliderValue />
		</Slider>
	);
}
