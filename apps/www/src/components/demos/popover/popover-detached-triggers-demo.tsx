"use client";

import { Button } from "@/components/ui/button";
import {
	createPopoverHandle,
	Popover,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
	PopoverViewport,
} from "@/components/ui/popover";

const PLANS = [
	{
		name: "Starter",
		description: "One project and community support.",
	},
	{
		name: "Team",
		description:
			"Unlimited projects, shared workspaces and priority support. Invite as many people as you need and manage what each of them can see.",
	},
	{
		name: "Enterprise",
		description: "Single sign-on, audit logs and a dedicated contact.",
	},
];

const planPopover = createPopoverHandle<(typeof PLANS)[number]>();

export default function PopoverDetachedTriggersDemo() {
	return (
		<div className="flex gap-2">
			{PLANS.map((plan) => (
				<PopoverTrigger
					key={plan.name}
					handle={planPopover}
					payload={plan}
					render={<Button variant="outline" />}
				>
					{plan.name}
				</PopoverTrigger>
			))}
			<Popover handle={planPopover}>
				{({ payload }) => (
					<PopoverPopup>
						<PopoverViewport>
							<PopoverHeader>
								<PopoverTitle>{payload?.name}</PopoverTitle>
								<PopoverDescription>{payload?.description}</PopoverDescription>
							</PopoverHeader>
						</PopoverViewport>
					</PopoverPopup>
				)}
			</Popover>
		</div>
	);
}
