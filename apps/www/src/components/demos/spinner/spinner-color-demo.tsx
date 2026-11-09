import { Spinner } from "@/components/ui/spinner";

export default function SpinnerColorDemo() {
	return (
		<div className="flex items-center gap-6">
			<Spinner className="size-6" />
			<Spinner className="text-muted-foreground size-6" />
			<Spinner className="text-destructive size-6" />
		</div>
	);
}
