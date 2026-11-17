import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sizes = ["sm", "default", "lg"] as const;

export default function InputSizeDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			{sizes.map((size) => (
				<div key={size} className="flex gap-2">
					<Input size={size} aria-label="Email" placeholder="Email" />
					<Button size={size} variant="outline">
						Subscribe
					</Button>
				</div>
			))}
		</div>
	);
}
