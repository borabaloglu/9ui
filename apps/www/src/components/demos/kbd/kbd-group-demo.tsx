import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdGroupDemo() {
	return (
		<p className="text-muted-foreground text-sm">
			Press{" "}
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>C</Kbd>
			</KbdGroup>{" "}
			to copy and{" "}
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>V</Kbd>
			</KbdGroup>{" "}
			to paste.
		</p>
	);
}
