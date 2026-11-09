import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdDemo() {
	return (
		<div className="flex flex-col items-center gap-3">
			<div className="flex items-center gap-1">
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
				<Kbd>⌫</Kbd>
			</div>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<Kbd>Shift</Kbd>
				<Kbd>P</Kbd>
			</KbdGroup>
		</div>
	);
}
