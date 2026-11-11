import { Field, FieldDescription } from "@/components/ui/field";
import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderFieldDemo() {
	return (
		<Field name="zoom" className="max-w-60">
			<Slider defaultValue={100} min={50} max={200} step={10}>
				<SliderLabel>Zoom level</SliderLabel>
				<SliderValue />
			</Slider>
			<FieldDescription>Adjusts the size of the interface.</FieldDescription>
		</Field>
	);
}
