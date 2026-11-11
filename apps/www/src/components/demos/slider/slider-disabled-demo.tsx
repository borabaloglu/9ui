import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderDisabledDemo() {
	return (
		<Slider className="max-w-60" defaultValue={50} disabled>
			<SliderLabel>Opacity</SliderLabel>
			<SliderValue />
		</Slider>
	);
}
