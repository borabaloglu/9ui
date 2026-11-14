import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioImageDemo() {
	return (
		<AspectRatio
			ratio={16 / 9}
			className="max-w-xs overflow-hidden rounded-xl border"
		>
			<Image
				src="/cover.png"
				alt=""
				width={1600}
				height={1200}
				className="size-full object-cover"
			/>
		</AspectRatio>
	);
}
