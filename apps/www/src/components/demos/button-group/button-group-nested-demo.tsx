import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupNestedDemo() {
	return (
		<ButtonGroup aria-label="Pagination">
			<ButtonGroup>
				<Button variant="outline" size="icon" aria-label="Page 1">
					1
				</Button>
				<Button variant="outline" size="icon" aria-label="Page 2">
					2
				</Button>
				<Button variant="outline" size="icon" aria-label="Page 3">
					3
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="icon" aria-label="Previous page">
					<ArrowLeftIcon />
				</Button>
				<Button variant="outline" size="icon" aria-label="Next page">
					<ArrowRightIcon />
				</Button>
			</ButtonGroup>
		</ButtonGroup>
	);
}
