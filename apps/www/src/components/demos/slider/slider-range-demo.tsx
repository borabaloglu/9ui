import { Slider } from "@/components/ui/slider";

export default function SliderRangeDemo() {
	return (
		<Slider
			className="max-w-60"
			defaultValue={[20, 80]}
			thumbLabels={["Minimum price", "Maximum price"]}
		/>
	);
}
