import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const sizes = [
	{ size: "sm", iconSize: "icon-sm", label: "Small" },
	{ size: "default", iconSize: "icon", label: "Default" },
	{ size: "lg", iconSize: "icon-lg", label: "Large" },
] as const;

export default function ButtonGroupSizeDemo() {
	return (
		<div className="flex flex-col items-start gap-4">
			{sizes.map(({ size, iconSize, label }) => (
				<ButtonGroup key={size}>
					<Button variant="outline" size={size}>
						{label}
					</Button>
					<Button variant="outline" size={size}>
						Button
					</Button>
					<Button variant="outline" size={iconSize} aria-label="Add">
						<PlusIcon />
					</Button>
				</ButtonGroup>
			))}
		</div>
	);
}
