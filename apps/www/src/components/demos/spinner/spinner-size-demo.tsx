import { Spinner } from "@/components/ui/spinner";

export default function SpinnerSizeDemo() {
	return (
		<div className="flex items-center gap-6">
			<Spinner className="size-3" />
			<Spinner />
			<Spinner className="size-6" />
			<Spinner className="size-8" strokeWidth={1.5} />
		</div>
	);
}
