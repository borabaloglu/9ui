import { Kbd } from "@/components/ui/kbd";

export default function KbdDemo() {
	return (
		<div className="flex items-center gap-2 text-sm">
			<Kbd>⌘</Kbd>+<Kbd>K</Kbd>
		</div>
	);
}
