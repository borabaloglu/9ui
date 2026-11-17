import { SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";

const sizes = ["sm", "default", "lg"] as const;

export default function InputGroupSizeDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			{sizes.map((size) => (
				<InputGroup key={size} size={size}>
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
					<InputGroupInput aria-label="Search" placeholder="Search" />
					<InputGroupAddon align="inline-end">
						<InputGroupButton>Search</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			))}
		</div>
	);
}
