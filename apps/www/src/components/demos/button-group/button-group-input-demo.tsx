import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export default function ButtonGroupInputDemo() {
	return (
		<ButtonGroup className="w-full max-w-sm">
			<Input aria-label="Search" placeholder="Search..." />
			<Button variant="outline" size="icon" aria-label="Search">
				<SearchIcon />
			</Button>
		</ButtonGroup>
	);
}
