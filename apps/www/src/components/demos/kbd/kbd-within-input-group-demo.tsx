import { SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdWithinInputGroupDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="inline-start">
				<InputGroupText>
					<SearchIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput aria-label="Search" placeholder="Search..." />
			<InputGroupAddon align="inline-end">
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>K</Kbd>
				</KbdGroup>
			</InputGroupAddon>
		</InputGroup>
	);
}
