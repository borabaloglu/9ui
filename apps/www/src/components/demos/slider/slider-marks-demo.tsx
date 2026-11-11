import { Slider } from "@/components/ui/slider";

const marks = [0, 25, 50, 75, 100];

export default function SliderMarksDemo() {
	return (
		<Slider
			className="max-w-60"
			defaultValue={50}
			step={25}
			aria-label="Volume"
		>
			<div
				aria-hidden
				className="relative order-last col-span-2 mx-2 h-4 select-none any-pointer-coarse:mx-2.5"
			>
				{marks.map((mark) => (
					<span
						key={mark}
						className="text-muted-foreground absolute -translate-x-1/2 text-xs tabular-nums"
						style={{ left: `${mark}%` }}
					>
						{mark}
					</span>
				))}
			</div>
		</Slider>
	);
}
