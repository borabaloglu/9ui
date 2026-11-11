import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";

export default function SliderFormatDemo() {
	return (
		<Slider
			className="max-w-60"
			defaultValue={[200, 800]}
			max={1000}
			step={10}
			format={{
				style: "currency",
				currency: "USD",
				maximumFractionDigits: 0,
			}}
			thumbLabels={["Minimum price", "Maximum price"]}
		>
			<SliderLabel>Price range</SliderLabel>
			<SliderValue />
		</Slider>
	);
}
