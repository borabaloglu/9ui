import * as React from "react";

import { Separator } from "@/components/ui/separator";

const items = [
	{
		label: "Plan",
		value: "Pro",
	},
	{
		label: "Seats",
		value: "12",
	},
	{
		label: "Renews",
		value: "Dec 1, 2026",
	},
];

export default function SeparatorListDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-3 text-sm">
			{items.map((item, index) => (
				<React.Fragment key={item.label}>
					<div className="flex items-center justify-between">
						<div className="leading-none font-medium">{item.label}</div>
						<div className="text-muted-foreground">{item.value}</div>
					</div>
					{index < items.length - 1 && <Separator />}
				</React.Fragment>
			))}
		</div>
	);
}
