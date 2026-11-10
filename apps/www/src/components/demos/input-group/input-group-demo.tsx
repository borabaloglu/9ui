import { SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="inline-start">
				<InputGroupText>
					<SearchIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput aria-label="Search" placeholder="Search..." />
		</InputGroup>
	);
}
