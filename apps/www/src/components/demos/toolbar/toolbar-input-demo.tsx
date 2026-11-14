import { ArrowDownUpIcon, ListFilterIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarInput,
	ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarInputDemo() {
	return (
		<Toolbar aria-label="Table tools">
			<ToolbarButton render={<Button variant="ghost" />}>
				<ListFilterIcon />
				Filter
			</ToolbarButton>
			<ToolbarButton render={<Button variant="ghost" />}>
				<ArrowDownUpIcon />
				Sort
			</ToolbarButton>
			<ToolbarSeparator />
			<InputGroup className="w-44">
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
				<ToolbarInput
					render={<InputGroupInput placeholder="Search" aria-label="Search" />}
				/>
			</InputGroup>
		</Toolbar>
	);
}
