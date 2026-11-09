import * as React from "react";

import { Separator } from "@/components/ui/separator";

const items = [
	{
		title: "Account",
		subtitle: "Profile & Security",
	},
	{
		title: "Subscription",
		subtitle: "Billing & Payments",
	},
	{
		title: "Team",
		subtitle: "Users & Permissions",
	},
];

export default function SeparatorVerticalDemo() {
	return (
		<div className="flex gap-3 text-sm">
			{items.map((item, index) => (
				<React.Fragment key={item.title}>
					<div className="flex flex-col gap-1">
						<div className="font-medium">{item.title}</div>
						<div className="text-muted-foreground text-xs">{item.subtitle}</div>
					</div>
					{index < items.length - 1 && <Separator orientation="vertical" />}
				</React.Fragment>
			))}
		</div>
	);
}
